function Mostrar()
{
//tomo la edad  
	var edad;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	if(edad<18)
	{
		alert("Menor");
	}
	else
	{
		alert("Mayor");
	}

}//FIN DE LA FUNCIÓN