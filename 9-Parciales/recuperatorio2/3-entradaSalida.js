//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ancho
	var largo
	var alambre
	var perimetro

	ancho=document.getElementById('ancho').value;
	largo=document.getElementById('largo').value;

	ancho=parseInt(ancho);
	largo=parseInt(largo);

	perimetro=ancho*largo;
	alambre=perimetro*6

	alert("Para un perímetro de "+perimetro+" mts, usted necesita "+alambre+" mts de alambre");


}

