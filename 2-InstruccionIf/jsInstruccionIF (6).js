function Mostrar()
{
//tomo la edad  

	var edad;
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	if(edad<=12)
	{
		alert("niño");
	}
	if(edad<=17)
	{
		alert("Adolescente");
	}

	if(edad>=18)
	{
		alert("Mayor de edad");
	}
}//FIN DE LA FUNCIÓN