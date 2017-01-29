$(document).ready
(
  function()
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

