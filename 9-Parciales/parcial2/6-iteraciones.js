//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var iteraciones=7;
	var contador=0;
	var maximo=0;
	var minimo=100;

	while(contador<iteraciones)
	{
		contador++;
		importe=prompt("Ingrese un importe");
		importe=parseInt(importe);

		while(importe<=0)
		{
			importe=prompt("Ingrese un importe correcto");
			importe=parseInt(importe);
		}
		if(importe>maximo)
		{
			maximo=importe;
		}
		if(importe<minimo)
		{
			minimo=importe
		}
	}
	document.write("<br> El importe más alto fue: "+maximo);
	document.write("<br> El importe más bajo fue: "+minimo);

}

