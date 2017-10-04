/*window.onload = function() {
    document.onkeyup = muestraInformacion;
    document.onkeypress = muestraInformacion;
    document.onkeydown = muestraInformacion;
}

function muestraInformacion(elEvento) {
    var evento = window.event || elEvento;

    var mensaje =
        "Tipo de evento: " + evento.type + "<br>" +
        "Propiedad keyCode: " + evento.keyCode + "<br>" +
        "Propiedad charCode: " + evento.charCode + "<br>" +
        "Carácter pulsado: " + String.fromCharCode(evento.charCode);

    info.innerHTML += "<br>--------------------------------------<br>" + mensaje

    if(evento.altKey) {
        alert('Estaba pulsada la tecla ALT');
    }
}

function muestraInformacion1(elEvento) {
    var evento = elEvento || window.event;
    var coordenadaX = evento.clientX;
    var coordenadaY = evento.clientY;
    alert("Has pulsado el ratón en la posición: " + coordenadaX + ", " + coordenadaY);
}

document.onclick = muestraInformacion1;
 */
 
 //eventos del raton con respecto a la ventana del navegador



 /*function muestraInformacion(elEvento) {
     var nave = document.getElementById("navegador");
     var evento = elEvento || window.event;
     var coordenadaX = evento.clientX;
     var coordenadaY = evento.clientY;
    // console.log("Las coordenadas de la pulsada del ratón son: "+coordenadaX +", " +coordenadaY);
     nave.innerHTML = "Las coordenadas de la pulsada del ratón son: "+coordenadaX +", " +coordenadaY;
 }

 //evento del raton en funcion a la pagina

function muestraInformacionPage(elEvento2) {
    var pag = document.getElementById("pagina");
    var evento = elEvento2 || window.event;
    coordenadaX = evento.pageX;
    coordenadaY = evento.pageY;
    pag.innerHTML = "Has pulsado el ratón en la posicion: "+coordenadaX +", "+coordenadaY +" de la pagina web";
}*/
 /*
function muestraInformacion(elEvento) {
    var pag = document.getElementById("pagina");
    var nave = document.getElementById("navegador");
    var evento = elEvento || window.event;
    var coordenadaX = evento.clientX;
    var coordenadaY = evento.clientY;
    var coordenadaX1 = evento.pageX;
    var coordenadaY1 = evento.pageY;
    pag.innerHTML = coordenadaX1 +", "+coordenadaY1;
    nave.innerHTML = coordenadaX +", " +coordenadaY;
}

function teclado(evento) {
    var div = document.getElementById("div");
    var mostrar = document.getElementById("mostrar");
    var cara = document.getElementById("caracter");
    var cod = document.getElementById("codigo");
    var eve = window.event || evento;
    var mensaje = eve.keyCode;
    var mensaje2 = String.fromCharCode(eve.charCode);


        /*cara.innerHTML +=  mensaje2;
        cod.innerHTML += mensaje;*/
    /*if(div.style.display = "block"){

        div.style.display = "none";
        mostrar.style.display = "block";
        cara.innerHTML +=  mensaje2;
        cod.innerHTML += mensaje;
    }




}
//color de fondo

function changeColor() {
    var div = document.getElementById("div");
    var div1 = document.getElementById("div1");

    if(div.className == "block3" || div1.className == "block3"){
        div.className = "block1";
        div1.className = "block1";
    }else if(div.className == "block1" || div.className == "block1"){
        div.className = "block2";
        div1.className = "block2";
    }else  {
        div.className = "block3";
        div1.className = "block3";
    }
}
     document.onmousemove = muestraInformacion;
     document.onkeypress = teclado;
     document.onclick = changeColor;*/
function informacion(elEvento) {
    var pag = document.getElementById("pagina");
    var nave = document.getElementById("navegador");
    var evento = elEvento || window.event;
    var coordenadaX = evento.clientX;
    var coordenadaY = evento.clientY;
    var coordenadaX1 = evento.pageX;
    var coordenadaY1 = evento.pageY;

switch(evento.type) {
    case 'mousemove':
        pag.innerHTML = coordenadaX1 +", "+coordenadaY1;
        nave.innerHTML = coordenadaX +", " +coordenadaY;
        break;
    case 'keypress':
        var div = document.getElementById("div");
        var mostrar = document.getElementById("mostrar");
        var cara = document.getElementById("caracter");
        var cod = document.getElementById("codigo");
        var eve = window.event || evento;
        var mensaje = eve.keyCode;
        var mensaje2 = String.fromCharCode(eve.charCode);

        div.style.display = "none";
        mostrar.style.display = "block";
        cara.innerHTML +=  mensaje2;
        cod.innerHTML += mensaje;
        break;
    case 'click':
        var div = document.getElementById("div");
        var mostrar = document.getElementById("mostrar");

        if(div.className == "block3" || mostrar.className == "block3"){
            div.className = "block1";
            mostrar.className = "block1";
        }else if(div.className == "block1" || mostrar.className == "block1"){
            div.className = "block2";
            mostrar.className = "block2";
        }else  {
            div.className = "block3";
            mostrar.className = "block3";

        }
        break;
    default:
        document.onmousemove = function(elEvento) {
        var pag = document.getElementById("pagina");
        var nave = document.getElementById("navegador");
        var evento = elEvento || window.event;
        var coordenadaX = evento.clientX;
        var coordenadaY = evento.clientY;
        var coordenadaX1 = evento.pageX;
        var coordenadaY1 = evento.pageY;

        pag.innerHTML = coordenadaX1 +", "+coordenadaY1;
        nave.innerHTML = coordenadaX +", " +coordenadaY;
    }
        break;

}
}
document.onmousemove = informacion;
document.onkeypress = informacion;
document.onclick = informacion;




