$(document).ready
(
  function interView()
  {
    $('.cat').on("click",sendPost);
  
    function sendPost()
    {
 		var id = $(this).attr('component-id');
   		$.post('ajax/interfaces.php', {id:id}, resultHandler(id));
   	}
  
   	function resultHandler(output)
   	{
   		function showResult(data)
   		{
   		$("div[component-interface-id="+output+"]").html(data);
   		}

    return showResult;
   	}

   
  } 
);
