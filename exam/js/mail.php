<?php


$to  = 'zankovich1992@gmail.com';
//$to  = 'freelance-rus@mail.ru';


$name = trim(stripslashes(htmlspecialchars($_POST['name'])));
$tel = trim(stripslashes(htmlspecialchars($_POST['tel'])));
$email = trim(stripslashes(htmlspecialchars($_POST['mailer'])));


$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";

$headers .= "From: $author" . "\r\n";
//$headers .= "From: $author <@mail.ru>" . "\r\n"; // В <> можно писать что угодно

$subject = 'Заявка!'; // Тема сообщения

$message = "<b>Имя:</b> $name <br/>
            <b>Номер:</b> $tel <br/>	
            <b>E-mail:</b> $email <br/>
            <b>Сообщение:</b><br/>
            $text
            ";

mail($to, $subject, $message, $headers);
?>