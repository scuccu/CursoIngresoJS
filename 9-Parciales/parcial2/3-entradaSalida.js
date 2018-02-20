//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()

{
	
	var largo;
	var ancho;
	var perimetro;
	var alambrado;

	largo=document.getElementById('largo').value;
	ancho=document.getElementById('ancho').value;

	largo=parseInt(largo);
	ancho=parseInt(ancho);

	perimetro=ancho*largo;
	alambrado=perimetro*6;

	alert("Usted necesite "+alambrado+" mts de alambre");

}
