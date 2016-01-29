<?php
    // Read authorized ips file
    $filename = "authorized_ips";
    $authorized_ips_string = fgets(fopen($filename, 'r'));
    $authorized_ips = explode(",", $authorized_ips_string);
    
    
    // Get user ip
    $user_ip = $_POST["fingerprint"];
    
    
    // Write ip to file
    $myfile = fopen($filename, "r+") or die("Unable to open file!");
    
    array_push($authorized_ips, $user_ip);
    
    foreach($authorized_ips as $ip) {
        fwrite($myfile, $ip . ",");
    }
    
    fclose($myfile);
?>