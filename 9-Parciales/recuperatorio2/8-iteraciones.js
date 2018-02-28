//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero;
	var numPar=0;
	var promedio;
	var acumulador=0;
	var contador=0;
	var maximo=0;
	var minimo=100;
	var respuesta="si";

	while(respuesta!="no")
	{
		contador++;
		numero=prompt("Ingrese su numero aquí");
		numero=parseInt(numero);

		if(numero%2==0)
		{
			numPar++;
		}
		if(numero>maximo)
		{
			maximo=numero;
		}
		if(numero<minimo)
		{
			minimo=numero;
		}


		acumulador=acumulador+numero;
		promedio=acumulador/contador;
		respuesta=prompt("Desea ingresar otro numero? si/no");
	}

	document.write("<br> El promedio de todos los numeros ingresados: "+promedio);
	document.write("<br> La suma de todos los numeros: "+acumulador);
	document.write("<br> La cantidad de numeros pares es: "+numPar);
	document.write("<br> El número máximo es: "+maximo);
	document.write("<br> El número mínimo es: "+minimo);
	
}

