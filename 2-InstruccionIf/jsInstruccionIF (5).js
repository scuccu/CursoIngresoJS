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
			if(!(edad>=13||edad<=17);
			{
				alert("No es adolescente");
			}
			
		}

}//FIN DE LA FUNCIÓN