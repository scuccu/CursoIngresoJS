//se ingresa hasta que el usuario quiera el nombre del animal, su peso, validar que sea mayor a 0, y la temperatura del habitad de este animal
//validar entre 40 y menos 40. Informar la cantidad de temperaturas pares, impares, el nombre del animal más pesado, el nombre del animal menos pesado
// la cantidad de animales que viven en habitad menores a -0 inclusive el promedio del peso de todos los animales, la temp maxima y minima

function Mostrar()
{
	var nombre;
	var nombremaximoP;
	var nombreminimoP;
	var interaciones=0;
	var contadorA=0;
	var temperaturamax=0;
	var temperaturamin=0;
	var animalesFrios=0;
	var peso;
	var contadorpeso=0;
	var acumuladorPeso=0;
	var promedioPeso;
	var maximoP=0;
	var minimoP=0;
	var maximoT=0;
	var minimoT=0;
	var temperatura;
	var temperaturaPar=0;
	var temperaturaImpar=0;
	var respuesta="si";
	
	while(respuesta=="si")
	{
		contador++;
		nombre=prompt("Ingrese un animal");

		contadorpeso++;
		peso=("ingrese el epso del animal");

		while(peso<=0)
		{
			peso=prompt("Ingrese un peso correcto");
			peso=parseInt(peso);
		}

		temperatura=("Ingrese la temperatura");

		while(!(temperatura>-40 || temperatura<40 || temperatura=0))
		{
			temperatura=prompt("Ingrese una temperatura correcta");
			temperatura=parseInt(temperatura);
		}

		

		if(temperatura%2==0 && temperatura!=0)
		{
			temperaturaPar++;
		}
		else
			{
				temperaturaImpar++;
			}

		if(interaciones==1)
		{
			maximoP=peso;
			minimoP=peso;
			nombremaximoP=nombre;
			nombreminimoP=nombre;
			temperaturamax=temperatura;
			temperaturamin=temperatura;
		}
		else if(maximoP>peso)
		   	{
		   		nombremaximoP=maximoP;
			}	

			if(minimoP<peso)
			{
				nombreminimoP=minimoP;
			}

			if(temperaturamax>temperatura)
			{
				temperaturamax=temperatura;
			}
			if(temperaturamin<temperatura)
			{
				temperaturamin=temperatura;
			}

		if(temperatura<=-0)
		{
			animalesfrios++;
		}

		
	
	

		



		respuesta=prompt("Desea seguir sumando datos? si/no");
	}
	acumuladorPeso=acumuladorPeso+peso;
	promedioPeso=acumuladorPeso/contadorpeso;

	document.write("<br> La cantidad de temperaturas pares es: "+temperaturaPar);
	document.write("<br> La cantidad de temperaturas impares es: "+temperaturaImpar);
	document.write("<br> El nombre del animal más pesado es: "+nombremaximoP);
	document.write("<br> El nombre del animal menos pesado es: "+nombreminimoP);
	document.write("<br> El promedio de pesos es: "+promedioPeso);
	document.write("<br>")
	document.write("<br>")

}//FIN DE LA FUNCIÓN