//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()


{
	
	var lado;
	var superficie;

	lado=document.getElementById('lado').value;

	lado=parseInt(lado);

	superficie=lado*4;

	alert("La superficie es de "+superficie+" mts");
}

