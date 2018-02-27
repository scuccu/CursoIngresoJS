function Mostrar()
{

	var numero;
	var contador=0;
	var respuesta="si";
	var positivo=0;
	var negativo=1;

	while(respuesta=="si")
	{
		contador++;
		numero=prompt("Ingrese un numero")
		numero=parseInt(numero);
		
	
	if(numero>0)
	{
		
		positivo=positivo+numero;
	}

	if(numero<=-1)
	{
		
		negativo=numero*numero;
	}
	respuesta=prompt("Desea ingresar otro numero?")

	}

	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;


}//FIN DE LA FUNCIÓN