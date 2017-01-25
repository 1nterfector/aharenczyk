function insertProc(clicked_id)
{

	var proc="";
	var ilo="1";
	if (document.getElementById(clicked_id) )
	{
		document.getElementById("clicked_id").innerHTML="Lubię placki";
	}
	else
	{
	proc=document.getElementById(clicked_id).innerHTML+proc;

	document.getElementById("config").innerHTML = document.getElementById("config").innerHTML +
	"<div class='btn-group'>" 
	"<button class=\"cat note\" type='button' onclick='deleteProc(this.id)' data-toggle='tooltip' data-placement='bottom' title="+proc+" id="+clicked_id+" >"
	 + proc + "</button>"+
	 
	 "<button class=\"num\" type='button' onclick='deleteProc(this.id)' id="+clicked_id+" >"
	 + proc + "</button>"+

	 "</div>";
	document.getElementById(clicked_id).title = proc;
	}
}