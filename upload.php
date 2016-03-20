<?php
// In PHP versions earlier than 4.1.0, $HTTP_POST_FILES should be used instead
// of $_FILES.

$uploaddir = '/file/';
$uploadfile = $uploaddir . basename($_FILES['userfile']['name']);

// Check if file already exists
if (file_exists($target_file)) {
   echo'{"error":100}';
} else {
    if (move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile)) {
        echo '{"error":"none"}';
    }
}
?>