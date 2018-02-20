function Mostrar()
{
	var mes;

	mes=prompt("MES");

	switch(mes)
	{
		case("Diciembre"):
		{
			alert("Se vienen las fiestas");
		}
		break;

		case("Enero"):
		{
			alert("Comienza el año");
		}
		break;

		default:
		{
			alert("no es Enero, ni Diciembre");
		}
		break;

	}

}


