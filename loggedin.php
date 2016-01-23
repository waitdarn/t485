<?php
    
    // Read authorized ips file
    $filename = "authorized_ips";
    $authorized_ips = file($filename, FILE_IGNORE_NEW_LINES);
    
    
    // Get user ip
    $user_ip = $_SERVER["REMOTE_ADDR"];
    
    
    // Check if user ip on list
    $authorized = in_array($user_ip, $authorized_ips);
    
    
    if ($authorized == true) {
        echo "true";
    } else {
        echo "false";
    }
    
?>