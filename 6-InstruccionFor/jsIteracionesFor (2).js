function Mostrar()
{
	var contador=0;
	var iteraciones=10;

	for(contador=0;contador<iteraciones;contador++)
	{
		if(contador=10)
		{
			break;
		}
		if(contador==5)
		{
			continue;
		}
		document.write("<br>"+contador);

		
	}




}