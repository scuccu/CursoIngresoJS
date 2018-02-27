function Mostrar()
{
	var numero;
	var contador=0;
	var acumulador=0;
	var respuesta="si";
	var promedio;

	while(respuesta=="si")
	{
		contador++;
		numero=prompt("Ingrese numero por favor");
		numero=parseInt(numero);
		respuesta=prompt("Desea ingresar otro numero");
		acumulador=acumulador+numero;
		promedio=acumulador/contador;
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN