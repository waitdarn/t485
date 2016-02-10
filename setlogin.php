<?php
    // Read authorized ips file
    $response = file_get_contents("https://t485.firebaseio.com/authorized.json");
    // echo "<p>$response</p>";
    $response_decoded = json_decode($response);
    var_dump($response_decoded);
    echo "<p></p>";
    
    $authorized_ips = $response_decoded;
    
    
    // Get user ip
    // $user_ip = $_POST["fingerprint"];
    $user_ip = "airesn4n3e3242";
    var_dump($user_ip);
    echo "<p></p>";
    
    // Get timestamp
    $date = date_create();
    $curTime = date_timestamp_get($date);
    $time = $curTime + 86400;
    
    // Add user ip
    array_push($authorized_ips, (object) array("expire"=>$time, "fingerprint"=>$user_ip));
    
    
    // Remove expired ips
    for($i = 0; $i < sizeof($authorized_ips); $i++) {
        if ($authorized_ips[$i]["expire"] > $curTime) {
            unset($authorized_ips[$i]);
        }
    }
    var_dump($authorized_ips);
    echo "<p></p>";
    
    
    // Turn array into string
    $str = "";
    foreach($authorized_ips as $ip) {
        $str .= "{'expire':";
        $str .= $ip["expire"];
        $str .= ",'fingerprint':'";
        $str .= $ip["expire"];
        $str .= "'},";
    }
?>

<script>
    // $.getScript('https://cdn.firebase.com/js/client/2.4.0/firebase.js', function() {
    //     var ref = new Firebase('https://t485.firebaseio.com/authorized');
    //     ref.push().set(main);
    // });
    
    var main = [
        <?=$str?>
    ]
    
    console.log(main);
    
</script>