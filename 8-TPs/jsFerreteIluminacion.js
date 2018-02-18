/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var precio;
 	var cantidad;
 	var descuento;
 	var importe;
 	var importeConD;
 	var impuestos;
 	var importeFinal;
 	var marca;

 	cantidad=document.getElementById('Cantidad').value;
 	precio=35;
 	descuento=1;
 	importe=cantidad*35

 	if(cantidad>5)
 	{
 		importeConD=(cantidad*35)*0.50
 		document.getElementById('precioDescuento').value=importeConD;
 	}

 	if(cantidad==5)
 	{
 		if(marca=="ArgentinaLuz")
 		{
 			descuento=(cantidad*35)*0.40
 			importeConD=importe-descuento
 		document.getElementById('precioDescuento').value=importeConD;
 		}
 		else
 		{
 			descuento=(cantidad*35)*0.30
 			importeConD=importe-descuento
 		document.getElementById('precioDescuento').value=importeConD;
 		}
 	}

 	if(cantidad==4) 
 	{
 		if(marca"ArgentinaLuz" || marca"FelipeLamparas")
 		{
	 		descuento=(cantidad*35)*0.25
 			importeConD=importe-descuento
 			document.getElementById('precioDescuento').value=importeConD;
 		}
 		else
 		{
 			descuento=(cantidad*35)*0.20
 			importeConD=importe-descuento
 			document.getElementById('precioDescuento').value=importeConD;
 		}
	 	}

 	if(cantidad==3)
 	{
 			if(marca=="ArgentinaLuz")
 			{
 				descuento=(cantidad*35)*0.15
 				importeConD=importe-descuento
 		document.getElementById('precioDescuento').value=importeConD;
 			}
 			if(marca=="FelipeLamparas")
 			{
 				descuento=(cantidad*35)*0.10
 				importeConD=importe-descuento
 		document.getElementById('precioDescuento').value=importeConD;
 			}
 			else
 			{
 				descuento=(cantidad*35)*0.05
 				importeConD=importe-descuento
 		document.getElementById('precioDescuento').value=importeConD;
 			}
 	}

 	if(importeConD>120)
 	{
 		impuestos=importeConD*0.10
 		importeFinal=importeConD+impuestos
 		alert("IIBB Usted pagó "+importeFinal+", siendo "+impuestos+" el impuesto que se pagó")
 		document.getElementById('precioDescuento').value=importeFinal;
 	}
}
