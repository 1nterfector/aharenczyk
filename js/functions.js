//  Dodawanie produktu na lewo i zamykanie przycisku
function addToConfig(numberOfProduct,numberOfCategory)
{
    $( "button[product-id="+numberOfProduct+"]" ).appendTo('#config').removeClass('prod').addClass('chosen-cfg').removeAttr('data-toggle');
    $('#component-list-'+numberOfCategory).removeClass("in");
    $( "button[component-id="+numberOfCategory+"]" ).removeClass('cat').addClass('cat-off').click(function(){ return false});
}
// -----------------------------------------------------

// Funkcja jest w stanie otrzymany specjalnie sformatowany tekst podzielić na kawałki i wrzucić tam gdzie chcę
function addingFilteredProducts(categoryNumer,sendedInfo,oneMoreThanMaxCat,step)
{
    var endingSignal = categoryNumer+step;
    var findWhereToStart = sendedInfo.indexOf("<!--kategoria-"+categoryNumer+"-->");
    if (endingSignal===oneMoreThanMaxCat) findWhereToEnd =  sendedInfo.indexOf("<!--KONIEC-->");
    else var findWhereToEnd = sendedInfo.indexOf("<!--kategoria-"+endingSignal+"-->");
    $("div[category-id="+categoryNumer+"]" ).html(sendedInfo.substring(findWhereToStart, findWhereToEnd));
}
//--------------


function JSONreading(returnedTable)
{
	var howManyProds=returnedTable.length-1;

	for(i=0;i<=howManyProds;i++)
	{
	   
	    $("div[category-id="+returnedTable[i].ComponentID+"]" ).html('');
	}
	for(i=0;i<=howManyProds;i++)
	{
	   var nextCategory = parseInt(returnedTable[i].ComponentID)+1;
	   $("div[category-id="+returnedTable[i].ComponentID+"]" ).append('<button class=\"btn prod\" data-toggle=\"collapse\" data-target=\"#component-list-'+returnedTable[i].ComponentID+'\" type=\"button\" onclick=\"listFilter('+returnedTable[i].ProductID+','+nextCategory+')\" product-id=\"'+returnedTable[i].ProductID+'\">'+returnedTable[i].Name+'</button>');
	   console.log(returnedTable[i].Name+"Pętla biegnie po raz "+i);
	}
}

