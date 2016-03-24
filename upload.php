<?php
// Count # of uploaded files in array
$total = count($_FILES['upload']['name']);

// Loop through each file
for($i=0; $i<$total; $i++) {
    $target = "upload/";
    $target = $target . basename( $_FILES['uploaded']['name']) ;
    $ok=1;   
    //This is our limit file type condition  
    if ($uploaded_type =="text/php")  {  echo "No PHP files<br>";  $ok=0;  }
    //Here we check that $ok was not set to 0 by an error  
    if ($ok==0)  {
        Echo "Sorry your file was not uploaded";  
        
    } else  {
        if(move_uploaded_file($_FILES['uploaded']['tmp_name'], $target))  {
            echo "The file ". basename( $_FILES['uploadedfile']['name']). " has been uploaded";  
        }  else  {
        echo "Sorry, there was a problem uploading your file.";  
        } 
    
    }  
}
?>
