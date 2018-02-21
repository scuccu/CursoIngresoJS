function Mostrar()
{


//Ejercicio de repeticiòn y random
//var repetciones = prompt("ingrese el número de repeticiones");
var iteraciones=10
var numeroRandom
var contador0=0
var contador1=0
var contador2=0
var contador3=0
var contador4=0
var contador5=0
var contador6=0
var contador7=0
var contador8=0
var contador9=0

for(contador=0;contador<iteraciones;contador++)
{
	numeroRandom=Math.floor(Math.random() * 10);

	switch(numeroRandom)
	{
		case 0:
			contador0++;
			break;
		case 1:
			contador1++;
			break;
		case 2:
			contador2++;
			break;
		case 3:
			contador3++;
			break;

		case 4:
			contador4++;
			break;
		case 5:
			contador5++;
			break;
		case 6:
			contador6++;
			break;
		case 7:
			contador7++;
			break;
		case 8:
			contador8++;
			break;
		case 9:
			contador9++;
			break;

	}
}

document.write("<br>" "cantidad de ceros :"+contador0);
document.write("<br>" "cantidad de unos :"+contador1);
document.write("<br>" "cantidad de dos :"+contador2);
document.write("<br>" "cantidad de tres :"+contador3);
document.write("<br>" "cantidad de cuatro :"+contador4);
document.write("<br>" "cantidad de cinco :"+contador5);
document.write("<br>" "cantidad de seis :"+contador6);
document.write("<br>" "cantidad de siete :"+contador7);
document.write("<br>" "cantidad de ocho :"+contador8);
document.write("<br>" "cantidad de nueve :"+contador9);
document.write("<br>"+numeroRandom);
}//FIN DE LA FUNCIÓN