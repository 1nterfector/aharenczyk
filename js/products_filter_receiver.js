var filterOn = false;



function listFilter(productID,categoryID)
    {
      filterOn = true;
      var cmpID=categoryID-1;

      


      switch(categoryID)
      {
        case 2: 
          console.log("START------------------------"); 
          addToConfig(productID,cmpID);
          $.post('ajax/product_filter.php', {prID: productID , catID: categoryID}, 
          function (data)
          {
            data += "<!--KONIEC-->";
            console.log(data);
            for(i=2;i<=9;i++)
            {
              addingFilteredProducts(i,data,10,1);
            } 
          });
        break;
        
        case 3:
          console.log("START------------------------");
          addToConfig(productID,cmpID);
          $.post('ajax/product_filter.php', {prID: productID , catID: categoryID}, 
            function (data)
            {
              // data += "<!--KONIEC-->";
              console.log("SEPARATOR----------------");
              console.log(data);
              console.log("SEPARATOR----------------");
              var output=JSON.parse(data);

              console.log(output[1].ProductID);
              addingFilteredProducts(1,data,5,2);

              
              /*addingFilteredProducts(3,data,5,1);
              addingFilteredProducts(4,data,5,1);*/
            });
        break;
        
        case 4:
        case 5:
        var cmpID=categoryID-1;
        $( "button[product-id="+productID+"]" ).appendTo('#config').removeClass('prod').addClass('chosen-cfg').removeAttr('data-toggle');
        $('#component-list-'+cmpID).removeClass("in");
        $( "button[component-id="+cmpID+"]" ).removeClass('cat').addClass('cat-off')/*.click(function(){ return false})*/;
        break;
        

        }
        
    }

// var j = i+1;






 /*for(i=2;i<=9;i++)
          {
            addingFilteredProducts(i,data,10,1);
          } */

/*var findWhereToStart = data.indexOf("<!--kategoria-1-->");
var findWhereToEnd = data.indexOf("<!--kategoria-3-->");
console.log ("SEKCJA 1\n"+data.substring(findWhereToStart, findWhereToEnd));
$("div[category-id=\"1\"]" ).html(data.substring(findWhereToStart, findWhereToEnd));
addToConfig(productID,cmpID);*/

/*
   var iterator = 1;
            if(iterator===1)
            {
              
              iterator = 3;
              if (iterator===3)
              {
              var findWhereToStart = data.indexOf("<!--kategoria-3-->");
              var findWhereToEnd = data.indexOf("<!--kategoria-4-->");
              console.log ("SEKCJA 2\n"+data.substring(findWhereToStart, findWhereToEnd));
              $("div[category-id=\"3\"]" ).html(data.substring(findWhereToStart, findWhereToEnd));
              addToConfig(productID,cmpID);
              iterator = 4;
                if(iterator === 4)
                {
                  var findWhereToStart = data.indexOf("<!--kategoria-4-->");
                  var findWhereToEnd = data.indexOf("<!--KONIEC-->");
                  console.log ("SEKCJA 3\n"+data.substring(findWhereToStart, findWhereToEnd));
                  $("div[category-id=\"4\"]" ).html(data.substring(findWhereToStart, findWhereToEnd));
                  addToConfig(productID,cmpID);
                } 
              }
            } */


