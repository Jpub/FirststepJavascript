<?php
if(isset($_GET["url"]) && preg_match("/^https?:/",$_GET["url"])){
    $ch = curl_init($_GET["url"]);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
	curl_setopt($ch, CURLOPT_TIMEOUT, 60);
	$data = curl_exec($ch);
	curl_close($ch);
	echo $data;
}else{
    echo "ERROR!";
}