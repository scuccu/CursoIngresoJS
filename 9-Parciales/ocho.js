//ingreso de alumnos, 
//no sabemos cuantos alumno hay solo pedidmos el nombre
//quiero saber cuantos alumnos ingrese
//al final doc.write que diga cuantos alumnos ingrese


function Mostrar()
{
	var nombreAlumnos;
	var nota;
	var cantidadDeAlumnos=0
	var contador=0
	var respuesta="Si";
	var acumulador=0;
	var promedio;
	var cantF;
	var cantM;
	var sexo;

	while(respuesta!="no")
	{
		cantidadDeAlumnos++
		nombreAlumnos=prompt("Ingrese un nombre");
		acumulador=acumulador+nombreAlumnos;
		promedio=acumulador/cantidadDeAlumnos;
		nombreAlumnos=prompt("Desea ingresar un nuevo nombre?");


	while(nota<0 || nota>10)
		{
			contador++
			nota=prompt("Ingrese una nota");
			nota=parseInt(nota);
			acumulador=acumulador+nota;
			promedio=acumulador/contador;
		}
		

	while(!(sexo=="femenino" || sexo=="masculino"))
	{
		sexo=prompt("Ingrese un sexo correcto");
	
	while(sexo=="femenino" || sexo=="masculino")
	{
		if(sexo=="femenino")
		{
			cantF++
		}
		if(sexo=="masculino")
		{
			cantM++
		}

	}
	
	}

	}		
	
	
	


	

	document.wrte("La suma de nombres es: "+acumulador);
	document.wrte("El promedio de nombre es: "+promedio);
	document.write("La suma de nota es de: "+acumulador);
	document.write("El promedio es de: "+promedio);
	document.write("Cantidad de mujeres: "+cantF);
	document.write("Cantidad de hombres: "+cantM);

	
	
}





