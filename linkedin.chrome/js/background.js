let url_candidate_expr = 'https:\/\/www.linkedin.com\/in\/[\w-]*\/\.*';

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tabs) {
        // chrome.storage.local.set({candidate: null});
        let url_match = decodeURIComponent(tabs.url).match(url_candidate_expr);
        if (url_match !== null) {
            if (changeInfo.status === 'loading') {
                // if (changeInfo.status === 'complete') {
                chrome.storage.local.get('access_token', function (token) { // отримання локальних даних
                    if (token !== null) {
                        check(url_match[0]);
                    } else {
                        chrome.storage.local.set({
                            ajax_result: {
                                status: 401,
                                api: "new_url",
                            }
                        });
                    }
                })
            }
        }
    }
);

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    switch (msg.command) {
        case "update_candidate":
            let result = AJAXJson('/api/main/addNewCandidate', msg.data);
            break;
        case "update_selector":
            AJAX('/api/update_selector', 'name=' + msg.name + '&selector=' + encodeURIComponent(msg.new_selector) + '&type=' + msg.type);
            break;
        case "authorize":
            AJAXJson('/api/auth/login', msg.data);
            break;
        case "new_url":
            console.log("try check again");
            check(msg.url);
            break;
        case "find_dublicate":
            AJAX('/api/get_candidate_info', msg.params)
            break;
        default:
            console.log("unknow command", msg)
            // if (msg.data !== undefined) {
            //     AJAXJson(msg.command, msg.data)
            // } else if (msg.params !== undefined) {
            //     AJAX(msg.command, msg.params)
            // } else {
            //     AJAX(msg.command);
            // }
    }
});

const api_url = 'https://161.97.144.240';
// const api_url = 'https://localhost';
let xhttp = new XMLHttpRequest();

function AJAXJson(api, data) {

    xhttp.open("POST", api_url + api, true);
    if (data.token > "") {
        xhttp.setRequestHeader('Authorization', 'Bearer ' + data.token)
    }
    xhttp.setRequestHeader('Content-Type', 'application/json');
    delete data.token;
    let body = JSON.stringify(data);
    xhttp.onreadystatechange = function () {
        if (this.readyState !== 4) {
            return
        }
        if (this.status === 200) {
            let result = JSON.parse(this.responseText);
            chrome.storage.local.set({
                ajax_result: {
                    status: 'ok',
                    message: result.message,
                    result: result,
                    api: api
                }
            });
        } else if (this.status >= 200 && this.status < 300 ) {
            let result = JSON.parse(this.responseText);
            chrome.storage.local.set({
                ajax_result: {
                    status: this.status,
                    message: result.message,
                    result: result,
                    api: api
                }
            });
        } else if (this.status === 400) {
            let data = JSON.parse(this.responseText);
            chrome.storage.local.set({
                ajax_result: {
                    status: this.status,
                    formErrors: data.formErrors,
                    api: api
                }
            });
        } else if (this.status === 401) {
            set401(api);
        } else {
            console.log('error unknown');
            chrome.storage.local.set({
                ajax_result: {
                    status: this.status,
                    result: this.responseText,
                    api: api
                }
            });
        }
    }
    xhttp.send(body)
}

function set401(api) {
    console.log("401, need auth");
    chrome.storage.local.set({
        ajax_result: {
            status: 401,
            result: "",
            api: api
        },
        ajax_error : 401
    });
}

function AJAX(api, param, token) {

    chrome.storage.local.set({
        ajax_result: null
    });
    let xhttp = new XMLHttpRequest();
    xhttp.open("POST", api_url + api, true);
    if (token > '' ){
        xhttp.setRequestHeader('Authorization', 'Bearer ' + token)
    }
    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded', 'Set-Cookie: cross-site-cookie=name; SameSite=Strict; Secure');
    xhttp.onreadystatechange = function () {
        if (this.readyState !== 4) {
            return
        }
        if (this.status === 200) {
            switch (api) {
                case '/api/auth/login':
                    chrome.storage.local.set({
                        ajax_result: {
                            status: 'ok',
                            result: JSON.parse(this.responseText),
                            api: api
                        }
                    });
                    break;

                case '/api/get_platforms':
                    chrome.storage.local.set({platforms: JSON.parse(this.responseText).status});
                    break;

                case '/api/get_seniorities':
                    chrome.storage.local.set({seniorities: JSON.parse(this.responseText).status});
                    break;

                case '/api/get_tags':
                    chrome.storage.local.set({tags: JSON.parse(this.responseText).status});
                    break;

                case '/api/get_reasons':
                    chrome.storage.local.set({reasons: JSON.parse(this.responseText).status});
                    break;

                case '/api/get_recruiter_vacancies':
                    chrome.storage.local.set({vacancies: JSON.parse(this.responseText).vacancies});
                    break;

                case '/api/get_selectors':
                    chrome.storage.local.set({selectors: JSON.parse(this.responseText).data});
                    break;

                case '/api/get_candidate_info':
                    let result_ = JSON.parse(this.responseText);
                    if (param.startsWith("name=")) {
                        chrome.storage.local.set({dublicate: result_});
                    } else {
                        chrome.storage.local.set({candidate: result_});
                    }

                    chrome.storage.local.set({
                        ajax_result: {
                            status: result_.status,
                            result: result_,
                            api: api
                        }
                    });
                    break;

                default:
                    let result = JSON.parse(this.responseText);
                    chrome.storage.local.set({
                        ajax_result: {
                            status: result.status,
                            result: result,
                            api: api
                        }
                    });
                    break;
            }
        } else if (this.status === 204) {
            switch (api) {
                case '/api/get_candidate_info':
                    chrome.storage.local.set({candidate: null});

                    chrome.storage.local.set({
                        ajax_result: {
                            status: "ok",
                            result: '{"data":""}',
                            api: api
                        }
                    })
            }
        } else if (this.status === 400) {
            switch (api) {
                case '/api/get_candidate_info':
                    chrome.storage.local.set({candidate: null});
            }
            chrome.storage.local.set({
                ajax_result: {
                    status: 400,
                    result: JSON.parse(this.responseText),
                    api: api
                }
            });
        } else if (this.status === 401) {
            set401(api);
        } else if (this.status === 0) {
            chrome.storage.local.set({
                ajax_result: {
                    status: 0,
                    result: "pls, open CRM site & try again",
                    api: api
                }
            });
        } else {
            console.log(this.response);
            chrome.storage.local.set({
                ajax_result: {
                    status: this.status,
                    result: this.responseText,
                    api: api
                }
            });

        }
    };

    xhttp.send(param);
}

function check(url_ = null) {
    chrome.storage.local.remove('ajax_error');
    let url = url_ !== null ? url_ : decodeURIComponent(window.location.href);
    chrome.tabs.query({currentWindow: true, active: true}, function (tab) {
        AJAX('/api/get_selectors', null);
        AJAX('/api/get_platforms', null);
        AJAX('/api/get_seniorities', null);
        AJAX('/api/get_tags', null);
        AJAX('/api/get_reasons', null);
        let url_match = url.match(url_candidate_expr);
        if (url_match !== null) {
            chrome.storage.local.get('access_token', function (token) { // отримання локальних даних
                if (token !== null) {
                    AJAX('/api/get_recruiter_vacancies', null, token.access_token);
                    chrome.storage.local.get('ajax_error', function (data) { // отримання локальних даних
                        if (data.ajax_error !== null && data.ajax_error === 401) {
                            console.log(data);
                            // chrome.storage.local.remove('ajax_error');
                            chrome.storage.local.remove('access_token');
                        } else {
                            AJAX('/api/get_candidate_info', 'url=' + url_match[0]);
                        }
                    })
                } else {
                    console.log("need to auth");
                    chrome.storage.local.set({
                        ajax_error : 401
                    });
                }
            })
        }
    });
}

function encodeQueryData(data) {
    const ret = [];
    for (let d in data)
        if (data[d] !== null && data[d].length > 0) {
            ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
        }
    return ret.join('&');
}

