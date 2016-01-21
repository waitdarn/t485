<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <link rel="icon" type="image/png" href="favicons/favicon-16x16.png" sizes="16x16">

    <title>PHP Test Page</title>
</head>

<body>
    
    <p>Testing 123</p>
    
    <?php
        $authorized_ips = array("205.174.240.241");
        
        $user_ip = $_SERVER["REMOTE_ADDR"];
        $authorized = true;
        
        foreach ($authorized_ips as $ip) {
            if ($user_ip == $ip) $authorized = true;
        }
        
        echo $user_ip;
        echo "Auth: $authorized";
    ?>
    
</body>

</html>
