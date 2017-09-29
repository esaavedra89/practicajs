/**
 * Created by Eleazar on 9/29/2017.
 */

var entrada = prompt("Introduce un número");
function parimpar(numero) {
    if(numero%2==0) {
        alert("El número ingresado es 'PAR'")
    } else {
        alert("El número ingresado es 'IMPAR'");
    }
}

parimpar(entrada);