//------Wyświetlanie produktów------
$(document).ready
(
  function prodView()
  {
     	$.post('ajax/products.php', 
        function(data)
        {
          data+= "<!--KONIEC-->";
          for(i=1;i<=9;i++)
          {
            $("div[component-id="+i+"]" ).html(addingFilteredProducts(i,data,10,1));
          } 
        }
        );
  } 
);
//--------------------------
