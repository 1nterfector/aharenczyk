<?php
if ((isset($_POST['intID']) === true && empty($_POST['intID']) === false) && (isset($_POST['cmpID']) === true && empty($_POST['cmpID']) === false) )
{

require "../db/connect.php";

$question=$pdo->prepare("SELECT product.Name , product.ProductID ,product.ComponentID 
FROM product 
JOIN slots USING(ProductID) 
WHERE slots.InterfaceID = :intID 
AND ComponentID = :cmpID");

$question->bindParam(':intID', $_POST['intID'], PDO::PARAM_INT);
$question->bindParam(':cmpID', $_POST['cmpID'], PDO::PARAM_INT);
$question->execute();
$call = $question->fetchAll();
echo(json_encode($call));

}
?>