<?php

if ((isset($_POST['prID']) === true && empty($_POST['prID']) === false) && (isset($_POST['catID']) === true && empty($_POST['catID']) === false) )
{



require "../db/connect.php";
switch (($_POST['catID']))
{
	
	case '2':
			$question=$pdo->prepare(" SELECT DISTINCT slots.ProductID, Name, ComponentID FROM product 
				JOIN slots ON product.ProductID = slots.ProductID 
				WHERE slots.InterfaceID IN (SELECT InterfaceID FROM slots WHERE ProductID = :prID) 
				AND 
				(product.ComponentID =:catID 
				OR product.ComponentID =:catID +1 
				OR product.ComponentID =:catID +2 
				OR product.ComponentID =:catID +3 
				OR product.ComponentID =:catID +4 
				OR product.ComponentID =:catID +5 
				OR product.ComponentID =:catID +6 
				OR product.ComponentID =:catID +7
				) ORDER BY product.ComponentID ASC");

			$question->bindParam(':prID', $_POST['prID'], PDO::PARAM_INT);
			$question->bindParam(':catID', $_POST['catID'], PDO::PARAM_INT);
			
			$question->execute();

			$call = $question->fetchAll();
			
			

			foreach ($call as $param) 
			{
				$categoryID = $param['ComponentID'] +1;
				echo "<!--"."kategoria-".$param['ComponentID']."-->".PHP_EOL.'<button class="btn prod" " data-toggle="collapse" data-target="#component-list-'.$param['ComponentID'].'" type="button" onclick="listFilter('.$param['ProductID'].','.$categoryID.')" product-id="'.$param['ProductID'].'">'.$param['Name'].'</button>'.PHP_EOL;
			}

			
			break;
	case '3': 
			$question=$pdo->prepare(" SELECT DISTINCT slots.ProductID, Name, ComponentID FROM product 
				JOIN slots ON product.ProductID = slots.ProductID 
				WHERE slots.InterfaceID IN (SELECT InterfaceID FROM slots WHERE ProductID = :prID) 
				AND 
				(product.ComponentID =:catID -2 
				OR product.ComponentID =:catID 
				OR product.ComponentID =:catID +1
				) ORDER BY product.ComponentID ASC");

			$question->bindParam(':prID', $_POST['prID'], PDO::PARAM_INT);
			$question->bindParam(':catID', $_POST['catID'], PDO::PARAM_INT);
			
			$question->execute();

			$call = $question->fetchAll();
			
			echo(json_encode($call));

			



			/*foreach ($call as $param) 
			{	
				
				$categoryID = $param['ComponentID'] +1;
				echo "<!--"."kategoria-".$param['ComponentID']."-->".PHP_EOL.'<button class="btn prod" " data-toggle="collapse" data-target="#component-list-'.$param['ComponentID'].'" type="button" onclick="listFilter('.$param['ProductID'].','.$categoryID.')" product-id="'.$param['ProductID'].'">'.$param['Name'].'</button>'.PHP_EOL;
			}
*/
			
			break;		
	case '4': break;
	case '5': break;		
	case '6':
			$question=$pdo->prepare(" SELECT Name FROM product JOIN slots ON product.ProductID = slots.ProductID where slots.InterfaceID IN (SELECT InterfaceID FROM slots WHERE ProductID = :prID) AND product.ComponentID =:catID");
			$q1=($_POST['catID'])-4;
			$question->bindParam(':prID', $_POST['prID'], PDO::PARAM_INT);
			$question->bindParam(':catID', $q1, PDO::PARAM_INT);

			$question->execute(); 
			$call = $question->fetchAll();
			foreach ($call as $param) 
			{
				
			    echo $param['Name'] . $param['ComponentID'];

			}
}



}

?>