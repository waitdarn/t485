<?php
    // Read authorized ips file
    $filename = "authorized_ips";
    $authorized_ips = file($filename, FILE_IGNORE_NEW_LINES);
    
    
    // Get user ip
    // $user_ip = $_SERVER["REMOTE_ADDR"];
    $user_ip = '76.247.185.191';
    $authorized = in_array($user_ip, $authorized_ips);
    
    
    // Write ip to file
    $myfile = fopen($filename, "r+") or die("Unable to open file!");
    
    // Removes user ip
    array_splice($authorized_ips, array_search($user_ip, $authorized_ips), 1);
    
    
    foreach($authorized_ips as $ip) {
        fwrite($myfile, $ip . "\n");
    }
    
    fclose($myfile);
?>