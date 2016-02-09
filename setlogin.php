<?php
    // Read authorized ips file
    $filename = "authorized_ips.nocache";
    $authorized_ips_string = fgets(fopen($filename, 'r'));
    
    // Trims trailing commas
    $authorized_ips_string = rtrim($authorized_ips_string, ",");
    
    // Turn string into array
    $authorized_ips = explode(",", $authorized_ips_string);
    for($i = 0; $i < sizeof($authorized_ips); $i++) {
        $authorized_ips[$i] = explode("|", $authorized_ips[$i]);
    }
    var_dump($authorized_ips);
    echo "<p></p>";
    
    
    // Get user ip
    $user_ip = $_POST["fingerprint"];
    var_dump($user_ip);
    echo "<p></p>";
    
    
    // Get timestamp
    $date = date_create();
    $curTime = date_timestamp_get($date);
    $time = $curTime + 86400;
    
    
    // Add user ip
    array_push($authorized_ips, "{$user_ip}|{$time}");
    
    // Remove expired ips
    for($i = 0; $i < sizeof($authorized_ips); $i++) {
        if ($authorized_ips[$i][1] > $curTime) {
            unset($authorized_ips[$i]);
        }
    }
    var_dump($authorized_ips);
    echo "<p></p>";
    
    
    // // Write ip to file
    $myfile = fopen($filename, "r+") or die("Unable to open file!");
    
    foreach($authorized_ips as $ip) {
        // fwrite($myfile, $ip . ",");
    }
    
    fclose($myfile);
?>