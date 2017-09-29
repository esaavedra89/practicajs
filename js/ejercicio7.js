/**
 * Created by Eleazar on 9/28/2017.
 */
/*
for(inicializacion; condicion; actualizacion) {
 ...
 }

 La idea del funcionamiento de un bucle for es la siguiente: "mientras la condición indicada se siga cumpliendo, repite
  la ejecución de las instrucciones definidas dentro del for. Además, después de cada repetición, actualiza el valor de
  las variables que se utilizan en la condición".

 La "inicialización" es la zona en la que se establece los valores iniciales de las variables que controlan la repetición.
 La "condición" es el único elemento que decide si continua o se detiene la repetición.
 La "actualización" es el nuevo valor que se asigna después de cada repetición a las variables que controlan la repetición.


 */

var numero = prompt("Introduce un número y se mostrará su factorial");
var resultado = 1;

for(var i=1; i<=numero; i++) {
    resultado *= i;
}
alert("El factorial de "+ numero + " es igual es: "+resultado);