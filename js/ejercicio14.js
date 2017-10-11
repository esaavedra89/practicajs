


function mostrarOcultar(id) {
    var ele = document.getElementById("contenidos_"+id);
    var enla = document.getElementById("enlace_"+id);

    if(ele.style.display == "" || ele.style.display == "block"){
        ele.style.display = "none";
        enla.innerHTML = "Mostrar contenido";
    }else {
        ele.style.display = "block";
        enla.innerHTML="Ocultar información";
    }
}

