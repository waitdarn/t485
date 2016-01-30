<?php
    $to = $_POST["recipents"];
    $subject = $_POST["subject"];
    $content = $_POST["content"];
    $headers = "From: " . $_POST["from"];
    
    mail($to, $subject, $content, $headers);
?>