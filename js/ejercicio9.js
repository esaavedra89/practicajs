/**
 * Created by Eleazar on 9/29/2017.
 */

var cadena = prompt("Introduce unas frase");

function upperlower(texto) {
    //comprueba mayusculas
    if(texto==texto.toUpperCase()){
        alert("La cadena de exto esta conformada por Mayúsculas");
    }//compureba minusculas
    else if(texto==texto.toLowerCase()){
        alert("La cadena de exto esta conformada por Minusculas");
    }else
        //contiene mayusculas y minusculas
        {
        alert("La cadena de exto esta conformada por Mayusculas y Minusculas");
    }
}

upperlower(cadena);
