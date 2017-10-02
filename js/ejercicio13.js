/**
 * Created by Eleazar on 10/2/2017.
 */
function añade() {

    var list = document.createElement("li");
    var contenido = document.createTextNode("Nuevo Elemento!");
    list.appendChild(contenido);


    var lista = document.getElementById("lista");
    lista.appendChild(list);


}
