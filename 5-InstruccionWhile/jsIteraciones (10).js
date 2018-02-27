function Mostrar()
{
	var numero;
	var contador=0;
	var respuesta="si";
	var positivo=0;
	var cantpositivos=0
	var negativo=0;
	var cantnegativos=0
	var ceros=0;
	var pares=0;
	var cantpares=0;
	var cantpares;
	var promediopo;
	var promedione;
	var diferencia;

	while(respuesta=="si")
	{
		contador++;
		numero=prompt("Ingrese aquí sus numeros");
		numero=parseInt(numero);

		if(numero<=-1)
		{
			cantnegativos++;
			negativo=negativo+numero;
			promedione=negativo/cantnegativos;
		}
		if(numero>0)
		{
			cantpositivos++;
			positivo=positivo+numero;
			promediopo=positivo/cantpositivos;
		}
		if(numero==0)
		{
			ceros++;
		}
		if(numero%2==0 && numero!=0)
		{
			cantpares++;
		}

		if(cantpositivos>cantnegativos)
		{
			diferencia=cantpositivos-cantnegativos;	
		}
			else
			{
				diferencia=cantnegativos-cantpositivos;
			}



		respuesta=prompt("Desea agregar un nuevo numero?");
	}
	

	document.write("<br> Suma de negativos "+negativo);
	document.write("<br> Suma de positivos "+positivo);
	document.write("<br> Cantidad de positivos "+cantpositivos);
	document.write("<br> Cantidad de negativos "+cantnegativos);
	document.write("<br> Cantidad de ceros "+ceros);
	document.write("<br> Cantidad de pares "+cantpares);
	document.write("<br> Promedio de positivos "+promediopo);
	document.write("<br> Promedio de negativos "+promedione);
	document.write("<br> Diferencia de negativos y positivos "+diferencia);
}//FIN DE LA FUNCIÓN