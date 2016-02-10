<html>
    
    <head>
        <title>Redirecting...</title>
        <META http-equiv="refresh" content="1;URL=http://t485.org/logout.html">
    </head>
    
    <body>
        
        <?php
            // Read authorized ips file
            $response = file_get_contents("https://t485.firebaseio.com/authorized.json");
            // echo "<p>$response</p>";
            $response_decoded = json_decode($response);
            var_dump($response_decoded);
            echo "<p></p>";
            
            $authorized_ips = (Array) $response_decoded;
            echo "<p></p>";
            
            
            
            // Get user ip
            $user_ip = htmlspecialchars($_GET["fingerprint"]);
            // $user_ip = "07074660851debcf1fb8127875a32270";
            var_dump($user_ip);
            echo "<p></p>";
            
            // Removes user ip
            for($i = 0; $i < sizeof($authorized_ips); $i++) {
                if ($authorized_ips[$i]->{"fingerprint"} == $user_ip) {
                    unset($authorized_ips[$i]);
                }
            }
            var_dump($authorized_ips);
            echo "<p></p>";
            
            
            // Get timestamp
            $date = date_create();
            
            // Remove expired ips
            for($i = 0; $i < sizeof($authorized_ips); $i++) {
                if ($authorized_ips[$i]->{"expire"} < $curTime) {
                    unset($authorized_ips[$i]);
                }
            }
            var_dump($authorized_ips);
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
        ?>
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
        <script src="https://cdn.firebase.com/js/client/2.4.0/firebase.js"></script>
        
        <script>
            var main = [ <?=$str?> ];
            console.log(main);
            
            var ref = new Firebase('https://t485.firebaseio.com/authorized');
            ref.set(main);
        </script>
    
    </body>

</html>