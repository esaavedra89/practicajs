function limita(maximoCaracteres) {
    var elemento = document.getElementById("texto");
    var cara = document.getElementById("caracteres");
    cara.innerHTML = maximoCaracteres-elemento.value.length;
    if(elemento.value.length >= maximoCaracteres ) {
        return false;
    }
    else {
        return true;
    }

}
