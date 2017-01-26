var filterOn = false;



function listFilter(productID,categoryID)
    {
      filterOn = true;
      var cmpID=categoryID-1;

      console.log("START------------------------");
      addToConfig(productID,cmpID);
      $.post('ajax/product_filter.php', {prID: productID , catID: categoryID}, 
        function (data)
        {
          var output=JSON.parse(data);
          JSONreading(output);
        });
        
    }


