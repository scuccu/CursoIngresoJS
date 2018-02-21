function Mostrar()
{
	//var contador=0
	var iteraciones=10;
	var contadorDePar=0
	var contadorDeImpar=0
	var contadordeceros=0
	var contadorDePositivos=0
	var contadorDeNegativos=0
	


	for(contador=-10;contador<iteraciones;contador++)
	{
		//document.write("<br>"+contador);
		if(contador==0)
		{
			contadordeceros++;
		}
		else
		{
			if(contador%2==0)
			{
				contadorDePar++;
			}
		}
		if(!(contador%2==0))
		{
			contadorDeImpar++;
		}
		
		//Positivos y negativos

		if(contador>=1)
		{
			contadorDePositivos++
		}
		else
		{
			if(contador<=-1)
			{
				contadorDeNegativos++
			}
		}
	}
		//document.write("<br>"+contador);
		document.write("<br> par: "+contadorDePar);
		document.write("<br> impar: "+contadorDeImpar);
		document.write("<br> ceros: "+contadordeceros);
		document.write("<br> positivos: "+contadorDePositivos);
		document.write("<br> negativos: "+contadorDeNegativos);

}