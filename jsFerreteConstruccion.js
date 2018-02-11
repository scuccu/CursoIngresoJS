/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var Ancho;
	var Largo;
	var Alambre;
	var Terreno;
	

	Ancho=document.getElementById('Ancho').value;
	Largo=document.getElementById('Largo').value;

	Ancho=parseInt(Ancho);
	Largo=parseInt(Largo);

	terreno=Ancho*Largo;
	alambre=terreno*3;

	alert("Nesecita "+alambre+" mts de alambre");

}

function Circulo () 
{
	var radio;
	var alambre;
	var terreno;

	radio=document.getElementById('Radio').value;

	radio=parseInt(radio);

	terreno=(2*Math.PI)*radio;
	alambre=terreno*3

	alert("Nesecita "+alambre+" mts de alambre");

}

function Materiales () 
{
	var Ancho;
	var Largo;
	var terreno;
	var materiales;

	Ancho=document.getElementById('Ancho').value;
	Largo=document.getElementById('Largo').value;

	Ancho=parseInt(Ancho);
	Largo=parseInt(Largo);

	terreno=(Ancho*Largo);

	cemento=terreno*2;
	cal=terreno*3

	alert("Por "+terreno+" mts se necesitan "+cemento+" bolsas de cemento y "+cal+" bolsas de cal");

}