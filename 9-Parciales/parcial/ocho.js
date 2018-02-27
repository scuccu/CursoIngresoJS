function Mostrar()
{
	
	var alumnos;
	var contador=0;
	var promedio;
	var acumulador=0;
	var notas;
	var respuesta="si";
	var sexo;
	var cantf=0;
	var cantm=0;
	var acumuladorf=0;
	var promediof;
	var cantmd=0;
	var max=0;
	var min=100;
	var mejorNota=0;
	var Edad;
	var menorEdad;
	var contadorEdad=0;
	var acumuladorEdad=0;
	var cantPar=0;
	var cantImpar=0;
	var promedioEdad;

	while(respuesta=="si")
	{
		contador++;
		alumnos=prompt("Ingrese un nombre");
		notas=prompt("Ingrese una nota");
		notas=parseInt(notas);

		if(notas<0 || notas>10 || isNaN(notas))
		{
			notas=prompt("Ingrese una nota correcta");
			notas=parseInt(notas);
		}

		sexo=prompt("Ingrese un sexo por favor f/m");

		while(!(sexo=="f" || sexo=="m"))
		{
			sexo=prompt("Ingrese un sexo correcto");
		}
		
		if(sexo=="f")
		{
			cantf++;
			acumuladorf=acumuladorf+notas;
		}
		if(sexo=="m")
		{
			cantm++;
		}
		if(sexo=="m" && notas<3)
		{
			cantmd++;
		}
		if(notas>max)
		{
			max=notas;
			mejorNota=alumnos;
		}

		edad=prompt("Ingrese la edad");
		edad=parseInt(edad);

		if(edad<17 || isNaN(edad))
		{
			edad=prompt("Ingrese una edad correcta")
			edad=parseInt(edad);
		}
		if(edad<min)
		{
			min=edad;
			menorEdad=sexo;
		}
		if (notas>4)
		{
			contadorEdad++;
			acumuladorEdad=acumuladorEdad+Edad;
		}
		if(notas%2==0)
		{
			cantPar++;
		}
		else
		{
			cantImpar++;
		}



	respuesta=prompt("Desea ingresar un nuevo dato) si/no");
	acumulador=acumulador+notas;
	promedio=acumulador/contador;
	promediof=acumuladorf/cantf;
	promedioEdad=acumuladorEdad/contadorEdad;
	}

	
	


	document.write("<br> La cantidad de alumnos es: "+contador);
	document.write("<br> El promedio total es: "+promedio);
	document.write("<br> La cantidad de mujeres es: "+cantf);
	document.write("<br> La cantidad de hombres: "+cantm);
	document.write("<br> La cantidad de varones desaprobados: "+cantmd);
	document.write("<br> El nombre con la mejor nota: "+mejorNota);
	document.write("<br> El promedio de las mujeres es: "+promediof);
	document.write("<br> Sexo del menor de edad: "+menorEdad);
	document.write("<br> Promedio de las edades de los aprobados: "+promedioEdad);
	document.write("<br> Cantidad de notas pares: "+cantPar);
	document.write("<br> Cantidad de notas impares: "+cantImpar);









}
