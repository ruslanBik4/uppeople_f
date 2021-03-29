<?php
use OAuth;

$client_id = '785nfsgboqyzw4';
$client_secret = '2LkOAP8706H5zoOA';


try {
    $oauth = new OAuth($client_id, $client_secret);
//    $oauth->setToken($request_token, $request_token_secret);
    $access_token_info = $oauth->getAccessToken("https://www.linkedin.com/oauth/v2/accessToken");
    if (!empty($access_token_info)) {
        print_r($access_token_info);
    } else {
        print "Не удалось получить токен доступа, ответ был: " . $oauth->getLastResponse();
    }
} catch (OAuthException $E) {
    echo "Ответ: " . $E->lastResponse . "\n";
}


$result = getContentRequest('https://www.linkedin.com/oauth/v2/accessToken',
    'POST',
    [
        'grant_type' => 'client_credentials',
        'client_id' => $client_id,
        'client_secret' => $client_secret
    ],
    ['Content-Type' => 'application/x-www-form-urlencoded']
);

echo "<pre>";
var_dump($result);
echo "</pre>";


function getContentRequest($url, $method = 'GET', $params = [], $headers = [], $http_opts = [])
{
    $params_string = '';
    if (!empty($params)) {
        $params_string = '?';
        foreach ($params as $key => $value) {
            $params_string .= '&' . $key . '=' . $value;
        }
    }

    $base_headers = [
//        "Accept-language" => "ru",
//        "Content-type" => "application/json"
    ];
    $headers = array_merge($base_headers, $headers);
    $header_string = '';

    foreach ($headers as $key => $value) {
        $header_string .= $key . ': ' . $value . "\r\n";
    }

    $opts = array(
        'http' => array(
            'method' => $method,
            'header' => $header_string
        )
    );

    $opts['http'] = array_merge($opts['http'], $http_opts);

    $context = stream_context_create($opts);
echo $url . $params_string;
    return file_get_contents($url . $params_string, false, $context);

}