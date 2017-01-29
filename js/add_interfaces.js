$(document).ready
(
  function()
  {
      $.post('ajax/interfaces.php', 
        function(data)
        {
          var output=JSON.parse(data);
          JSONaddInterfaces(output);
        }
        );
  } 
);



