
//HAY QUE ARREGLARLO!

function Mostrar()
{

	var contador=0;
	var maximo;
	var minimo;
	var numero;
	
	var respuesta='si';

	while(respuesta!='no')
	{
		contador++;
		numero=prompt("");
		numero=parseInt(numero);
		if(contador==1)
		{
			maximo=numero;
			minimo=numero;
		}else
		{
			if(numero>maximo)
			{
				maximo=numero;
			}
			if(numero<minimo)
			{
				minimo= numero
			}
		}
	
	}




}//FIN DE LA FUNCIÓN
