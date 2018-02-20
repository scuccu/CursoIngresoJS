function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	numero=parseInt(numero);

	
	while(numero<0 || numero>10)
	{
		numero=prompt("Error, ingrese un número entre 0 y 10.");
		numero=parseInt(numero);
	}

	alert("Numero registrado")
	document.getElementById('Numero').value=numero;

}//FIN DE LA FUNCIÓN