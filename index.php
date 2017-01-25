<!DOCTYPE html>
<html lang="pl">
<head>
	<!--Podstawowe informacje o stronie-->
	<meta charset="utf-8">
	<meta name="description" content="To jest konfigurator zestawów komputerowych. Możesz dzięki niemu stworzyć swój wymarzony komputer. Pomoże Ci wybrać odpowiednie podzespoły. Sprawdzi, czy są kompatybilne. Dzięki temu, nie musisz już się martwić, że coś nie będzie do czegoś pasowało.">
		<meta name="keywords" content="procesor, płyta główna, karta graficzna, komputer, konfigurator, zasilacz, obudowa">
	<meta http-equiv="X-UA-Comaptible" content="IE=edge,chrome=1">
	<!---->
	<!--JQuery-->
	<script src="https://code.jquery.com/jquery-3.1.1.min.js" defer></script>
	<script src="http://code.jquery.com/jquery-migrate-1.1.0.js" defer></script>
	<!---->
	<!--Bootstrap-->
	<link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.css" defer>
	<script type="text/javascript" src="bootstrap/js/bootstrap.js" defer></script>
	<!---->
	<!--Pliki JS,CSS,czcionek-->
	<link rel="stylesheet" type="text/css" href="css/style.css" defer>
	<link href="https://fonts.googleapis.com/css?family=Teko:400,700|Anonymous+Pro:400,700|Space+Mono:400,700|VT323&amp;subset=latin-ext" rel="stylesheet">
	<script src="js/functions.js" defer></script>
	<script src="js/create_categories.js" defer></script>
	<script src="js/products_filter_receiver.js" defer></script>
	<script src="js/add_products.js" defer></script>
	<script src="js/add_interfaces.js" defer></script>
	
	<!---->
	<!--Tytuł-->
	<title>PConfig</title>
	<link rel="Shortcut icon" href="favicon.ico" />
	<!---->

</head>

<body>
	<!--Główna zawartość strony-->
	<div id="container">
		<!--Logo-->
		<div id="logo1"><span style="color:black;">P</span><span style="color:#790808">Config</span></div><div id="logo2">KONFIGURATOR ZESTAWÓW KOMPUTEROWYCH</div>
		<!---->
		<!--Lista konfiguratora po lewej-->
		<div id="config"  class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
		<!--Wybrany zestaw-->
		<div style="font-size: 27px;width: 350px;text-align: center;margin-bottom: 0px; font-family: 'Anonymous Pro', monospace;font-weight: bold;">Wybrany zestaw</div>
		<!---->
		<!--Przykład-->
		
		 

		</div><!-- float left-->
		<!--Lista produktów-->
		<div id="products" class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
		<div style="font-size: 27px;width: 350px;text-align: center;margin-bottom: 0px;font-family: 'Anonymous Pro', monospace;font-weight: bold;">Lista produktów</div>
		


		</div><!-- float left-->

		<div style="clear: both;"></div>

		<!--Stopka-->
		<div id="footer"></div>

	</div>
</body>
</html>