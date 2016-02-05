<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <link rel="icon" type="image/png" href="favicons/favicon-16x16.png" sizes="16x16">

    <title>PHP Test Page</title>
    
</head>

<body>
    <p style="font-size: 16pt; margin-bottom: 40px;">This page is in development.</p>
    
    <?php
        
        // Read authorized ips file
        $filename = "authorized_ips.nocache";
        
        $authorized_ips = file($filename, FILE_IGNORE_NEW_LINES);
        print_r($authorized_ips);
        
        
        // Get user ip
        // $user_ip = $_SERVER["REMOTE_ADDR"];
        $user_ip = "10.240.0.157";
        $authorized = in_array($user_ip, $authorized_ips);
        echo $authorized;
        
        
        // Debug code
        echo "<p>$user_ip</p>";
        echo "<p>Auth: ", $authorized ? 'true' : 'false', "</p>";
        
        
        // Write ip to file
        if (!$authorized) {
            $myfile = fopen($filename, "r+") or die("Unable to open file!");
            
            array_push($authorized_ips, $user_ip);
            print_r($authorized_ips);
            
            foreach($authorized_ips as $ip) {
                fwrite($myfile, $ip . "\n");
            }
            
            fclose($myfile);
        }
    ?>
    
</body>

</html>
