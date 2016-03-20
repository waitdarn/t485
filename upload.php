<?PHP
$target_path = "/file/";

$target_path = $target_path . basename( $_FILES['uploadedfile']['name']); 

if(move_uploaded_file($_FILES['uploadedfile']['tmp_name'], $target_path)) {
    echo "The file ".  basename( $_FILES['uploadedfile']['name']). 
    " has been uploaded. You can find it at <a href='/file/" . basename( $_FILES['uploadedfile']['name']) . "'>http://t485.org/file/" . basename( $_FILES['uploadedfile']['name']) . "</a>.";
} else{
    echo "There was an error uploading the file, please <a href='/upload.html'>try again</a>!";
}
?>