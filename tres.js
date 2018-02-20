function Mostrar()
{
	var precioUno
	var precioDos
	var precioTres
	var resultado
	var promedio
	var resultadoFinal

	precioUno=document.getElementById('precioUno').value;
	precioDos=document.getElementById('precioDos').value;
	precioTres=document.getElementById('precioTres').value;

	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);
	
	resultado=precioUno+precioDos+precioTres;
	resultadoFinal=resultado/3;

	alert("El resultado es "+resultado+" y con su promedio es de "+resultadoFinal);
}
