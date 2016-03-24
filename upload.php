<?php
   if(isset($_FILES['image'])){
      $errors= array();
      if (!empty($_POST['newname'])) {
    $new_filename = $_POST['newname'];
} else {
    $new_filename = $_FILES['image']['name'];
}
      $file_size = $_FILES['image']['size'];
      $file_tmp = $_FILES['image']['tmp_name'];
      $file_type = $_FILES['image']['type'];
      $file_ext=strtolower(end(explode('.',$_FILES['image']['name'])));
      

      if($file_ext === "php"){
         $errors[]="PHP files are not allowed, please do not upload php files.";
      }
      if (file_exists($file_name)) {
        $errors[]="The file http://t485.org/file/$file_name already exists. Please change the name.";
    }
      
      if(empty($errors)==true) {
         move_uploaded_file($file_tmp,"file/".$file_name);
         echo "The file has been uploaded to <a href='"."file/".$file_name."'>"."file/".$file_name."</a>";
      }else{
         print_r($errors);
      }
   }
?>
<a href="upload.html">Click here to upload another file or try again.</a>