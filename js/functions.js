//Czyszczenie listy konfiguratora
function clearConfig()
{
     $('#config').html("<div style=\"font-size: 27px;width: 350px;text-align: center;margin-bottom: 0px; font-family: 'Anonymous Pro', monospace;font-weight: bold;\">Wybrany zestaw</div>");
     $( "button[component-id]" ).addClass('cat').removeClass('cat-off').attr("data-toggle","collapse");
     prodView();
     $('.cat').removeClass("turned");
} 
//------

//Dodawanie wszystkich produktów na listę, odświeżanie jej
function prodView()
{
 	$.post('ajax/products.php', 
	    function(data)
	    {
	      var output=JSON.parse(data);
	      JSONreading(output);
	    }
    	);
    $('.cat-off').removeClass('cat-off').addClass('cat');
	$('.turned').removeClass('turned').addClass('cat');
	$('.cat').attr('data-toggle','collapse');
} 
//------

//Dodawanie produktu na listę konfiguratora
function addToConfig(numberOfProduct,numberOfCategory)
{
	console.log("który wybrany to "+whichChosen);
	if(($('.chosen-cfg').length)<13)
	{
		var categoryPlus1=parseInt(numberOfCategory)+1
		categoryPlus1String=toString(categoryPlus1);
		switch (numberOfCategory)
		{
			case 4:
			case 5:
			case 6:
				addMultiple(numberOfCategory,numberOfProduct);
				$( "button[component-id="+numberOfCategory+"]" ).removeClass('cat').addClass('turned');
			break;
			default:

			addMultiple(numberOfCategory,numberOfProduct);

			$( "button[product-id="+numberOfProduct+"]" ).removeAttr('data-toggle');
		    $('#component-list-'+numberOfCategory).removeClass("in");
		    $( "button[component-id="+numberOfCategory+"]" ).removeClass('cat').addClass('cat-off').removeAttr("data-toggle");

		    console.log(numberOfCategory);
		} 
		$("button[prod-chosed="+numberOfProduct+"]").on('click',
		function chosenProductRemove()
		{
			var prodNum=parseInt($(this).attr("chosen-prod-num"));
			logClicks.splice(prodNum,1);
	    	$( "button[component-id="+numberOfCategory+"]" ).addClass('cat').removeClass('cat-off').removeClass('turned').attr("data-toggle","collapse");
	    	listFilter(numberOfProduct,categoryPlus1,false);
	    	whichChosen--;
	    	$(this).remove();

		});
	}
	else
	{
		alert("Lista wybranych podzespołów jest już pełna, nie możesz dodać ich więcej.");
	}	
}
//------

//Odbieranie danych z zapytania post i przekazywanie do odpowiednich kategorii
function JSONreading(returnedTable)
{
	var howManyProds=returnedTable.length-1;

	for(i=0;i<=howManyProds;i++)
	{
	   console.log(returnedTable[i].ComponentID);
	    $("div[category-id="+returnedTable[i].ComponentID+"]" ).html('');
	}
	for(i=0;i<=howManyProds;i++)
	{
	   var nextCategory = parseInt(returnedTable[i].ComponentID)+1;
	   $("div[category-id="+returnedTable[i].ComponentID+"]" ).append('<button class=\"btn prod\" data-toggle=\"collapse\" data-target=\"#component-list-'+returnedTable[i].ComponentID+'\" type=\"button\" onclick=\"listFilter('+returnedTable[i].ProductID+','+nextCategory+')\" product-id=\"'+returnedTable[i].ProductID+'\">'+returnedTable[i].Name+'</button>');
	}
}
//------

//Zapisywanie wybranego zestawu do tekstu
function saveToText()
{
	var contentOfConfig = "";	
	for (var i = 1; i < 13; i++) 
	{
		contentOfConfig+="-----"+$("button[config-id='"+i+"'").html()+"\n" ;
	}
	var hiddenElement = document.createElement('a');
	hiddenElement.href = 'data:attachment/text,' + encodeURI(contentOfConfig);
	hiddenElement.target = '_blank';
	hiddenElement.download = 'konfiguracja.txt';
	hiddenElement.click();
}
//------

//Dodawanie filtrów do kategorii produktów
function JSONaddInterfaces(returnedTable)
{
  var howManyInterfaces=returnedTable.length-1;
  for(i=0;i<=howManyInterfaces;i++)
  {
     var nextCategory = parseInt(returnedTable[i].ComponentID)+1;
     $("div[component-interface-id="+returnedTable[i].ComponentID+"]" ).append('<button type="button" class="inter" onclick="filterInterfaceBased('+returnedTable[i].ComponentID+','+returnedTable[i].InterfaceID+')" interface-id="'+returnedTable[i].InterfaceID+'">'+returnedTable[i].Name+'</button>');
  }
}
//------

//Filtrowanie produktów przez użycie przycisku interface
function filterInterfaceBased(ComponentID,InterfaceID)
{
  	$.post('ajax/interface_filter.php', {intID: InterfaceID , cmpID: ComponentID}, 
    function (data)
    {
      var output=JSON.parse(data);
      console.log(output);
      JSONreading(output);

    }
    );
}
//------
//Zmienna informująca o tym, którym jest dodany podzespół z kolei.
var whichChosen=0;
//------
//Funkcja wspomagająca, służąca do dodawania danego produktu na listę konfiguratora
function addMultiple(numberOfCategory,numberOfProduct)
{
	var categoryPlus1=parseInt(numberOfCategory)+1
	    $( "button[product-id="+numberOfProduct+"]" ).clone().appendTo('#config').removeAttr('product-id').removeClass('prod').addClass('chosen-cfg').removeAttr('data-toggle').removeAttr('onclick').attr("prod-chosed",numberOfProduct).attr("config-id",numberOfCategory).attr({
    'title':"[ USUŃ ]\nUwaga, jeśli usuniesz produkt, lista produktów\nmoże być posortowana. Możesz przywrócić\nwszystkie produkty przyciskiem:\n[ ODŚWIEŻ PRODUKTY ]"}).attr("chosen-prod-num",whichChosen);
	    whichChosen++;
}
//------