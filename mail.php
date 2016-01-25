<?php
    
    $to = "richy.liu.2002@gmail.com";
    $subject = "File to add (auto-generated)";
    $txt = "Url: {$_POST["link"]}\nFile name: {$_POST["file-name"]}.\nReferrer: {$_POST["from"]}";
    $headers = "From: {$_POST["email"]}";
    
    // $to = "richy.liu.2002@gmail.com";
    // $subject = "generated test file";
    // $txt = "test 123";
    // $headers = "From: testtest";
    
    
    echo "<p>$to</p>";
    echo "<p>$subject</p>";
    echo "<p>$txt</p>";
    echo "<p>$headers</p>";
    
    mail($to, $subject, $txt, $headers);
    
?>
