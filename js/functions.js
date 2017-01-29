function clearConfig()
  {
     $('#config').html("<div style=\"font-size: 27px;width: 350px;text-align: center;margin-bottom: 0px; font-family: 'Anonymous Pro', monospace;font-weight: bold;\">Wybrany zestaw</div>");
     $( "button[component-id]" ).addClass('cat').removeClass('cat-off').attr("data-toggle","collapse");
     prodView();
     $('.cat').removeClass("turned");
  } 

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

function addToConfig(numberOfProduct,numberOfCategory)
{
	var categoryPlus1=parseInt(numberOfCategory)+1
	categoryPlus1String=toString(categoryPlus1);
	if (numberOfCategory===4)
	{
	    $( "button[product-id="+numberOfProduct+"]" ).clone().appendTo('#config').removeAttr('product-id').removeClass('prod').addClass('chosen-cfg').removeAttr('data-toggle').removeAttr('onclick').attr("prod-chosed",numberOfProduct).attr("config-id",numberOfCategory).attr({
    'title':"[ USUŃ ]\nUwaga, jeśli usuniesz produkt, lista produktów\nmoże być posortowana. Możesz przywrócić\nwszystkie produkty przyciskiem:\n[ ODŚWIEŻ PRODUKTY ]"});
	    $( "button[component-id="+numberOfCategory+"]" ).removeClass('cat').addClass('turned')

	}
	else if(numberOfCategory===5)
	{
		var categoryPlus1=parseInt(numberOfCategory)+1
	    $( "button[product-id="+numberOfProduct+"]" ).clone().appendTo('#config').removeAttr('product-id').removeClass('prod').addClass('chosen-cfg').removeAttr('data-toggle').removeAttr('onclick').attr("prod-chosed",numberOfProduct).attr("config-id",numberOfCategory).attr({
    'title':"[ USUŃ ]\nUwaga, jeśli usuniesz produkt, lista produktów\nmoże być posortowana. Możesz przywrócić\nwszystkie produkty przyciskiem:\n[ ODŚWIEŻ PRODUKTY ]"});
	    $( "button[component-id="+numberOfCategory+"]" ).removeClass('cat').addClass('turned')
	}
	else if(numberOfCategory===6)
	{
		var categoryPlus1=parseInt(numberOfCategory)+1
	    $( "button[product-id="+numberOfProduct+"]" ).clone().appendTo('#config').removeAttr('product-id').removeClass('prod').addClass('chosen-cfg').removeAttr('data-toggle').removeAttr('onclick').attr("prod-chosed",numberOfProduct).attr("config-id",numberOfCategory).attr({
    'title':"[ USUŃ ]\nUwaga, jeśli usuniesz produkt, lista produktów\nmoże być posortowana. Możesz przywrócić\nwszystkie produkty przyciskiem:\n[ ODŚWIEŻ PRODUKTY ]"});
	    $( "button[component-id="+numberOfCategory+"]" ).removeClass('cat').addClass('turned')
	}
	else
	{
		var categoryPlus1=parseInt(numberOfCategory)+1

		$( "button[product-id="+numberOfProduct+"]" ).clone().appendTo('#config').removeAttr('product-id').removeClass('prod').addClass('chosen-cfg').removeAttr('data-toggle').removeAttr('onclick').attr("prod-chosed",numberOfProduct).attr("config-id",numberOfCategory).attr({
    'title':"[ USUŃ ]\nUwaga, jeśli usuniesz produkt, lista produktów\nmoże być posortowana. Możesz przywrócić\nwszystkie produkty przyciskiem:\n[ ODŚWIEŻ PRODUKTY ]"});

	    
	    $( "button[product-id="+numberOfProduct+"]" ).removeAttr('data-toggle');
	    console.log(numberOfCategory);
	    
	    //Zamknięcie przycisku
	    $('#component-list-'+numberOfCategory).removeClass("in");
	    //-------
	    $( "button[component-id="+numberOfCategory+"]" ).removeClass('cat').addClass('cat-off').removeAttr("data-toggle");
	} 
		    $("button[prod-chosed="+numberOfProduct+"]").on('click',
		    	function chosenProductRemove()
		    	{
			    	$( "button[component-id="+numberOfCategory+"]" ).addClass('cat').removeClass('cat-off').removeClass('turned').attr("data-toggle","collapse");
			    	listFilter(numberOfProduct,categoryPlus1,false);
			    	$(this).remove();
		    	}
		    );
}

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

function saveToText()
{
	var contentOfConfig = "";	
	for (var i = 1; i <= 9; i++) 
	{
		contentOfConfig+="-----"+$("button[config-id='"+i+"'").html()+"\n" ;
	}
	var hiddenElement = document.createElement('a');
	hiddenElement.href = 'data:attachment/text,' + encodeURI(contentOfConfig);
	hiddenElement.target = '_blank';
	hiddenElement.download = 'konfiguracja.txt';
	hiddenElement.click();
}










function JSONaddInterfaces(returnedTable)
{
  var howManyInterfaces=returnedTable.length-1;
  for(i=0;i<=howManyInterfaces;i++)
  {
     var nextCategory = parseInt(returnedTable[i].ComponentID)+1;
     $("div[component-interface-id="+returnedTable[i].ComponentID+"]" ).append('<button type="button" class="inter" onclick="filterInterfaceBased('+returnedTable[i].ComponentID+','+returnedTable[i].InterfaceID+')" interface-id="'+returnedTable[i].InterfaceID+'">'+returnedTable[i].Name+'</button>');
  }
}







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

function addMultiple(numberOfCategory,numberOfProduct)
{
	var categoryPlus1=parseInt(numberOfCategory)+1
	    $( "button[product-id="+numberOfProduct+"]" ).clone().appendTo('#config').removeAttr('product-id').removeClass('prod').addClass('chosen-cfg').removeAttr('data-toggle').removeAttr('onclick').attr("prod-chosed",numberOfProduct).attr("config-id",numberOfCategory).attr({
    'title':"[ USUŃ ]\nUwaga, jeśli usuniesz produkt, lista produktów\nmoże być posortowana. Możesz przywrócić\nwszystkie produkty przyciskiem:\n[ ODŚWIEŻ PRODUKTY ]"});
	    $( "button[component-id="+numberOfCategory+"]" ).removeClass('cat').addClass('turned')
}