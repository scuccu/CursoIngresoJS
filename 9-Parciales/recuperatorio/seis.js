function Mostrar()
{
	var peso;
	var iteraciones=50;
	var contador=0;
	var maximo=0;
	var minimo=100;

	while(contador<iteraciones)
	{
		contador++;
		peso=prompt("Ingrese su carga aquí");
		peso=parseInt(peso);

		if(peso==0 || peso<0)
		{
			peso=prompt("Ingrese una carga correcta");
			peso=parseInt(peso);
		}
		if(peso>maximo)
		{
			maximo=peso;
		}
		if(peso<minimo)
		{
			minimo=peso;
		}
	}

	document.write("<br> La carga más pesada es: "+maximo);
	document.write("<br> La carga menos pesada es: "+minimo);

}
