
var message="All Rights Reserved\nCharles Fox (2005)";

function click(e) 
	{
	if (document.all) 
		{
		if (event.button == 2) 
			{
			alert(message);
			return false;
			}
		}
	if (document.layers) 
		{
		if (e.which == 3) 
			{
			alert(message);
			return false;
			}
		}
	}
if (document.layers) 
	{
	document.captureEvents(Event.MOUSEDOWN);
	}
document.onmousedown=click;
