<?php

require "../db/connect.php";

$question=$pdo->prepare("SELECT Name , ProductID, ComponentID FROM product ORDER BY ComponentID ASC, Name");
$question->execute();


$call = $question->fetchAll();
foreach ($call as $param) 
{
	$iterator=$param['ComponentID'] + 1;
    echo "<!--"."kategoria-".$param['ComponentID']."-->".PHP_EOL.'<button class="btn prod" " data-toggle="collapse" data-target="#component-list-'.$param['ComponentID'].'" type="button" onclick="listFilter('.$param['ProductID'].','.$iterator.')" product-id="'.$param['ProductID'].'">'.$param['Name'].'</button>'.PHP_EOL;

}

?>