function Mostrar()
{

	var edad;
	var iteraciones=100;
	var contador=0;
	var sexo;
	var cantv=0;
	var promedioEdad;
	var acumuladorEdad=0;
	var minimo=100;

	while(contador<iteraciones)
	{
			contador++;
			edad=prompt("Ingrese una edad");
			edad=parseInt(edad);
			
		
		while(edad<0 || edad>100 || isNaN(edad))
		
		{
			edad=prompt("Ingrese una edad correcta");
			edad=parseInt(edad);
		}
		
		sexo=prompt("Ingrese un sexo correcto");
		
		while(!(sexo=="f" || sexo=="m"))
		{
			sexo=prompt("Ingrese un sexo correcto");

		}
		
		if(edad<minimo)
		{
			minimo=edad;
		}
		
		
		if(sexo=="m" && edad>=20)
		{
			cantv++;
		}

		acumuladorEdad=acumuladorEdad+edad;
		promedioEdad=acumuladorEdad/contador;
	}


	document.write("<br> El promedio de la edad es: "+promedioEdad);
	document.write("<br> La edad más baja es: "+minimo);
	document.write("<br> Cantidad de varones mayores o iguales a 20: "+cantv);


}
