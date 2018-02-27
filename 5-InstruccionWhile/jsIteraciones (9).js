function Mostrar()
{

	var numero;
	var respuesta="si";
	var maximo;
	var minimo;
	var contador=0;

	while(respuesta=="si")
	{
		contador++;
		numero=prompt("Ingrese un numero")
		numero=parseInt(numero);

		if(contador==1)
		{
			maximo=numero
			minimo=numero
		}
		else 
		{
			if(numero>maximo)
			{
				maximo=numero
			}

			if(numero<minimo)
			{
				minimo=numero
			}

		}
		






		respuesta=prompt("Desea ingresar más numeros?")
	}

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;




}//FIN DE LA FUNCIÓN