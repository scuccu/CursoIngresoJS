function Mostrar()
{
//tomo la edad  
	var edad;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	if(edad<=0)
		{
			alert("Ingrese bien la edad");
		}

		else
		{
			if(edad>=18)
	{
		alert("Mayor");
	}
	else
	{
		alert("Menor");
	}
		

	}
	

}//FIN DE LA FUNCIÓN