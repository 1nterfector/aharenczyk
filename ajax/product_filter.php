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
			echo(json_encode($call));
			break;
	case '3': 
			$question=$pdo->prepare(" SELECT DISTINCT slots.ProductID, Name, ComponentID FROM product 
				JOIN slots ON product.ProductID = slots.ProductID 
				WHERE slots.InterfaceID IN (SELECT InterfaceID FROM slots WHERE ProductID = :prID) 
				AND 
				(product.ComponentID =:catID -2 
				OR product.ComponentID =:catID 
				OR product.ComponentID =:catID +1
				) ORDER BY product.ComponentID ASC,product.ProductID ASC");

			$question->bindParam(':prID', $_POST['prID'], PDO::PARAM_INT);
			$question->bindParam(':catID', $_POST['catID'], PDO::PARAM_INT);
			$question->execute();
			$call = $question->fetchAll();
			echo(json_encode($call));
			break;		
	case '4':
			$question=$pdo->prepare(" SELECT DISTINCT slots.ProductID, Name, ComponentID FROM product 
				JOIN slots ON product.ProductID = slots.ProductID 
				WHERE slots.InterfaceID IN (SELECT InterfaceID FROM slots WHERE ProductID = :prID) 
				AND 
				product.ComponentID =:catID -2 
				ORDER BY product.ComponentID ASC");
			$question->bindParam(':prID', $_POST['prID'], PDO::PARAM_INT);
			$question->bindParam(':catID', $_POST['catID'], PDO::PARAM_INT);
			$question->execute(); 
			$call = $question->fetchAll();
			echo(json_encode($call));
			break; 
	case '5': 
			$question=$pdo->prepare(" SELECT DISTINCT slots.ProductID, Name, ComponentID FROM product 
				JOIN slots ON product.ProductID = slots.ProductID 
				WHERE slots.InterfaceID IN (SELECT InterfaceID FROM slots WHERE ProductID = :prID) 
				AND 
				(product.ComponentID =:catID-1 
				OR product.ComponentID =:catID -3 
				OR product.ComponentID =:catID -4 
				) ORDER BY product.ComponentID ASC");

			$question->bindParam(':prID', $_POST['prID'], PDO::PARAM_INT);
			$question->bindParam(':catID', $_POST['catID'], PDO::PARAM_INT);
			$question->execute();
			$call = $question->fetchAll();
			echo(json_encode($call));
			break;		
	case '6':
			$question=$pdo->prepare(" SELECT DISTINCT slots.ProductID, Name, ComponentID FROM product 
				JOIN slots ON product.ProductID = slots.ProductID 
				WHERE slots.InterfaceID IN (SELECT InterfaceID FROM slots WHERE ProductID = :prID) 
				AND 
				product.ComponentID =:catID -5 
				ORDER BY product.ComponentID ASC");
			$question->bindParam(':prID', $_POST['prID'], PDO::PARAM_INT);
			$question->bindParam(':catID', $_POST['catID'], PDO::PARAM_INT);
			$question->execute(); 
			$call = $question->fetchAll();
			echo(json_encode($call));
			break;
	case '7':
			$question=$pdo->prepare(" SELECT DISTINCT slots.ProductID, Name, ComponentID FROM product 
				JOIN slots ON product.ProductID = slots.ProductID 
				WHERE slots.InterfaceID IN (SELECT InterfaceID FROM slots WHERE ProductID = :prID) 
				AND 
				product.ComponentID =:catID -6 
				ORDER BY product.ComponentID ASC");
			$question->bindParam(':prID', $_POST['prID'], PDO::PARAM_INT);
			$question->bindParam(':catID', $_POST['catID'], PDO::PARAM_INT);
			$question->execute(); 
			$call = $question->fetchAll();
			echo(json_encode($call));
			break;
	case '8':
			$question=$pdo->prepare(" SELECT DISTINCT slots.ProductID, Name, ComponentID FROM product 
				JOIN slots ON product.ProductID = slots.ProductID 
				WHERE slots.InterfaceID IN (SELECT InterfaceID FROM slots WHERE ProductID = :prID) 
				AND 
				product.ComponentID =:catID -7 
				ORDER BY product.ComponentID ASC");
			$question->bindParam(':prID', $_POST['prID'], PDO::PARAM_INT);
			$question->bindParam(':catID', $_POST['catID'], PDO::PARAM_INT);
			$question->execute(); 
			$call = $question->fetchAll();
			echo(json_encode($call));
			break;
	case '9':
			$question=$pdo->prepare(" SELECT DISTINCT slots.ProductID, Name, ComponentID FROM product 
				JOIN slots ON product.ProductID = slots.ProductID 
				WHERE slots.InterfaceID IN (SELECT InterfaceID FROM slots WHERE ProductID = :prID) 
				AND 
				(product.ComponentID =:catID-8 
				OR product.ComponentID =:catID -4 
				OR product.ComponentID =:catID 
				) ORDER BY product.ComponentID ASC");

			$question->bindParam(':prID', $_POST['prID'], PDO::PARAM_INT);
			$question->bindParam(':catID', $_POST['catID'], PDO::PARAM_INT);
			$question->execute();
			$call = $question->fetchAll();
			echo(json_encode($call));
			break;
	case '10':
			$question=$pdo->prepare(" SELECT DISTINCT slots.ProductID, Name, ComponentID FROM product 
				JOIN slots ON product.ProductID = slots.ProductID 
				WHERE slots.InterfaceID IN (SELECT InterfaceID FROM slots WHERE ProductID = :prID) 
				AND 
				(product.ComponentID =:catID-9 
				OR product.ComponentID =:catID -7 
				OR product.ComponentID =:catID -5 
				OR product.ComponentID =:catID -4 
				OR product.ComponentID =:catID -3 
				OR product.ComponentID =:catID -2 
				) ORDER BY product.ComponentID ASC");

			$question->bindParam(':prID', $_POST['prID'], PDO::PARAM_INT);
			$question->bindParam(':catID', $_POST['catID'], PDO::PARAM_INT);
			$question->execute();
			$call = $question->fetchAll();
			echo(json_encode($call));
			break;		
}



}

?>