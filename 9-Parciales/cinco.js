function Mostrar()
{
	var día;

	día=prompt("Escriba un día")

	switch(día)
	{
		case"Sabado":
		case"Domingo":
		{
			alert("es fin de semana")
		}
		break;

		case"Lunes":
		case"Martes":
		case"Miercoles":
		case"Jueves":
		case"Viernes":
		{
			alert("a trabajar!")
		}
		break;
	}
}