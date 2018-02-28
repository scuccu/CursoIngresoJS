function Mostrar()
{
	var kilo;
	var iteraciones=50;
	var contador=0;
	var maximo=0;
	var minimo=100;

	while(contador<iteraciones)
	{
		contador++;
		kilo=prompt("Ingrese su carga aquí");
		kilo=parseInt(kilo);

		if(kilo==0 || kilo<0)
		{
			kilo=prompt("Ingrese una carga correcta");
			kilo=parseInt(kilo);
		}
		if(kilo>maximo)
		{
			maximo=kilo;
		}
		if(kilo<minimo)
		{
			minimo=kilo;
		}
	}

	document.write("<br> La carga más pesada es: "+maximo);
	document.write("<br> La carga menos pesada es: "+minimo);

}
