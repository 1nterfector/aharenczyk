<?php
if (isset($_POST['id']) === true && empty($_POST['id']) === false )
{

require "../db/connect.php";



switch (($_POST['id'])) 
{
	case '1':
		$question=$pdo->
		prepare("SELECT * FROM interface WHERE InterfaceID IN (1,2,3,4)");
		break;
	case '2': 
		$question=$pdo->
		prepare("SELECT * FROM interface WHERE InterfaceID IN (1,2,3,4) ");
		break;
	case '3': 
		$question=$pdo->
		prepare("SELECT * FROM interface WHERE InterfaceID IN (1,2,3,4,5,6,7,32,33,34,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,57,58,59,60) ");
		break;
	case '4': 
		$question=$pdo->
		prepare("SELECT * FROM interface WHERE InterfaceID IN(5,6,7,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,57,58,59,60) ");
		break;
	case '5': 
		$question=$pdo->
		prepare("SELECT * FROM interface WHERE InterfaceID IN (12,13,14,37,38,39,47,48,49,100) ");
		break;
	case '6': 
		$question=$pdo->
		prepare("SELECT * FROM interface WHERE InterfaceID IN (35,36,8,10,11,20) ");
		break;
	case '7': 
		$question=$pdo->
		prepare("SELECT * FROM interface WHERE InterfaceID IN (9,10,11) ");
		break;
	case '8': 
		$question=$pdo->
		prepare("SELECT * FROM interface WHERE InterfaceID IN (42,43,40,56) ");
		break;						
	case '9': 
		$question=$pdo->
		prepare("SELECT * FROM interface WHERE InterfaceID IN (28,29,30,31,32,33,34,35,36,53,54,55,93,104,105) ");
		break;	
	default:break;
}

$question->execute();


$call = $question->fetchAll();
foreach ($call as $param) 
{
	
    echo '<button type="button" class="inter" interface-id="'.$param['InterfaceID'].'">'.$param['Name'].'</button>';

}

}
?>

