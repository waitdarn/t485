<?php
    // Read authorized ips file
    $filename = "authorized_ips";
    $authorized_ips_string = fgets(fopen($filename, 'r'));
    $authorized_ips = explode(",", $authorized_ips_string);
    
    
    // Get user ip
    $user_ip = $_POST["fingerprint"];
    
    
    // Write ip to file
    $myfile = fopen($filename, "w") or die("Unable to open file!");
    
    // Removes user ip
    if(($key = array_search($user_ip, $authorized_ips)) !== false) {
        unset($authorized_ips[$key]);
    }
    
    // Write ip to file
    foreach($authorized_ips as $ip) {
        fwrite($myfile, $ip . ",");
    }
    
    fclose($myfile);
?>