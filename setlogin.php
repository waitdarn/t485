<?php
    // Read authorized ips file
    $filename = "authorized_ips.nocache";
    $authorized_ips_string = fgets(fopen($filename, 'r'));
    // Trims trailing commas
    rtrim($string, ",");
    $authorized_ips = explode(",", $authorized_ips_string);
    
    
    // Get user ip
    $user_ip = $_POST["fingerprint"];
    
    
    // Get timestamp
    $date = date_create();
    $time = date_timestamp_get($date);
    $time += 86400;
    
    // Add user ip
    array_push($authorized_ips, "$user_ip");
    
    
    // Write ip to file
    $myfile = fopen($filename, "r+") or die("Unable to open file!");
    
    foreach($authorized_ips as $ip) {
        fwrite($myfile, $ip . ",");
    }
    
    fclose($myfile);
?>