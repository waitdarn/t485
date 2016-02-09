<?php
    // Read authorized ips file
    $filename = "authorized_ips.nocache";
    $authorized_ips_string = fgets(fopen($filename, 'r'));
    
    // Trims trailing commas
    $authorized_ips_string = rtrim($authorized_ips_string, ",");
    
    // Turn string into array
    $authorized_ips = explode(",", $authorized_ips_string);
    foreach ($authorized_ips as $ip) {
        $authorized_ips = explode("|", $ip);
    }
    
    
    // Get user ip
    $user_ip = $_POST["fingerprint"];
    
    
    // Get timestamp
    $date = date_create();
    
    
    // Removes user ip
    for($i = 0; $i < sizeof($authorized_ips); $i++) {
        if ($authorized_ips[$i][0] == $user_ip) {
            unset($authorized_ips[$i]);
        }
    }
    
    // Remove expired ips
    for($i = 0; i < sizeof($authorized_ips); $i++) {
        if ($authorized_ips[$i][1] > $curTime) {
            unset($authorized_ips[$i]);
        }
    }
    
    
    // Write ip to file
    $myfile = fopen($filename, "w") or die("Unable to open file!");
    
    foreach($authorized_ips as $ip) {
        fwrite($myfile, $ip . ",");
    }
    
    fclose($myfile);
?>