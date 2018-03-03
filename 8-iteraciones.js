//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var alumnos;
	var alumnoMin;
	var alumnoMax;
	var notas;
	var acumuladorNotas=0;
	var promedioNotas;
	var notasPar=0;
	var notasImpar=0;
	var contadorAlumnos=0;
	var acumuladorAlumnos=0;
	var promedioAlumnos;
	var promedioMujeres;
	var promedioDesaprobados=0;
	var sexo;
	var contadorMujeres=0;
	var contadorHombres=0;
	var contadorDesaprobados=0;
	var varonesDesaprobados=0;
	var acumuladorNotasMujeres=0;
	var maximo=0;
	var minimo=0;
	var edad=0;
	var edadMin;
	var edadDesaprobados=0;
	var sexoEdadMin;

	var respuesta="si";

	while(respuesta=="si")
	{
		contadorAlumnos++;
		alumnos=prompt("Ingrese un nombre");
		edad=prompt("Ingrese edad");
		edad=parseInt(edad);
		notas=prompt("Ingrese una nota");
		notas=parseInt(notas);

		if(notas<=0 || notas>10 || isNaN(notas))
		{
			notas=prompt("Ingrese una nota correcta")
			notas=parseInt(notas);
		}

		sexo=prompt("Ingrese un sexo. f/m")

		if(!(sexo=="m" || sexo=="f"))
		{
			sexo=prompt("Ingrese un sexo correcto");
		}

		if(sexo=="f")
		{
			contadorMujeres++;
			acumuladorNotasMujeres=acumuladorNotasMujeres+notas;

		}

		if(sexo=="m")
		{
			contadorHombres++;
		}
		

		if(notas<=3)
		{
			contadorDesaprobados++;
			edadDesaprobados=edadDesaprobados+edad;
			if(sexo=="m"){
				varonesDesaprobados++;
			}
		}


		if(notas%2==0)
		{
			notasPar++;
		}else{
			notasImpar++;
		}

		if(contadorAlumnos ==1){
		maximo = notas;
        minimo = notas;
        alumnoMin = alumnos;
        alumnoMax = alumnos;
        edadMin = edad;
        sexoEdadMin = sexo;
    	}
 
    	if (notas < minimo) {  
              minimo = notas; 
              alumnoMin = alumnos;
          } else if (notas > maximo) {
              maximo = notas; 
              alumnoMax = alumnos;
          }

        if(edad < edadMin){
        	edadMin = edad;
        	sexoEdadMin= sexo;
        }






	acumuladorNotas=acumuladorNotas+notas;
	respuesta=prompt("Desea ingresar otro dato? si/no");


	}

	promedioNotas=acumuladorNotas/contadorAlumnos;
	promedioMujeres=acumuladorNotasMujeres/contadorMujeres;
	promedioDesaprobados=edadDesaprobados/contadorDesaprobados;

	
	



	document.write("<br> La cantidad de alumnos es: "+contadorAlumnos);
	document.write("<br> El promedio de notas es: "+promedioNotas);
	document.write("<br> La cantidad de mujeres es: "+contadorMujeres);
	document.write("<br> La cantidad de hombres es: "+contadorHombres);
	document.write("<br> La cantidad de hombres desaprobrados: "+varonesDesaprobados);
	document.write("<br> La cantidad de las notas pares es: "+notasPar);
	document.write("<br> La cantidad de las notas impares: "+notasImpar);
	document.write("<br> Alumnos: "+alumnos);
	document.write("<br> Nota maxima: "+maximo+" De: "+alumnoMax);
	document.write("<br> Nota minima: "+minimo+" De: "+alumnoMin);
	document.write("<br> promedio notas mujeres: "+promedioMujeres);
	document.write("<br> Edad minima: "+edadMin+" Sexo: "+sexoEdadMin);
	document.write("<br> Promedio de edad de desaprobados: "+promedioDesaprobados);





	
}

