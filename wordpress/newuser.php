<?php
$user_name = $_POST["username"];
$user_email = $_POST["email"]

$user_id = username_exists( $user_name );
if ( !$user_id and email_exists($user_email) == false ) {
	$random_password = wp_generate_password( $length=12, $include_standard_special_chars=false );
	$user_id = wp_create_user( $user_name, $random_password, $user_email );
	echo '{"password":"' . $random_password . '"}';
} else {
	echo '{"error":"User Created"}';
}
?>