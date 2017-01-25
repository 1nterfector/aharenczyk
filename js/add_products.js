//------Wyświetlanie produktów------
$(document).ready
(
  function prodView()
  {
    $('.cat').on("click",sendPost);
  
    function sendPost()
    {
      if(filterOn===false)
      {
   		var id = $(this).attr('component-id');
     	$.post('ajax/products.php', {id:id}, resultHandler(id));
      }
   	}
  
   	function resultHandler(output)
   	{
   		function showResult(data)
   		{

   		$("div[component-id="+output+"]" ).html(data);
   		}

    return showResult;
   	}

   
  } 
);
//--------------------------

