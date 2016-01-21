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
        $ip = $_SERVER['REMOTE_ADDR'];
        
        echo $ip;
    ?>
    
</body>

</html>
