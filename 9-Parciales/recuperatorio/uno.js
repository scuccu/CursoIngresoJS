
function Mostrar()
{
	var lado;
	var base;

	base=document.getElementById('laBase').value;

	base=parseInt(base);
	lado=parseInt(lado);

	base=lado*3;
	alert("El perimetro del triángulo es de "+base);
}
