$(document).ready
(
	function createCategory()
	{
		var categoryNames = ["Płyta główna","Procesor","Chłodzenie procesora","Pamięć RAM","Karta graficzna","Dysk","Napęd optyczny","Zasilacz","Obudowa"];
		for(i=0;i<=8;i++)
		{
			$('#products').append("<!--"+categoryNames[i]+"--><button style:\"position:relative;\" class=\"cat\" id=\"component-"+(i+1)+"\" component-id=\""+(i+1)+"\" data-toggle=\"collapse\"  aria-expanded=\"false\" aria-controls=\"true\" data-target=\"#component-list-"+(i+1)+"\">"+categoryNames[i]+"</button><div style=\"position:absolute\" class=\"collapse well\" id=\"component-list-"+(i+1)+"\"><div class=\"scroll2\"><div class=\"interface_holder\" style=\"width: 2000px;\" component-interface-id=\""+(i+1)+"\"> </div></div><div class=\"scroll\" category-id=\""+(i+1)+"\" component-id=\""+(i+1)+"\"> </div></div><!------------------------->");
		}
	}
);
$(document).ready
(
	function()
	{
		$('#component-4').attr('title','UWAGA\nPrzy dodawaniu pamięci, zwróć uwagę,\nna ilość maksymalnej pamięci\n dla danej płyty głównej');
		$('.interface_holder').prepend('<button type="button" class="inter" onclick="prodView()">WYCZYŚĆ</button>');
	}
);

