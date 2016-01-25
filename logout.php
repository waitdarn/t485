<?php
    // Read authorized ips file
    $filename = "authorized_ips";
    $authorized_ips = file($filename, FILE_IGNORE_NEW_LINES);
    
    
    // Get user ip
    $user_ip = $_SERVER["REMOTE_ADDR"];
    // $user_ip = '76.247.185.191';
    
    
    
    $myfile = fopen($filename, "r+") or die("Unable to open file!");
    
    // Removes user ip
    if(($key = array_search($user_ip, $authorized_ips)) !== false) {
        unset($authorized_ips[$key]);
    }
    
    // Write ip to file
    foreach($authorized_ips as $ip) {
        fwrite($myfile, $ip . "\n");
    }
    
    fclose($myfile);
?>