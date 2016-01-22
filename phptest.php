<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <link rel="icon" type="image/png" href="favicons/favicon-16x16.png" sizes="16x16">

    <title>PHP Test Page</title>
    
</head>

<body>
    
    <?php
        $authorized_ips = array("76.247.185.191");
        
        $user_ip = $_SERVER["REMOTE_ADDR"];
        $authorized = in_array($user_ip, $authorized_ips);
        
        echo "<p>$user_ip</p>";
        echo "<p>Auth: ", $authorized ? 'true' : 'false', "</p>";
    ?>
    
</body>

</html>
