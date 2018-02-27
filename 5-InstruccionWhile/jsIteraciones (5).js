function Mostrar()
{
	var sexo;
	sexo=prompt("Ingrese un sexo por favor");
	
	while(!(sexo=="f" || sexo=="m"))
	{
		sexo=prompt("Ingrese un sexo correcto por favor");
	}
	document.getElementById('Sexo').value=sexo;
}//FIN DE LA FUNCIÓN