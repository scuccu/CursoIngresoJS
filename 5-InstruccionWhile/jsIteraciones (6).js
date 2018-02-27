function Mostrar()
{
	var numero;
	var contador=0;
	var iteraciones=5;
	var acumulador=0;
	var promedio;

	while(contador<iteraciones)
	{
		contador++;
		numero=prompt("Ingrese 5 digitos");
		numero=parseInt(numero);
		acumulador=acumulador+numero;
		promedio=acumulador/contador;
	}
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN