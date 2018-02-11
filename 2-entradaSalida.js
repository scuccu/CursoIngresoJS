//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 2-EntradaSalida");
	
}

{
	var importe;
	var importefinal;
	var descuento;

	importe=document.getElementById('importe').value;
	importe=parseInt(importe);
	

	decuento=importe*0.25;

	importefinal=importe-descuento;


	document.getElementById('importe').value=importefinal;
}

