$(document).ready
(
	function createCategory()
	{
		var categoryNames = ["Płyta główna","Procesor","Chłodzenie procesora","Pamięć RAM","Karta graficzna","Dysk","Napęd optyczny","Zasilacz","Obudowa"];
		for(i=0;i<=8;i++)
		{
		$('#products').append("<!--"+categoryNames[i]+"--><button style:\"position:relative;\" class=\"cat\" id=\"component-"+(i+1)+"\" component-id=\""+(i+1)+"\" data-toggle=\"collapse\"  aria-expanded=\"false\" aria-controls=\"true\" data-target=\"#component-list-"+(i+1)+"\">"+categoryNames[i]+"</button><div style=\"position:absolute\" class=\"collapse well\" id=\"component-list-"+(i+1)+"\"><div class=\"scroll2\"><div style=\"width: 2000px;\" component-interface-id=\""+(i+1)+"\"> </div></div><div class=\"scroll\" category-id=\""+(i+1)+"\" component-id=\""+(i+1)+"\"> </div></div><!------------------------->");
		}
	}
);