function Mostrar()
{
	
	var contador=0;
	var numero;
	numero=prompt("Ingrese un numero entre 0 y 9");
	
	while(!(numero>=0 && numero<=9))
	{
		numero=parseInt(numero);
		numero=prompt("Error, ingrese de nuevo")

	}
	document.getElementById('Numero').value=numero;

}//FIN DE LA FUNCIÓN