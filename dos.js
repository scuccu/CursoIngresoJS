function Mostrar()
{
  	var importe;
	var importefinal;
	var descuento;

	importe=document.getElementById('importeFinal').value;
	importe=parseInt(importe);

	descuento=importe*0.25;

	importefinal=importe-descuento;


	document.getElementById('importeFinal').value=importefinal;
}


