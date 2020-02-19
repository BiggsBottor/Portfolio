<?php 

/**
 * PHP version 5
 *
 * @category PHP
 * @package  PHP_CodeSniffer
 * @author   Biggs Bottor <biggsbottor@gmail.com>
 * @license  http://www.php.net/license/3_01.txt  PHP License 3.01
 * @version  GIT: $Id: v 0.1.1
 * @link     http://NO_URL_YET
 */

// echo 'test only';

switch($_SERVER['REQUEST_METHOD']){
case("OPTIONS"): //Allow preflighting to take place.
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Allow-Headers: content-type");
    exit;
case("POST"): //Send the email;
    header("Access-Control-Allow-Origin: *");

    $json = file_get_contents('php://input');

    $params = json_decode($json);

    // var_dump($params);

    $name = $params->name;
    $email = $params->email;
    $phone = $params->phone;
    $subject = $params->subject;
    $message = $params->message;

    // the structure of the email itself
    $to = 'jonatan.lledo@gmail.com';
    
    $subject = "Portfolio Contact Form with topic: $subject";

    $body = "From:\n\nName: $name";
    $body .= "Email: $email\n\n";
    $body .= "Phone: $phone\n\n";
    $body .= "Message:\n$message";

    $header = "From: $name <$email>";

    if (!mail($to, $subject, $body, $header)) { 
        http_response_code(500); 
    }
        
    break;
default: //Reject any non POST or OPTIONS requests.
    header("Allow: POST", true, 405);
    exit;
}

?>