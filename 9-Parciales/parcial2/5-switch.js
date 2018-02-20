//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	
	var mesDelAño;

	mesDelAño=prompt("Ingrese un mes");

	switch(mesDelAño)
	{
		case"Enero":
		case"Febrero":
		alert("Veranito!")
		break;

		default:
		alert("Etraño Enero y Febrero!")
		break;
	}



}

