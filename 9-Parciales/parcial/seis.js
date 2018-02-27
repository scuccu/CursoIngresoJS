function Mostrar()
{
	var importe;
	var contador=0;
	var iteraciones=24;
	var maximo=0;
	var minimo=100;

	while(contador<iteraciones)
	{
		contador++;
		importe=prompt("Ingrese su importe aquí");
		importe=parseInt(importe);

		if(importe<0)
		{
			importe=prompt("Indique un importe correcto");
			importe=prompt(importe);
		}
		if(importe>maximo)
		{
			maximo=importe;

		}
		if(importe<minimo)
		{
			minimo=importe;
		}
	}
	alert("El mayor importe fue: "+maximo+". Y el menor importe fue "+minimo);


}
