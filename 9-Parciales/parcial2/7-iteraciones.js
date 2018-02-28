//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var notas;
	var iteracionesN=10;
	var iteracionesS=6;
	var acumulador=0;
	var contadorN=0;
	var contadorS=0;
	var cantV=0;
	var minimo=100;
	var sexo;

	while(contadorN<iteracionesN)
	{
		contadorN++;
		notas=prompt("Ingrese una nota");
		notas=parseInt(notas);

		if(notas<0 || notas>10 || isNaN(notas))
		{
			notas=prompt("Ingrese una nota real");
			notas=parseInt(notas);
		}
		
		while(contadorS<iteracionesS)
		{
			contadorS++;
			sexo=prompt("Ingrese un sexo f/m");
		}
		
		if(!(sexo=="f" || sexo=="m"))
		{
			sexo=prompt("Ingrese un sexo correcto");
		}
		if(notas<minimo)
		{
			minimo=notas;
		}
		if(sexo=="m" && notas<=6)
		{
			cantV++;
		}


		acumulador=acumulador+notas;
		promedio=acumulador/contadorN;
	}

	document.write("<br> El promedio de notas totales es: "+promedio);
	document.write("<br> El minimo de notas es: "+minimo);
	document.write("<br> Varones cuyas notas son iguales o mayores a 6: "+cantV);

}

