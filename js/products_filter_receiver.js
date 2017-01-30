var logClicks = [];
var logConfiguration;
function listFilter(productID,categoryID,productAdded=true)
    {
      var cmpID=categoryID-1;
      var newobject={productID:productID,categoryID:categoryID};
      if (productAdded===false){}else logClicks.push(newobject);

      logConfiguration=JSON.stringify(logClicks);
      
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
        alert("Udało się zapisać Twoją konfigurację.");
      }
      );
    $('#load').click(
      function()
      {
        text = localStorage.getItem("Configuration");
        obj = JSON.parse(text);
        
        var storageLength=obj.length
        alert("Konfiguracja poprawnie wczytana.");
        for (var i = 0; i < storageLength; i++) 
        {
          
          listFilter(obj[i].productID,obj[i].categoryID);
        }
      }
      );
  }
);