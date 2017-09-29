/**
 * Created by Eleazar on 9/29/2017.
 */
/*//recibimos la cedena
var cadenaoriginal = prompt("Introduce una palabra");
//transformamos a minisculas
var cadenalower = cadenaoriginal.toLowerCase();
//convertimos en un arreglo
var cadenarreglo = cadenalower.split();*/

//creamos un elemento
window.onload = function () {
    //creamos un elemento
    var parrafo = document.createElement("p");
    // Crear nodo de tipo Text
    var contenido = document.createTextNode("Hola mundo mio");
    // Añadir el nodo Text como hijo del nodo Element
    parrafo.appendChild(contenido);
    // Añadir el nodo Element como hijo de la pagina
    document.body.appendChild(parrafo);

    var enlace = document.getElementById("enlace");
    alert(enlace.href);

    var imagen = document.getElementById("imagen");
    alert(imagen.style.margin);


};


function borrar() {
    //remover un nodo
    var para = document.getElementById("provisional");
    para.parentNode.removeChild(para);
};








