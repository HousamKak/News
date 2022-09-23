<?php

include("connection.php");

// getting the query result
$query = $mysqli->prepare("SELECT title,text FROM news");
$query->execute();
$array = $query->get_result();

$response = [];

while($a = $array->fetch_assoc()){
    $response[] = $a;
}

$json = json_encode($response);
echo $json;

?>