<?php
    // Read authorized ips file
    $response = file_get_contents("https://t485.firebaseio.com/authorized.json");
    // echo "<p>$response</p>";
    $response_decoded = json_decode($response);
    // var_dump($response_decoded);
    echo "<p></p>";
    
    $authorized_ips = (Array) $response_decoded;
    echo "<p></p>";
    
    
    // Get redirect url
    $redir = htmlspecialchars($_GET["redir"]);
    if ($redir == "") {
        $redir = "index.html";
    }
    
    
    // Get user ip
    $user_ip = htmlspecialchars($_GET["fingerprint"]);
    // $user_ip = "07074660851debcf1fb8127875a32270";
    // var_dump($user_ip);
    echo "<p></p>";
    
    
    // Get timestamp
    $date = date_create();
    $curTime = date_timestamp_get($date);
    $time = $curTime + 86400;
    
    $do_not_add_ip = false;
    
    // Remove expired ips
    for($i = 0; $i < sizeof($authorized_ips); $i++) {
        if ($authorized_ips[$i]->{"expire"} < $curTime) {
            unset($authorized_ips[$i]);
        } else if ($authorized_ips[$i]->{"fingerprint"} == $user_ip) {
            $do_not_add_ip = true;
        }
    }
    // var_dump($authorized_ips);
    echo "<p></p>";
    
    
    // Add user ip
    if (!$do_not_add_ip) {
        array_push($authorized_ips, (object) array("expire"=>$time, "fingerprint"=>$user_ip));
    }
    // var_dump($authorized_ips);
    echo "<p></p>";
    
    
    // Turn array into string
    $str = "";
    foreach($authorized_ips as $ip) {
        $str .= "{'expire':";
        $str .= $ip->{"expire"};
        $str .= ",'fingerprint':'";
        $str .= $ip->{"fingerprint"};
        $str .= "'},";
    }
    $str = rtrim($str, ",");
?>
<html>
    
    <head>
        <title>Loggin in...</title>
    </head>
    
    <body>
        
        <p>If you don't get redirected within 5 seconds, click <a href="<?=$redir?>">here</a>.</p>
        
    
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
        <script src="https://cdn.firebase.com/js/client/2.4.0/firebase.js"></script>
        
        <script>
            var main = [ <?=$str?> ];
            console.log(main);
            
            var ref = new Firebase('https://t485.firebaseio.com/authorized');
            ref.set(main, function(error) {
                window.location.replace('<?=$redir?>');
                // console.log('<?=$redir?>');
            });
        </script>
    
    </body>
    
</html>