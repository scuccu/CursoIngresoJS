function Mostrar()
{

	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=prompt("Escriba aquí un número");
	numeroDos=prompt("Escriba aquí un número");

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	resultado=parseInt(resultado);

	resultado=numeroUno+numeroDos;

	if(resultado<=-1)
	{
		document.write("negativo");
	}
	else if(resultado>0)
	{
		document.write("positivo");
	}
	else
	{
		document.write("cero");
	}


}
