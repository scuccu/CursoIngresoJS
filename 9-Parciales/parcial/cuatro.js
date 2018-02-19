function Mostrar()
{
 	var numeroUno
 	var numeroDos
 	var resultado

 	numeroUno=prompt("Ingrese aquí un número")
 	numeroDos=prompt("Ingrese aquí otro número")
 	numeroUno=parseInt(numeroUno);
 	numeroDos=parseInt(numeroDos);

 	if(numeroUno==numeroDos)
 		{
 			resultado=numeroUno*numeroDos;

 			document.write("Su resultado es "+resultado);
 		}

 	if(numeroUno>numeroDos)
 	{
 		resultado=numeroUno-numeroDos;
 		document.write("Su resultado es "+resultado);
 	}
 		
	
	if(numeroUno<numeroDos)
	{
	 	resultado=numeroUno+numeroDos;
 		document.write("Su resultado es "+resultado);
	}

 	
 		
}	
