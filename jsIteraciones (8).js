
//se ingresa hasta que el usuario quiera el nombre del animal, su peso, validar que sea mayor a 0, y la temperatura del habitad de este animal
//validar entre 40 y menos 40. Informar la cantidad de temperaturas pares, impares, el nombre del animal más pesado, el nombre del animal menos pesado
// la cantidad de animales que viven en habitad menores a -0 inclusive el promedio del peso de todos los animales, la temp maxima y minima


function Mostrar()
{

	var animal;
	var peso;
	var contadorPeso=0;
	var temperatura;
	var temperaturaPar=0;
	var temperaturaImpar=0;
	var respuesta="si";
	var animalPesado;
	var animalLiviano;
	var animalFrio=0;
	var temperaturaMaxima;
	var temperaturaMinima;
	var contadorTemperatura=0;
	var contadorAnimal=0;
	var iteraciones=1;
	var acumuladorPeso;
	var promedioPeso;
	var maximo;
	var minimo;
	var pesomaximo;
	var pesominimo;


	while(respuesta=="si")
	{
		contadorAnimal++;
		animal=prompt("Ingrese el nombre del animal");

		contadorPeso++;
		peso=prompt("Ingrese un peso aquí");
		peso=parseInt(peso);

		if(peso<=0 || isNaN(peso))
		{
			peso=prompt("Ingrese un peso correcto por favor");
			peso=parseInt(peso);
		}

		contadorTemperatura++;
		temperatura=prompt("Ingrese una temperatura");
		temperatura=parseInt(temperatura);

		if(temperatura>40 || temperatura<-40 || isNaN(peso))
		{
			temperatura=prompt("Ingrese una temperatura correcta");
			temperatura=parseInt(temperatura);
		}

		if(temperatura%2==0)
		{
			temperaturaPar++;
		}
		else
		{
			if(!(temperatura%2==0))
			{
				temperaturaImpar++;
			}
		}
		
		//animal mas pesado y mas liviano

		//temperatura maxima y minimo
		if(contadorAnimal==1)
		{
			pesominimo=peso;
			pesomaximo=peso;
			animalPesado=animal;
			animalLiviano=animal;
		}
		if(peso<pesominimo)
		{
			pesominimo=peso;
			animalLiviano=animal;
		}
		else
		{
			if(peso>pesomaximo)
			{
				pesomaximo=peso;
				animalPesado=animal;
			}
		}

		if(temperatura<0)
		{
			animalFrio++;
		}

		if(contadorTemperatura==1)
		{
			temperaturaMinima=temperatura;
			temperaturaMaxima=temperatura;
		}

			if(temperatura<temperaturaMinima)
			{
				temperaturaMinima=temperatura;
			}
		else{
			if(temperatura>temperaturaMaxima)
			{
				temperaturaMaxima=temperatura
			}
		}














		acumuladorPeso=acumuladorPeso+peso;
		respuesta=prompt("Desea agregar otro animal");
	}

	
	promedioPeso=acumuladorPeso/contadorPeso;



	document.write("<br> La cantidad de temperaturas pares es: "+temperaturaPar);
	document.write("<br> La cantidad de temperaturas impares es: "+temperaturaImpar);
	document.write("<br> La cantidad de animales que viven en temperaturas bajo cero: "+animalFrio);
	document.write("<br> El promedio de los pesos ingresados: "+promedioPeso);
	document.write("<br> animal más pesado: "+animalPesado);
	document.write("<br> animal más liviano: "+animalLiviano);
	document.write("<br> temperatura minima: "+temperaturaMinima);
	document.write("<br> temperatura maxima: "+temperaturaMaxima);

}//FIN DE LA FUNCIÓN