//------Wyświetlanie produktów------
$(document).ready
(
  function prodView()
  {
     	$.post('ajax/products.php', 
        function(data)
        {
          var output=JSON.parse(data);
          JSONreading(output);
        }
        );
  } 
);
//--------------------------
