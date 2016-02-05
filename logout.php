<?php
    // Read authorized ips file
    $filename = "authorized_ips.nocache";
    $authorized_ips_string = fgets(fopen($filename, 'r'));
    // Trims trailing commas
    rtrim($string, ",");
    $authorized_ips = explode(",", $authorized_ips_string);
    
    
    // Get user ip
    $user_ip = $_POST["fingerprint"];
    
    
    // Removes user ip
    if(($key = array_search($user_ip, $authorized_ips)) !== false) {
        unset($authorized_ips[$key]);
    }
    
    
    // Write ip to file
    $myfile = fopen($filename, "w") or die("Unable to open file!");
    
    foreach($authorized_ips as $ip) {
        fwrite($myfile, $ip . ",");
    }
    
    fclose($myfile);
?>