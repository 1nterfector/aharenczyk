var filterOn = false;



function listFilter(productID,categoryID)
    {
      filterOn = true;
      var cmpID=categoryID-1;
      switch(categoryID)
      {

      case 2:  
      //  Dodawanie produktu na lewo i zamykanie przycisku
      
      $( "button[product-id="+productID+"]" ).appendTo('#config').removeClass('prod').addClass('chosen-cfg').removeAttr('data-toggle');
      $('#component-list-'+cmpID).removeClass("in");
      $( "button[component-id="+cmpID+"]" ).removeClass('cat').addClass('cat-off').click(function(){ return false});
      // -------------------------------------------------------------------

      console.log(productID,categoryID);
      $.post('ajax/product_filter.php', {prID: productID , catID: categoryID}, 
        function (data)
        {
          //Wyłącza dodawanie się produktów po kliknięciu przycisku z kategorią
          
          //--------------
          //Bierze tekst i dzieli go na część od komentarza kategorii obecnej do nasępnej 
          // data.substring(findWhereToStart, findWhereToEnd);
          //--------------
          // Znajduje mi wystąpienie tekstu w wyniku zwracanym od posta
          var categoryCount = (data.match(/<!--kategoria-2-->/g) || []).length;
          //--------------
          data += "<!--KONIEC-->";

          for(i=2;i<=9;i++)
          {
            var j = i+1;
            var findWhereToStart = data.indexOf("<!--kategoria-"+i+"-->");
            if (j===10) findWhereToEnd =  data.indexOf("<!--KONIEC-->");
            else var findWhereToEnd = data.indexOf("<!--kategoria-"+(j)+"-->");
            console.log ("SEKCJA "+i+"\n"+data.substring(findWhereToStart, findWhereToEnd));
            $("div[component-id="+i+"]" ).html(data.substring(findWhereToStart, findWhereToEnd));
          
          } 
        });
        break;
        case 3:
        //  Dodawanie produktu na lewo i zamykanie przycisku
        
        $( "button[product-id="+productID+"]" ).appendTo('#config').removeClass('prod').addClass('chosen-cfg').removeAttr('data-toggle');
        $('#component-list-'+cmpID).removeClass("in");
        $( "button[component-id="+cmpID+"]" ).removeClass('cat').addClass('cat-off').click(function(){ return false});
        // -------------------------------------------------------------------

        console.log(productID,categoryID);
        $.post('ajax/product_filter.php', {prID: productID , catID: categoryID}, 
          function (data)
          {
           console.log(data);
            // Znajduje mi wystąpienie tekstu w wyniku zwracanym od posta
            var categoryCount = (data.match(/<!--kategoria-2-->/g) || []).length;
            //--------------
            data += "<!--KONIEC-->";
            var iterator = 1;
            if(iterator===1)
            {
              var findWhereToStart = data.indexOf("<!--kategoria-1-->");
              var findWhereToEnd = data.indexOf("<!--kategoria-3-->");
              console.log ("SEKCJA 1\n"+data.substring(findWhereToStart, findWhereToEnd));
              $("div[component-id=\"1\"]" ).html(data.substring(findWhereToStart, findWhereToEnd));
              iterator = 3;
              if (iterator===3)
              {
              var findWhereToStart = data.indexOf("<!--kategoria-3-->");
              var findWhereToEnd = data.indexOf("<!--kategoria-4-->");
              console.log ("SEKCJA 2\n"+data.substring(findWhereToStart, findWhereToEnd));
              $("div[component-id=\"3\"]" ).html(data.substring(findWhereToStart, findWhereToEnd));
              iterator = 4;
                if(iterator === 4)
                {
                  var findWhereToStart = data.indexOf("<!--kategoria-4-->");
                  var findWhereToEnd = data.indexOf("<!--KONIEC-->");
                  console.log ("SEKCJA 3\n"+data.substring(findWhereToStart, findWhereToEnd));
                  $("div[component-id=\"4\"]" ).html(data.substring(findWhereToStart, findWhereToEnd));
                } 
              }
            } 
            
            

            
          });
        break;
        case 4:
        case 5:
        var cmpID=categoryID-1;
        $( "button[product-id="+productID+"]" ).appendTo('#config').removeClass('prod').addClass('chosen-cfg').removeAttr('data-toggle');
        $('#component-list-'+cmpID).removeClass("in");
        $( "button[component-id="+cmpID+"]" ).removeClass('cat').addClass('cat-off').click(function(){ return false});
        break;
        

        }
        
    }
