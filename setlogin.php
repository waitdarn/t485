<?php
    // Read authorized ips file
    $filename = "authorized_ips";
    $authorized_ips = file($filename, FILE_IGNORE_NEW_LINES);
    
    
    // Get user ip
    $user_ip = $_SERVER["REMOTE_ADDR"];
    
    
    // Write ip to file
    if (!$authorized) {
        $myfile = fopen($filename, "r+") or die("Unable to open file!");
        
        array_push($authorized_ips, $user_ip);
        
        foreach($authorized_ips as $ip) {
            fwrite($myfile, $ip . "\n");
        }
        
        fclose($myfile);
    }
?>