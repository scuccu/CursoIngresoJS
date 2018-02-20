//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var mesDelAño

	mesDelAño=prompt("Ingrese aquí un mes");

	switch(mesDelAño)
	{
		case"Enero":
		case"Febrero":
		alert("Veranito!")
		break;

		case"Marzo":
		case"Abril":
		case"Mayo":
		case"Junio":
		case"Julio":
		case"Agosto":
		case"Septiembre":
		case"Octubre":
		case"Nobiembre":
		case"Diciembre":
		alert("extraño Enero y Febrero!")
		break;

		default:
		alert("Este mes no existe")
		break;
	}
}

