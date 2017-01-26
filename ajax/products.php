<?php

require "../db/connect.php";

$question=$pdo->prepare("SELECT Name , ProductID, ComponentID FROM product ORDER BY ComponentID ASC, Name");
$question->execute();


$call = $question->fetchAll();
echo(json_encode($call));

?>