var logClicks = [];
var logConfiguration;

function listFilter(productID,categoryID,productAdded=true)
    {
      var cmpID=categoryID-1;
      var newobject={productID:productID,categoryID:categoryID};
      
      logClicks.push(newobject);
      logConfiguration=JSON.stringify(logClicks);
      
      console.log(logClicks);
      console.log(logConfiguration);
      
      $.post('ajax/product_filter.php', {prID: productID , catID: categoryID}, 
        function (data)
        {
          var output=JSON.parse(data);
          JSONreading(output);
        });
      if (productAdded)
        {
         console.log("Pętla dodania produktu do Config");
         addToConfig(productID,cmpID); 
        }
      
    }


$(document).ready
(
  function()
  {
    $('#save').click(
      function()
      {
        localStorage.setItem("Configuration", logConfiguration);
        console.log("ZAPISAŁEM!! :D ");
      }
      );
    $('#load').click(
      function()
      {
        text = localStorage.getItem("Configuration");
        obj = JSON.parse(text);
        
        var storageLength=obj.length

        for (var i = 0; i < storageLength; i++) 
        {
          console.log(obj[i].categoryID);
          listFilter(obj[i].productID,obj[i].categoryID);
        }
      }
      );
  }
);