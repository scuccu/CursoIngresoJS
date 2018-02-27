function Mostrar()
{
	var notas;
	var contador=0;
	var acumulador=0;
	var iteraciones=10;
	var sexo;
	var promedio;
	var minimo=100;
	var varonesmayores=0;

	while(contador<iteraciones)
	{
		contador++;
		notas=prompt("Ingrese aquí una nota");
		notas=parseInt(notas);

		if(notas<0 || notas>10)
		{
			notas=prompt("Ingrese una nota correcta");
			notas=parseInt(notas);
		}
		if(notas<minimo)
		{
			minimo=notas;
		}

		sexo=prompt("Ingrese su sexo f/m")
		
		while(!(sexo=="f" || sexo=="m"))
		{
			sexo=prompt("Indique su sexo correcto")
		}
		
		if(sexo=="m" && notas>=6)
		{
			varonesmayores++;
		}
		
		acumulador=acumulador+notas;
		promedio=acumulador/contador;

	}
	document.write("<br> El promedio de notas totales: "+promedio);
	document.write("<br> La nota más baja: "+minimo);
	document.write("<br> La cantidad de varonesque su nota haya sido + o = a 6: "+varonesmayores)


}
