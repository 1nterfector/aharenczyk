<?php



if (isset($_POST['id']) === true && empty($_POST['id']) === false )
{



require "../db/connect.php";
$iterator=$_POST['id'] + 1;
$question=$pdo->prepare("SELECT Name , ProductID, ComponentID FROM product WHERE ComponentID = :id");

$question->bindParam(':id', $_POST['id'], PDO::PARAM_INT);

$question->execute();


$call = $question->fetchAll();
foreach ($call as $param) 
{
	
    echo '<button class="btn prod" " data-toggle="collapse" data-target="#component-list-'.$_POST['id'].'" type="button" onclick="listFilter('.$param['ProductID'].','.$iterator.')" product-id="'.$param['ProductID'].'">'.$param['Name'].'</button>';

}

}




?>