//  Dodawanie produktu na lewo i zamykanie przycisku
function addToConfig(numberOfProduct,numberOfCategory)
{
    $( "button[product-id="+numberOfProduct+"]" ).appendTo('#config').removeClass('prod').addClass('chosen-cfg').removeAttr('data-toggle');
    $('#component-list-'+numberOfCategory).removeClass("in");
    $( "button[component-id="+numberOfCategory+"]" ).removeClass('cat').addClass('cat-off').click(function(){ return false});
}
// -----------------------------------------------------


// Znajduje mi wystąpienie tekstu w wyniku zwracanym od posta
var something ='';
var categoryCount = (something.match(/<!--kategoria-2-->/g) || []).length;
//--------------

// Funkcja jest w stanie otrzymany specjalnie sformatowany tekst podzielić na kawałki i wrzucić tam gdzie chcę
function addingFilteredProducts(categoryNumer,sendedInfo,oneMoreThanMaxCat,step)
{
    var endingSignal = categoryNumer+step;
    var findWhereToStart = sendedInfo.indexOf("<!--kategoria-"+categoryNumer+"-->");
    if (endingSignal===oneMoreThanMaxCat) findWhereToEnd =  sendedInfo.indexOf("<!--KONIEC-->");
    else var findWhereToEnd = sendedInfo.indexOf("<!--kategoria-"+endingSignal+"-->");
    $("div[category-id="+categoryNumer+"]" ).html(sendedInfo.substring(findWhereToStart, findWhereToEnd));
    console.log("--------SEPARATOR--------\n"+sendedInfo.substring(findWhereToStart, findWhereToEnd)+"--------SEPARATOR--------\n");
}
//--------------


function JSONreading()
{

}

