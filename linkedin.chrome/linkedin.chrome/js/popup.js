let url = decodeURIComponent(window.location.href);
console.log(url)
let mouse_choice = null;
let url_candidate_expr = 'https:\/\/www.linkedin.com\/in\/\S*';
let url_match = url.match(url_candidate_expr);
if (url_match !== null) {
    $('body').prepend("<div id='ext_loader' class='ext_loader'>"
        + "<div class='ext_loader'><img src='"
        + chrome.extension.getURL('img/ajax-loader.gif') + "' /></div><span>Start</span></div>")


    $( document ).ready(function (){
        chrome.storage.local.get('access_token', function (token) { // отримання локальних даних
            if (token !== null && token.access_token !== undefined ) {
                CheckLoad();
            } else {
                open_popup();
            }
        })
    })
}

let base_interval = setInterval(function () {
    let url_new = decodeURIComponent(window.location.href);
    if (url !== url_new) {
        console.log("new url")
        let new_url_match = url_new.match(url_candidate_expr);

        if (url_match !== null && (new_url_match === null || (url_match[0] !== new_url_match[0]))) {
            $('#linkedin_extension_button').hide().remove();
            $('#linkedin_extension_sidenav').hide().remove();
        }
        url = url_new;

        if (new_url_match !== null && (url_match === null || url_match[0] !== new_url_match[0])) {
            CheckLoad();
        }
        url_match = new_url_match;
    }
}, 500);

$(document).on('click', '#send_candidate', function (event) {
    event.preventDefault();
    chrome.storage.local.get('access_token', function (token) { // отримання локальних даних
        $('.result_span').remove();
        let parsed_data = parser();
        let out_icon = '<svg class="out_icon bi bi-box-arrow-in-up-left" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n' +
            '  <path fill-rule="evenodd" d="M1.5 3A1.5 1.5 0 0 1 3 1.5h10A1.5 1.5 0 0 1 14.5 3v5a.5.5 0 0 1-1 0V3a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1H3A1.5 1.5 0 0 1 1.5 13V3z"></path>\n' +
            '  <path fill-rule="evenodd" d="M11.5 6a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V6.5H11a.5.5 0 0 0 .5-.5z"></path>\n' +
            '  <path fill-rule="evenodd" d="M5.646 5.646a.5.5 0 0 0 0 .708l8 8a.5.5 0 0 0 .708-.708l-8-8a.5.5 0 0 0-.708 0z"></path>\n' +
            '</svg>';

        if (token === null) {
            open_popup();
        } else {
            result_count = 1;
            setTimeout(CheckUpdateResult, 1000);

            parsed_data.token = token.access_token;
            chrome.runtime.sendMessage({
                command: 'update_candidate',
                data: parsed_data
            });
            $('#send_candidate').hide().after("<img id='loader' src='" + chrome.extension.getURL('img/ajax-loader.gif') + "' />");

        }
    });
});

function CheckLoad() {
    let extLoader = $('#ext_loader span');
    extLoader.text('check load');

    let update_interval_id = setInterval(function () {
        chrome.storage.local.get('ajax_result', function (ajax_result) { // отримання локальних даних
            if (ajax_result && ajax_result.ajax_result !== null) {

                let result = ajax_result.ajax_result;

                switch (result.status) {
                    case  401:
                        console.log('need auth');
                        extLoader.text('need auth');
                        if ($('#linkedin_extension_overlay').text() > '') {
                            return;
                        }
                        clearInterval(update_interval_id);
                        open_popup(result.api);
                        return;

                    case  0:
                        clearInterval(update_interval_id);
                        extLoader.text(result.result);
                        return;

                    case 'ok':
                        if (result.api === '/api/get_candidate_info') {

                            console.log('create icon');
                            extLoader.text('create icon');

                            clearInterval(update_interval_id);
                            create_sidenav(url_match[0]);
                        }
                }
            }
        })
    }, 10);
}
let result_count = 0;

function CheckUpdateResult() {
    console.log(result_count);
    $('#ext_loader span').text(result_count);

    chrome.storage.local.get('ajax_result', function (ajax_result) { // отримання локальних даних

        if (ajax_result.ajax_result !== null) {
            $('#loader').remove();
            result_count = -1;
            let result = ajax_result.ajax_result;
            if (result.status === 201) {
                $('#send_candidate').show().before('<span class="result_span success">Success</span>');
                $('.is_in_crm_block').html('<a href="' + ajax_result.ajax_result.result.crm_url + '" target="_blank" id="crm_url">' + out_icon + '</a>');
            } else if (result.status >= 400) {

                if (result.formErrors !== undefined) {
                    if (typeof result.formErrors === 'object') {
                        Object.entries(result.formErrors).forEach(function (elem, i, arr) {
                            let input = document.querySelector('#' + elem[0]);
                            const errMsg = elem[1];
                            if (input !== undefined) {
                                input.classList.add('error');
                                input.focus();
                                input.after(errMsg);
                            }
                            $('#send_candidate').show().before('<span class="result_span error">' + elem[0] + errMsg + '</span>');
                        })
                    } else {

                        $('#send_candidate').show();
                    }
                } else if (result.status === 401) {
                    open_popup();
                    $('#send_candidate').show();
                }
            } else {
                $('#send_candidate').show().before('<span class="result_span error">unknown errors</span>');
            }
        } else if (result_count > 0) {
            setTimeout(CheckUpdateResult, 1000)
        } else if (result_count === 5) {
            $('#loader').remove();
            $('#send_candidate').show().before('<span class="result_span error">timeout</span>');
        }

        // location.reload();
    });

    result_count++;
}

$(document).on('click', '#linkedin_extension_button', function (event) {
    event.preventDefault();
    chrome.storage.local.get(['auth_email', "auth_password", "auth_id"], function (auth_data) { // отримання локальних даних

        if (auth_data !== null && auth_data.auth_email !== null && auth_data.auth_email !== undefined
            && auth_data.auth_password !== null && auth_data.auth_password !== undefined
            && auth_data.auth_id !== null && auth_data.auth_id !== undefined) {
            $("#linkedin_extension_sidenav").css('width', '400px');
        } else {
            open_popup();
        }
    });
    chrome.storage.local.get('dublicate', function (data) {
        if (data !== null && data.dublicate !== undefined && data.dublicate.crm_url > "") {
            let out_icon = '<svg class="out_icon bi bi-box-arrow-in-up-left" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n' +
                '  <path fill-rule="evenodd" d="M1.5 3A1.5 1.5 0 0 1 3 1.5h10A1.5 1.5 0 0 1 14.5 3v5a.5.5 0 0 1-1 0V3a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1H3A1.5 1.5 0 0 1 1.5 13V3z"></path>\n' +
                '  <path fill-rule="evenodd" d="M11.5 6a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V6.5H11a.5.5 0 0 0 .5-.5z"></path>\n' +
                '  <path fill-rule="evenodd" d="M5.646 5.646a.5.5 0 0 0 0 .708l8 8a.5.5 0 0 0 .708-.708l-8-8a.5.5 0 0 0-.708 0z"></path>\n' +
                '</svg>';

            $('#dublicate').text("Name is dublicate on CRM").after('<a href="' + data.dublicate.crm_url + '" target="_blank" id="dbl_url">'
                + out_icon + '</a>');
            chrome.storage.local.remove('dublicate');
        } else {
            console.log(data);
        }
    })

});

$(document).on('click', '#close_linkedin_extension_sidenav', function (event) {
    event.preventDefault();
    $("#linkedin_extension_sidenav").css('width', '0px');
});

$(document).on('change', '#linkedin_extension_sidenav #platform_id', function (event) {
    event.preventDefault();
    let platform_id = $(this).val();
    let vacancies_html = '';
    let selected_vacancies_amount = 0;

    chrome.storage.local.get(["candidate", "vacancies", "auth_id"], function (data_) { // отримання локальних даних
        console.log(data_.vacancies);
        $.each(data_.vacancies, function (index, value) {
            if (value.platform_id === parseInt(platform_id)) {
                // &&
            // } value.recruiters.includes(data_.auth_id.toString())) {
                let vacanciesOption = value.id + '">' + value.label + '</option>';
                if (data_.candidate !== null && data_.candidate.data.vacancies !== null &&
                    data_.candidate.data.vacancies !== undefined &&
                    data_.candidate.data.vacancies.includes(value.id)) {
                    vacancies_html += '<option selected value="' + vacanciesOption;
                } else {
                    vacancies_html += '<option value="' + vacanciesOption;
                }
                selected_vacancies_amount++;
            }
        });
        $('#vacancies').html(vacancies_html).select2();
        $('#full_vacancies_amount').val(selected_vacancies_amount);
    });
});

$(document).on('change', '#linkedin_extension_sidenav #tag_id', function (event) {
    event.preventDefault();
    let tag_id = $(this).val();
    if (parseInt(tag_id) === 3) {
        chrome.storage.local.get(["reasons"], function (data_) { // отримання локальних даних

            let reason_html = '<div class="col-md-6 reason_div" >' + '\n' +
                '                    <label><b>Reason</b></label>' + '\n' +
                '                    <select id="reason_id">' +
                '                             <option value=""></option>';

            $.each(data_.reasons, function (index, value) {
                reason_html += '<option value="' + value.id + '">' + value.label + '</option>';
            });

            reason_html += '</select>' +
                '            </div>';

            $('#linkedin_extension_sidenav .tag_div').removeClass('col-md-12').addClass(' col-md-6').after(reason_html);
            $('#reason_id').select2();
        });
    } else {
        $('#linkedin_extension_sidenav .reason_div').remove();
        $('#linkedin_extension_sidenav .tag_div').removeClass('col-md-6').addClass('col-md-12');
    }
});


$(document).on('click', '#linkedin_extension_authorize', function (event) {
    event.preventDefault();
    let back_url = $('#linkedin_extension_popup_content [name=url]').val();
    let auth_email = $('#linkedin_extension_popup_content [name=email]').val();
    let auth_password = $('#linkedin_extension_popup_content [name=password]').val();
    chrome.runtime.sendMessage({
        command: 'authorize',
        data: {
            email: auth_email,
            password: auth_password
        }
    });

    if (back_url > '') {
        chrome.runtime.sendMessage({
            command: back_url,
        });
    }

    $('#linkedin_extension_authorize').hide().after("<img id='loader' src='" + chrome.extension.getURL('img/ajax-loader.gif') + "' />")

    let timerId = setInterval(function () {
        chrome.storage.local.get('ajax_result', function (ajax_result) { // отримання локальних даних

            if (ajax_result.ajax_result !== null &&
                ajax_result.ajax_result.status === 'ok' ) {
                chrome.storage.local.set({
                    auth_email: auth_email,
                    auth_password: auth_password,
                    access_token: ajax_result.ajax_result.result.access_token,
                    auth_id: ajax_result.ajax_result.result.id
                });
                clearInterval(timerId);
                close_popup();
            }
        });
    }, 1000);
});

$(document).on('click', '.window_icon', function (event) {
    event.preventDefault();
    mouse_choice = {
        name: $(this).attr('data-f_name'),
        type: 'base',
        id: $(this).attr('data-f_id'),
    };
});

$(document).on('click', '.popup_icon', function (event) {
    event.preventDefault();
    mouse_choice = {
        name: $(this).attr('data-f_name'),
        type: 'popup',
        id: $(this).attr('data-f_id'),
    };

});

$(document).on('click', '.img_icon', function (event) {
    event.preventDefault();
    mouse_choice = {
        name: $(this).attr('data-f_name'),
        type: 'img',
        id: $(this).attr('data-f_id'),
    };
});

$(document).on('mouseover', 'img, h1, h2, h3, h4, h5, ul, li, span, p, strong, i, b, a', function (event) {
    if (mouse_choice !== null) {
        event.preventDefault();
        event.stopPropagation();
        let element = $(this);
        if (mouse_choice.type === 'img' && element.prop("tagName").toLowerCase() === 'img') {
            $(this).css('box-shadow', '0 0 30px #0073b1');
        } else if (mouse_choice.type === 'base' &&
            ($.inArray(element.prop("tagName").toLowerCase(), ["h1", "h2", "h3", "h4", "h5", "ul", "li", "span", "p", "strong", "i", "b"]) + 1)) {
            $(this).css('box-shadow', '0 0 30px #0073b1');
        } else if (mouse_choice.type === 'popup' &&
            ($.inArray(element.prop("tagName").toLowerCase(), ["h1", "h2", "h3", "h4", "h5", "ul", "li", "span", "p", "strong", "i", "b"]) + 1)) {
            $(this).css('box-shadow', '0 0 30px #0073b1');
        }

        $(window).on('keydown', function (e) {
            if (mouse_choice !== null) {
                let code = e.which || e.keyCode;
                if (code === 83) { // s
                    let level1 = element.attr('class');
                    let level2 = element.parent().attr('class');
                    let level3 = element.parent().parent().attr('class');
                    let level4 = element.parent().parent().parent().attr('class');
                    let level5 = element.parent().parent().parent().parent().attr('class');

                    let selector = class_processing(level5) + ' ' + class_processing(level4) + ' ' + class_processing(level3) + ' ' + class_processing(level2) + ' ' + class_processing(level1);
                    // chrome.storage.local.get(['selectors'], function (dom_keys) { // отримання локальних даних
                    if (mouse_choice.type === 'img') {
                        $('#' + mouse_choice.id).attr('src', (element.attr('src'))).show();

                    } else if (mouse_choice.type === 'base') {
                        $('#' + mouse_choice.id).val((element.text().trim()));
                    } else if (mouse_choice.type === 'popup') {
                        $('#' + mouse_choice.id).val((element.text().trim()));
                    }
                    // });

                    chrome.runtime.sendMessage({
                        command: 'update_selector',
                        name: mouse_choice.name,
                        new_selector: selector,
                        type: mouse_choice.type
                    });

                    element.css('box-shadow', 'none');
                    // mouse_choice = null;
                } else if (code === 27) { //esc
                    mouse_choice = null;
                }
            }
        });
    }
});

$(document).on('mouseleave', '*', function (event) {
    if (mouse_choice !== null) {
        event.preventDefault();
        $(this).css('box-shadow', 'none');
    }
});

$('html').on('click', '#linkedin_extension_close', function () { // .overlay
    close_popup();
});

function class_processing(classes) {
    if (classes !== undefined) {
        return '.' + replaceAll(classes.trim(), ' ', '.');
    } else {
        return '';
    }
}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

// async function parser() {

function parser() {
    let url_new = decodeURIComponent(window.location.href);
    let url = url_new;
    let url_match = url.match(url_candidate_expr);
    // let rezume_file = $('#linkedin_extension_sidenav #text_rezume');

    // $('#linkedin_extension_sidenav .vacancies_block').removeClass('error');
    $('#linkedin_extension_sidenav form .container .row > div').removeClass('error');
    $('#linkedin_extension_sidenav .extension_error_span').remove();

    let errors = [];

    if (!((parseInt($('#full_vacancies_amount').val()) > 0 &&
        $('#linkedin_extension_sidenav #vacancies').val().length > 0) ||
        parseInt($('#full_vacancies_amount').val()) === 0)) {
        errors.push({
            name: 'vacancies',
            field: $('#linkedin_extension_sidenav .vacancies_block'),
            message: "Please, select at least one vacancy"
        });

    }

    if (parseInt($('#linkedin_extension_sidenav #tag_id').val()) === 3 &&
        $('#linkedin_extension_sidenav #reason_id').val().length === 0) {
        errors.push({
            name: 'tags',
            field: $('#linkedin_extension_sidenav .reason_div'),
            message: "Please, select reject reason or change tag"
        });
    }
    let vacancies = $('#linkedin_extension_sidenav #vacancies').val().map(elem => parseInt(elem));

    if (errors.length === 0) {
        return {
            linkedin: url_match[0],
            name: $('#linkedin_extension_sidenav #name').val(),
            // text_rezume: rezume_file.prop('files').length > 0 ? await toBase64(rezume_file.prop('files')[0]) : '',
            link: $('#linkedin_extension_sidenav #CV').val(),
            tag_id: parseInt($('#linkedin_extension_sidenav #reason_id').length > 0 ?
                $('#linkedin_extension_sidenav #reason_id').val() :
                $('#linkedin_extension_sidenav #tag_id').val() ),
            location: '',
            salary: parseInt($('#linkedin_extension_sidenav #salary').val() ),
            language: $('#linkedin_extension_sidenav #language').val(),
            email: $('#linkedin_extension_sidenav #email').val(),
            phone: $('#linkedin_extension_sidenav #phone').val(),
            skype: $('#linkedin_extension_sidenav #skype').val(),
            comment: $('#linkedin_extension_sidenav #comment').val(),
            avatar: $('#linkedin_extension_sidenav #avatar').attr('src'),
            platform_id: parseInt($('#linkedin_extension_sidenav #platform_id').val()),
            vacancies: vacancies,
            seniority_id:  parseInt($('#linkedin_extension_sidenav #seniority_id').val()),
            url: '',
        };
    } else {
        $('.result_span').remove();
        $('#send_candidate').show().before('<span class="result_span error">Error in form</span>');

        $.each(errors, function (index, error) {
            if (error !== null && error !== undefined) {
                error.field.addClass('error').append('<span class="extension_error_span">' + error.message + '</span>');
            }
        });
        return null;
    }
}


function open_popup(url) {
    if ($('#linkedin_extension_overlay').text() > '') {
        return
    }
    let html = '<div id="linkedin_extension_overlay">\n' +
        '\t<div id="linkedin_extension_popup">\n' +
        '\t\t<span id="linkedin_extension_close">X</span>\n' +
        '\t\t<div id="linkedin_extension_popup_content">\n' +
        '   <div class="container">\n' +
        '        <label><b>email</b></label>\n' +
        '        <input type="hidden" name="url" value="' + url + '">\n' +
        '        <input type="email" placeholder="email" name="email" required>\n' +
        '\n' +
        '        <label><b>Password</b></label>\n' +
        '        <input type="password" placeholder="Enter Password" name="password" required>\n' +
        '\n' +
        '        <button id="linkedin_extension_authorize" type="submit">Login</button>\n' +
        '    </div>' +
        '\t\t</div>\n' +
        '\t</div>\n' +
        '</div>';
    $('body').append(html);
}

function close_popup() {
    $('#linkedin_extension_overlay').remove();
    let new_url_match = url_new.match(url_candidate_expr);

    console.log("try requests again");
    chrome.runtime.sendMessage({
        command: 'new_url',
        url: new_url_match[0]
    });
    CheckLoad();
}

function escapeHtml(text) {
    if (text !== undefined) {
        let map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };

        return text.replace(/[&<>"']/g, function (m) {

            return '';
        });
    }
}


function window_icon(f_name, f_id) {
    return '<svg data-f_name="' + f_name + '" data-f_id="' + f_id + '" class="window_icon bi bi-window" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n' +
        '  <path fill-rule="evenodd" d="M14 2H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z"></path>\n' +
        '  <path fill-rule="evenodd" d="M15 6H1V5h14v1z"></path>\n' +
        '  <path d="M3 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm1.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm1.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"></path>\n' +
        '</svg>';
}

function img_icon(f_name, f_id) {
    return '<svg data-f_name="' + f_name + '" data-f_id="' + f_id + '" class="img_icon bi bi-star-half" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n' +
        '  <path fill-rule="evenodd" d="M5.354 5.119L7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.519.519 0 0 1-.146.05c-.341.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.171-.403.59.59 0 0 1 .084-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027c.08 0 .16.018.232.056l3.686 1.894-.694-3.957a.564.564 0 0 1 .163-.505l2.906-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.002 2.223 8 2.226v9.8z"></path>\n' +
        '</svg>';
}

function popup_icon(f_name, f_id) {
    return '<svg data-f_name="' + f_name + '" data-f_id="' + f_id + '" class="popup_icon bi bi-stopwatch" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n' +
        '  <path fill-rule="evenodd" d="M8 15A6 6 0 1 0 8 3a6 6 0 0 0 0 12zm0 1A7 7 0 1 0 8 2a7 7 0 0 0 0 14z"></path>\n' +
        '  <path fill-rule="evenodd" d="M8 4.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5a.5.5 0 0 1 .5-.5zM5.5.5A.5.5 0 0 1 6 0h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"></path>\n' +
        '  <path d="M7 1h2v2H7V1z"></path>\n' +
        '</svg>';
}


function create_sidenav(page_url) {

    let out_icon = '<svg class="out_icon bi bi-box-arrow-in-up-left" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n' +
        '  <path fill-rule="evenodd" d="M1.5 3A1.5 1.5 0 0 1 3 1.5h10A1.5 1.5 0 0 1 14.5 3v5a.5.5 0 0 1-1 0V3a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1H3A1.5 1.5 0 0 1 1.5 13V3z"></path>\n' +
        '  <path fill-rule="evenodd" d="M11.5 6a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V6.5H11a.5.5 0 0 0 .5-.5z"></path>\n' +
        '  <path fill-rule="evenodd" d="M5.646 5.646a.5.5 0 0 0 0 .708l8 8a.5.5 0 0 0 .708-.708l-8-8a.5.5 0 0 0-.708 0z"></path>\n' +
        '</svg>';

    console.log('read candidate data');
    $('#ext_loader span').text('read candidate data');

    let data = new Map()
    //     [
    //     ['linkedin', page_url],
    //     ['name', ''],
    //     ['platform', '']
    // ]);

    chrome.storage.local.get(['selectors', "platforms", "seniorities", "tags", "reasons", "candidate", "vacancies", "auth_id"],
        function (data_) { // отримання локальних даних
        let button = '<div id="linkedin_extension_button" class="linkedin_extension_button">\n' +
            '            <img src="' + chrome.extension.getURL('img/logo_white.png') + '" alt="uppeople" class="uppeople">\n' +
            '        </div>';

        if (data_.candidate !== null && data_.candidate.data.linkedin !== undefined) {
            data.set('crm_url', data_.candidate.crm_url);
            $.each(data_.candidate.data, function (field, value) {
                if (value !== null && value !== undefined) {
                    data.set(field, value);
                }
            });

            button = '<div id="linkedin_extension_button" class="linkedin_extension_button">\n' +
                '            <img src="' + chrome.extension.getURL('img/logo_black.png') + '" alt="uppeople" class="uppeople">\n' +
                '        </div>';
        } else {
            console.log('Candidate not found on DB');
            $('#ext_loader span').text('Candidate not found on DB');
        }


            $('#ext_loader span').text('read data from LinkEdin')
            $.each(data_.selectors, function (index, selector_item) {
                switch (selector_item.type) {
                    case 'base':
                        let base_timer_id = setInterval(function () {
                            let text = $(selector_item.selector).text().trim();
                            if ($(selector_item.selector).length > 0 && text !== null && text !== undefined) {
                                let val = data.get(selector_item.param);
                                if (val > "") {
                                    console.log(selector_item.param, val, "<=", text);
                                }

                                data.set(selector_item.param, text);

                                $('#' + selector_item.param).val(text);
                                clearInterval(base_timer_id);
                                if (selector_item.param === "platform" && data_.candidate === null) {
                                    $.each(data_.platforms, function (index, value) {
                                        if (text.startsWith(value.label)) {
                                            $('#platform_id').val(value.id);
                                            $('#platform_id').select2().trigger('change');
                                        }
                                    })
                                    console.log("platform", text);
                                }
                                if (selector_item.param === "name" && data_.candidate === null) {
                                    chrome.runtime.sendMessage({
                                        command: 'find_dublicate',
                                        params: 'name=' + text,
                                    });

                                    let src = $('img[title="' + text + '"]').attr('src');
                                    if (src > "") {
                                        data.set("avatar", src);
                                        $('img#avatar').attr('src', src).show();
                                    }
                                    console.log('img[title="' + data.get('name') + '"]', src);

                                }
                            }
                        }, 1000);
                        break;
                    case 'img':
                        //title="Vijesh Mohan"
                        let src = $(selector_item.selector).attr('src');
                        if (src !== null && src !== undefined) {
                            data.set(selector_item.param, src);
                        }
                        break;
                    case 'popup':
                        let first = false;
                        let timerId = setInterval(function () {
                            let text = $(selector_item.selector).text().replace('... См. еще', '').trim();
                            if ($(selector_item.selector).length > 0 && text !== null && text !== undefined) {

                                if (!first) {
                                    data.set(selector_item.param, text);
                                    $('#' + selector_item.param).val(text);
                                    first = true;
                                }

                                if (data.get(selector_item.param) !== undefined && data.get(selector_item.param) !== text) {
                                    data.set(selector_item.param, text);
                                    $('#' + selector_item.param).val(text);
                                    clearInterval(timerId);
                                }
                            }
                        }, 1000);
                        break;
                    default:
                        break;
                }
            });

        let platforms_html = '';
        $.each(data_.platforms, function (index, value) {
            let platformsOption = value.id + '">' + value.label + '</option>';

            if (data_.candidate !== null &&
                data_.candidate.data.platform_id !== null &&
                data_.candidate.data.platform_id === value.id) {

                platforms_html += ' <option selected value="' + platformsOption;
            } else {
                platforms_html += ' <option value="' + platformsOption;
            }
        });

        let seniority_html = '';
        $.each(data_.seniorities, function (index, value) {
            let seniorityOption = value.id + '">' + value.label + '</option>';
            if (data_.candidate !== null &&
                data_.candidate.data.seniority_id !== undefined &&
                data_.candidate.data.seniority_id === value.id) {

                seniority_html += '<option selected value="' + seniorityOption;
            } else {
                seniority_html += '<option value="' + seniorityOption;
            }
        });

        let tag_html = '';
        $.each(data_.tags, function (index, value) {
            let tagOption = value.id + '>' + value.label + '</option>';
            if (data_.candidate !== null &&
                data_.candidate.data.tag_id !== undefined &&
                (data_.candidate.data.tag_id === value.id ||
                data_.candidate.data.tag_id > 4 && value.id === 3 )
            ) {
                tag_html += '<option selected value=' + tagOption;
            } else {
                tag_html += '<option value=' + tagOption;
            }
        });

        let reason_html = '';
        if (data_.candidate !== null &&
            data_.candidate.data.tag_id !== undefined &&
            data_.candidate.data.tag_id > 4) {

            reason_html = '<div class="col-md-6 reason_div" >' + '\n' +
                '                        <label><b>Reason</b></label>' + '\n' +
                '                        <select id="reason_id">';

            $.each(data_.reasons, function (index, value) {
                let reasonOption = value.id + '">' + value.label + '</option>';
                if (data_.candidate.data.tag_id === value.id) {
                    reason_html += '<option selected value="' + reasonOption;
                } else {
                    reason_html += '<option value="' + reasonOption;
                }
            });

            reason_html += '</select>' +
                '            </div>';
        }

            $('#ext_loader span').text('start read vacancies');
        let vacancies_html = '<option value="">No vacancies</option>';
        let selected_vacancies_amount = 0;
        $.each(data_.vacancies, function (index, value) {
            let vacanciesOption = value.id + '">' + value.label + '</option>';
            if (data_.candidate !== null &&
                data_.candidate.data.platform_id !== null &&
                    value.platform_id === data_.candidate.data.platform_id) {
                if (data_.candidate.data.vacancies !== null && data_.candidate.data.vacancies !== undefined &&
                    data_.candidate.data.vacancies.includes(value.id)) {
                    vacancies_html += '<option selected value="' + vacanciesOption;
                } else {
                    vacancies_html += '<option value="' + vacanciesOption;
                }
                selected_vacancies_amount++;
                $('#ext_loader span').text(' read vacancy '+ vacanciesOption);
            }
        });

        let languages_levels = [
            'Beginner',
            'Elementary',
            'Pre-Intermediate',
            'Intermediate',
            'Upper Intermediate',
            'Advanced',
            'Proficiency'
        ];

        let language_html = '';
        $.each(languages_levels, function (index, value) {
            if (data_.candidate !== null && data_.candidate.data.language !== undefined && data_.candidate.data.language === value) {
                language_html += '<option selected value="' + value + '">' + value + '</option>';
            } else {
                language_html += '<option value="' + value + '">' + value + '</option>';
            }
        });

            $('#ext_loader span').text('create form');
            console.log('create form');
        let form = '<div id="linkedin_extension_sidenav" class="linkedin_extension_sidenav">\n' +
            '    <a href="javascript:void(0)" id="close_linkedin_extension_sidenav" >&times;</a>\n' +
            '    <form>\n' +
            '        <div class="img_container">' +
            '<img src="' + data.get('avatar') + '" alt="Avatar" id="avatar" class="avatar" '
            + (data.get('avatar') !== undefined ? "" : ' style="display:none" ') + ' >';

        if (data.get('crm_url') > "") {
            let crm_url = data.get('crm_url');
            form += '<a href="' + crm_url + '" target="_blank" id="crm_url">'
                 + out_icon + '</a>'
            if (data_.candidate !== null && data_.candidate.data.date !== undefined) {
                form += '<p> Added: ' + data_.candidate.data.date + '</p>'
            }

        } else {
            form += img_icon('avatar', 'avatar')+ '<p> Нет в CRM </p>';
        }

        let CV_link = '';
        if (data.get('link') !== undefined) {
            CV_link = data.get('link').replace(/<[^>]+>/g, '');
        }

        let hasDublicate = '<span id="dublicate"></span>';

        form += '</div>        <div class="container">' +
            '<div class="row">' +
            '<div class="col-md-12" >' +
            '            <label for="name"><b>Name</b>' + window_icon('name', 'name') + popup_icon('name', 'name') + '</label>\n' +
            hasDublicate +
            '            <input type="text" id="name" data-f_name="name" data-f-type="text" placeholder="Name" value="' + (data.get('name') || '') + '">\n' +
            '</div>' +
            '\n' +
            '<div class="col-md-12" >' +
            '            <label><b>Platform</b>' + window_icon('platform_id', 'platform_id') + popup_icon('platform_id', 'platform_id') + '</label>\n' +
            '            <select id="platform_id"  class="platform_list">' +
            platforms_html +
            '            </select>\n' +
            '</div>' +
            '\n' +
            '<div class="col-md-12" >' +
            '            <label><b>Seniority</b>' + window_icon('seniority_id', 'seniority_id') + popup_icon('seniority_id', 'seniority_id') + '</label>\n' +
            '            <select id="seniority_id"  data-f_name="seniority" data-f-type="text" class="platform_list">' +
            seniority_html +
            '            </select>\n' +
            '</div>' +
            '\n' +
            '<div class="col-md-12 vacancies_block" >' +
            '            <label><b>Vacancies</b>' + window_icon('vacancies', 'vacancies') + popup_icon('seniority_id', 'seniority_id') + '</label>\n' +
            '            <select id="vacancies" multiple data-f_name="vacancies" data-f-type="text" class="vacancies">' +
            vacancies_html +
            '            </select>\n' +
            '<input type="hidden" id="full_vacancies_amount" value="' + selected_vacancies_amount + '"/> ' +
            '</div>' +
            '\n' +
            '<div class="' + (reason_html.length > 0 ? 'col-md-6 ' : 'col-md-12 ') + 'tag_div" >' +
            '            <label><b>Tag</b></label>\n' +
            '            <select id="tag_id"  data-f_name="tag" data-f-type="text" class="platform_list">' +
            tag_html +
            '</select>\n' +
            '</div>' +
            '\n' +
            reason_html +
            '\n' +
            '<div class="col-md-12" >' +
            '            <label><b>Salary</b></label>\n' +
            '            <input type="number" placeholder="Salary" id="salary" value="' + (data.get('salary') || '') + '" >\n' +
            '</div>' +
            '\n' +
            '<div class="col-md-12" >' +
            '            <label><b>English level</b>' + '</label>\n' +
            '               <select id="language" >' +
            language_html +
            '            </select>' +
            '</div>' +
            '<div class="col-md-12" >' +
            '            <label for="phone"><b>Phone</b>' + window_icon('mobile', 'mobile') + popup_icon('mobile', 'mobile') + '</label>\n' +
            '            <input type="text" placeholder="Phone" data-f_name="phone" data-f-type="text" id="phone"  value="' + (data.get('phone') || '') + '"  >\n' +
            '\n' +
            '</div>' +
            '<div class="col-md-12" >' +
            '            <label for="skype"><b>Skype</b>' + window_icon('skype', 'skype') + popup_icon('skype', 'skype') + '</label>\n' +
            '            <input type="text" placeholder="Skype" id="skype"  data-f_name="skype" data-f-type="text" value="' + (data.get('skype') || '') + '" >\n' +
            '\n' +
            '</div>' +
            '<div class="col-md-12" >' +
            '            <label for="email"><b>Email</b>' + window_icon('email', 'email') + popup_icon('email', 'email') + '</label>\n' +
            '            <input type="text" placeholder="Email" id="email"  data-f_name="email" data-f-type="text" value="' + (data.get('email') || '') + '" >\n' +
            '\n' +
            '</div>' +
            '<div class="col-md-12" >' +
            '            <label><b>LinkedIn</b></label>\n' +
            '            <input type="text" placeholder="LinkedIn" value="' + page_url + '" >\n' +
            '\n' +
            '<div class="col-md-12" >' +
            '            <label><b>CV</b></label>\n' +
            '            <input type="text" id="CV" placeholder="CV link" value="' + CV_link + '">\n' +
            '</div>' +
            '\n' +
            '</div>' +
            '<div class="col-md-12" >' +
            '            <label><b>Comment</b></label>\n' +
            '           <textarea id="comment" >' + (data.get('comment') || '') + '</textarea>\n' +
            '\n' +
            '</div>' +
            // '<div class="col-md-12" >' +
            // '            <label><b>About</b>' + window_icon('about', 'about') + popup_icon('about', 'about') + '</label>' +
            // '             <textarea id="about">' +
            // text_rezume.replace(/<[^>]+>/g, '') +
            // '               </textarea>\n' +
            // '\n' +
            // '</div>' +
            '<div class="col-md-12" >' +
            '            <button type="submit" id="send_candidate">Отправить данные</button>\n' +
            '        </div>\n' +
            '</div>' +
            '    </form>\n' +
            '</div>';

            console.log('end reading data, will show icon button now !');
            $('#ext_loader span').text('end reading data, will show icon button now !');

            $('div#ext_loader').remove();
        $('header.artdeco-toasts__header').after(form).after(button);
        $('#platform_id').select2();
        $('#seniority_id').select2();
        $('#vacancies').select2();
        $('#tag_id').select2();
        if ($('#reason_id').length > 0) {
            $('#reason_id').select2();
        }
        $('#language').select2();

        // $('#about').val(text_rezume.replace(/<[^>]+>/g, ''))
    });
}

// var originalLog = console.log;
// console.log = function (obj) {
//     originalLog(JSON.parse(JSON.stringify(obj)));
// };

