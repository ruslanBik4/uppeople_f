let client_id = '785nfsgboqyzw4';
let client_secret = '2LkOAP8706H5zoOA';

console.log('start');
$.ajax({
    type: "POST",
    url: 'https://www.linkedin.com/oauth/v2/accessToken?grant_type=client_credentials&client_id=' + client_id + '&client_secret=' + client_secret,
    data: {
        grant_type: 'client_credentials',
        client_id: client_id,
        client_secret: client_secret
    },
    success: function (data) {
        console.log(data);
        data = JSON.parse(data);
        console.log(data);

    }
});
