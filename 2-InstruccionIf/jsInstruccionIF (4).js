function Mostrar()
{
//tomo la edad  
	
	var edad;
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	if(edad<=0)
	{
		alert("Ingrese una edad");
	}

	else
	{
		if(edad>=13&&edad<=17)
		{
			alert("Adolescente");
		}
		else
		{
			alert("No es adolescente")
		}

	}



}//FIN DE LA FUNCIÓN