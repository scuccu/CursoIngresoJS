function Mostrar()
{

var sexo = prompt("ingrese f ó m .");
switch(sexo)
{
	case"masculino":
	case"femenino":
	alert("Completado")
	break;
} 

while(!(sexo=="masculino" ||sexo=="femenino"))
{
	sexo=prompt("Ingrese un sexo correcto")
}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN