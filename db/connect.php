<?php

try
{
$pdo = new PDO('mysql:host=localhost; dbname=configurator; encoding=utf8','root','placki123');
$pdo->setAttribute( PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC );
$pdo -> query ('SET NAMES utf8');
$pdo -> query ('SET CHARACTER_SET utf8_unicode_ci');
} 
catch(PDOExepction $e)
{
	echo $e->getMessage()."<br>";
	die();
}





?>