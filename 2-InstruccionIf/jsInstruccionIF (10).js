function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	nota=Math.floor(Math.random() * 10) + 1;
	console.log(nota);
	
	if(nota>8)
	{
		alert("Excelente")
	}

	else
	{
		if(nota<4)
		{
			alert("Vamos, la proxima se puede")
		}
		else
		{
			alert("Aprobo")
		}
	}
		
}//FIN DE LA FUNCIÓN