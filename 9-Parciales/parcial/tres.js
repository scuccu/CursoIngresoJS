function Mostrar()
{
	var largo;
	var ancho;
	var alambre;
	var perimetro;

	largo=document.getElementById('alrgo').value;
	ancho=document.getElementById('ancho').value;

	largo=parseInt(largo);
	ancho=parseInt(ancho);

	perimetro=largo*ancho;
	alambre=perimetro*3;

	alert("Usted necesita "+alambre+" mts");
}
