function Mostrar()
{
	var importe;
	var importeFinal;
	var iva;

	importe=prompt("importe Final");
	importe= parseInt(importe);

	iva=importe*0.21;
	importefinal=importe+iva;

	document.getElementById('importeFinal').value=importefinal;

}