<?php

require "../db/connect.php";

$question=$pdo->prepare("SELECT DISTINCT interface.Name , interface.InterfaceID, product.ComponentID FROM product JOIN slots USING(ProductID) JOIN interface USING(InterfaceID)  
ORDER BY product.ComponentID ASC, interface.Name ASC");
$question->execute();


$call = $question->fetchAll();
echo(json_encode($call));

?>