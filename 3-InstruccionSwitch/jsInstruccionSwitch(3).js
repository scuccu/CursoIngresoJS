function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
	switch(mesDelAño)
	{
		case"Febrero":
		alert("Este mes no tiene màs de 29 dìas");
		break;

		case"Enero":
		case"Marzo":
		case"Abril":
		case"Mayo":
		case"Junio":
		case"Julio":
		case"Agosto":
		case"Septiembre":
		case"Octubre":
		case"Noviembre":
		case"Diciembre":
		alert("Este mes tiene 30 o màs dìas")
		break;
	}


}//FIN DE LA FUNCIÓN