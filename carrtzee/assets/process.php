<?php

if(isset($_POST['contact_name']) != ""){

	
			$to = "sheikhanas261@gmail.com";
			$from =  $_POST["contact_email"];
			$message = "&nbsp;&nbsp;&nbsp;&nbsp;<strong>Name: </strong>".$_POST["contact_name"]."<br />";
			$message .= "&nbsp;&nbsp;&nbsp;&nbsp;<strong>Email Address: </strong>".$_POST["contact_email"]."<br />";
			$message .= "&nbsp;&nbsp;&nbsp;&nbsp;<strong>Subject: </strong>".$_POST["contact_subject"]."<br />";
			$message .= "&nbsp;&nbsp;&nbsp;&nbsp; <strong>Message: </strong>".$_POST["message"]."<br />";
			$subject = 'Contact Enquiry';
			$headers = "From: ".$_POST["contact_email"]."\n";
			$headers .= "MIME-Version: 1.0" . "\r\n";
			$headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";

			$send =	mail($to,$subject,$message,$headers);



	if($send)
	{
		echo "success";
	}
	else
	{
		echo "error";
	}
}


if(isset($_POST['subcribe_email']) != ""){

	
			$to = "sheikhanas261@gmail.com";
			$from =  $_POST["subcribe_email"];
			$message .= "&nbsp;&nbsp;&nbsp;&nbsp;<strong>Email Address: </strong>".$_POST["subcribe_email"]."<br />";
			$message .= "&nbsp;&nbsp;&nbsp;&nbsp; <strong>Message: </strong>".$_POST["message"]."<br />";
			$subject = 'Subcribe Email';
			$headers = "From: ".$_POST["subcribe_email"]."\n";
			$headers .= "MIME-Version: 1.0" . "\r\n";
			$headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";

			$send =	mail($to,$subject,$message,$headers);



	if($send)
	{
		echo "success";
	}
	else
	{
		echo "error";
	}
}




?>
