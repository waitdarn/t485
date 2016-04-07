<?php
    $redir = $_POST["from"];
?>

<html>
    
    <head>
        <title>Redirecting...</title>
        <META http-equiv="refresh" content="0;URL=http://t485.org/<?=$redir?>">
    </head>
    
    <body id="skrollr-body">
        
        <?php
            $to = "richy.liu.2002@gmail.com";
            $subject = "File to add (auto-generated)";
            $txt = "Url: {$_POST["link"]}\nFile name: {$_POST["name"]}.\nReferrer: {$_POST["from"]}";
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
        
    </body>
    
</html>


