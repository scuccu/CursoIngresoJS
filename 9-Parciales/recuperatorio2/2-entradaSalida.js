//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe
	var importeFinal
	var iva

	importe=prompt("Ingrese aquí su importe");

	importe=parseInt(importe);

	importeFinal=importe+(importe*0.21)

	document.getElementById('importe').value=importeFinal;
}

