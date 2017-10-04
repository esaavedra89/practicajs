/**
 * Created by Eleazar on 10/4/2017.
 */
function informacion(elEvento) {
    var evento = elEvento || window.event;
    var coordenadaX = evento.clientX;
    var coordenadaY = evento.clientY;


    if(coordenadaX<654 && coordenadaY<350){
     alert("You are at the left-top");
    }else if(coordenadaX<654 &&coordenadaY>350){
        alert("You are at the left-bottom");
    }else if(coordenadaX>654 && coordenadaY<350){
        alert("You are at the right-top");
    }else {
        alert("You are at the right-bottom");
    }
}

function mouse(elEvento) {
    var evento = elEvento || window.event;
    var nave = document.getElementById("navegador");
    var coordenadaX = evento.clientX;
    var coordenadaY = evento.clientY;
    nave.innerHTML = coordenadaX +", " +coordenadaY;

}
document.onclick = informacion;
document.onmousemove = mouse;


