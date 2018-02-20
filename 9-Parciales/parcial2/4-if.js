//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=prompt("Ingrese aquí un número");
	numeroDos=prompt("Ingrese aquí un número");

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	if(numeroUno==numeroDos)
	{
		resultado=numeroUno*numeroDos;
		document.write(+resultado);
	}

	else if(numeroUno>numeroDos)
	{
		resultado=numeroUno-numeroDos;
		document.write(+resultado);
	}
	else
	{
		resultado=numeroUno+numeroDos;
		document.write(+resultado);
	}
}

