//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var base;
	var perimetro;
	
	base=document.getElementById('lado').value;
	
	base=parseInt(base);

	perimetro=base*3

	alert("El perímetro de su triangulo es de "+perimetro);
}

