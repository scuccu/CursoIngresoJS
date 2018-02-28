/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 
	var edad;
	var sexo;
	var estadoCivil;
	var sueldoBruto;
	var numeroDeLegajo;
	var nacionalidad;
	var argentinos="A";
	var extranjeros="E";
	var nacionalizados="N";

	
	
				edad=prompt("Ingrese aquì una edad");
				edad=parseInt(edad);

			while(edad<17 || edad>90 || isNaN(edad))
			{
				edad=prompt("Ingrese una edad correcta");
				edad=parseInt(edad);	
			}
			
			sexo=prompt("Ingrese un sexo");

			while(!(sexo=="f" || sexo=="m"))
			{
				sexo=prompt("Ingrese un sexo correcto");
			}

			estadoCivil=prompt("Ingrese 1 para soltero, 2 para casado, 3 para divorciado, y 4 para viudos");
			estadoCivil=parseInt(estadoCivil);

			while(estadoCivil>4 || isNaN(estadoCivil))
			{
				esadoCivil=prompt("Ingrese un estado civil correcto");
				estadoCivil=parseInt(estadoCivil);
			}

			sueldoBruto=prompt("Ingrese su sueldo bruto");
			sueldoBruto=parseInt(sueldoBruto);

			while(sueldoBruto<7999 || isNaN(sueldoBruto))
			{
				sueldoBruto=("Ingrese su sueldo bruto correcto");
				sueldoBruto=parseInt(sueldoBruto);
			}
			
			numeroDeLegajo=prompt("Ingrese su numero de legajo sin 0 a la izquierda");
			numeroDeLegajo=parseInt(numeroDeLegajo);

			while(!(numeroDeLegajo>9999 || numeroDeLegajo<1000 || isNaN(numeroDeLegajo)))
			{
				numeroDeLegajo=prompt("Ingrese un numero de legajo correcto");
				numeroDeLegajo=parseInt(numeroDeLegajo);
			}

			nacionalidad=prompt("Indique su nacionalid A para argentinos, E para extranjeros y N para nacionalizados");

			while(argentinos!="A" || extranjeros!="E" || nacionalizados!="N" || (!(isNaN(nacionalidad))))
			{
				nacionalidad=prompt("Ingrese una letra correcta")
			}



				
	

	document.getElementById('Edad').value=edad;
	document.getElementById('Sexo').value=sexo;
	document.getElementById('EstadoCivil').value=estadoCivil;
	document.getElementById('Sueldo').value=sueldoBruto;
	document.getElementById('Legajo').value=numeroDeLegajo;
	document.getElementById('Nacionalidad').value=nacionalidad;



}
