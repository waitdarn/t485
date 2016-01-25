<?php
    
    $to = $_POST["recipents"];
    $subject = $_POST["subject"];
    $txt = $_POST["content"];
    $headers = "From: " . $_POST["from"];
    
    
    mail($to,$subject,$txt,$headers);
    
?>
