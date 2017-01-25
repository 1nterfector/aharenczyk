<?php
if (isset($_POST['id']) === true && empty($_POST['id']) === false )
{

require "../db/connect.php";



switch (($_POST['id'])) 
{
	case '1':
		$question=$pdo->
		prepare("SELECT product.Name , product.ProductID FROM product INNER JOIN slots WHERE slots.InterfaceID = :id");
		break;
	case '2':
		$question=$pdo->
		prepare("SELECT Name , ProductID FROM product WHERE ComponentID = :id");
		break;
	case '3':
		$question=$pdo->
		prepare("SELECT Name , ProductID FROM product WHERE ComponentID = :id");
		break;
	case '4':
		$question=$pdo->
		prepare("SELECT Name , ProductID FROM product WHERE ComponentID = :id");
		break;
	default:break;
}
$question->bindParam(':id', $_POST['id'], PDO::PARAM_INT);
$question->execute();


$call = $question->fetchAll();
foreach ($call as $param) 
{
	
    echo '<button class="btn btn-primary prod" type="button" onclick="insertProc(this.id); onClick()" id="cpu'.$param['ProductID'].'">'.$param['Name'].'</button>';

}

}
?>