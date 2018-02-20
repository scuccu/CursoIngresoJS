//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()


{

	var importe;
	var iva;
	var importefinal

	
	importe=prompt("Su importe es de ");

	importe=parseInt(importe);

	iva=importe*0.21;
	importefinal=importe+iva

	document.getElementById('importe').value=importefinal;


}

