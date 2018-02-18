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
 	var cantidad;
 	var marca;
 	var descuentoPorcenta;
 	var ingresosBrutos;
 	var importeFinal;
 	var impuestos;
 	var precioBruto
 	
 	precio=35;
 	descuentoPorcenta=1;
 	cantidad=document.getElementById('Cantidad').value;
 	precioBruto=cantidad*precio;
 	importeFinal=precioBruto*descuentoPorcenta;

 	if(cantidad>5)
 	{
 		descuentoPorcenta=0.5;
 	
 	}else{
 		
 		if(cantidad==5)
 		{
 			if(marca=="ArgentinaLuz")
	 			{
	 				descuentoPorcenta=0.4;
	 			}
	 		else
	 			{
	 				descuentoPorcenta=0.3;
	 			}
 		}
 		
 		}
 	if(cantidad==4)
 		{
 			if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
 			{
 				descuentoPorcenta=0.25;

 			}else{
 				descuentoPorcenta=0.20;
 			}
 		}
 	if(cantidad==3)
 		{
 			if(marca=="ArgentinaLuz")
 				{
 					descuentoPorcenta=0.15;
 				}
 			if(marca=="FelipeLamparas")
 				{
 					descuentoPorcenta=0.10
 				}
 			else
 			{
 				descuentoPorcenta=0.5
 			}
 		}

 	if(importeFinal>120)
 		{
 			impuestos=importeF3inal*0.10
 			importeFinal=importeFinal+impuestos
 			alert("IIBB Usted pagó "+importeFinal+" ,siendo "+impuestos+" el impuesto que se pagó")
 		}

 	document.getElementById('precioDescuento').value=precioDescuento;
}
