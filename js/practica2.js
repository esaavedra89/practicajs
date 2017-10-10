/**
 * Created by Eleazar on 10/10/2017.
 */
//cambiar texto en HTML
function change() {
    var change = document.getElementById("change");
    var print = document.getElementById("print");

    if(print.style.display == "none"){
        print.style.display = "block";
        print.innerHTML = "Hello world, I can change the HTML content, I can be so powerful";
        change.innerHTML = "JS cna change HTML content";
    }else if(print.style.display == "" || print.style.display == "block") {
        print.style.display = "none";
        change.innerHTML = "JAVASCRIPT CAN CHANGE HTML CONTENT";
    }

}
//cambiar imagenes dentro del html
//es necesario dejar la variable img como variable pivada, de otra manera no funciona
function turnOn(){
    var img = document.getElementById("myImg");
    img.src='img/turn-on.jpg';
}

function turnOff() {
    var img = document.getElementById("myImg");
    img.src ='img/turnoff.jpg';
}

//change CSS styles
function changeCSS() {
    var box_1 = document.getElementById("div-1");
    var box_2 = document.getElementById("div-2");
    var box_3 = document.getElementById("div-3");
        box_1.className = "box1";
        box_2.className = "box2";
        box_3.className = "box3";
}
function hideElements() {
    var hide = document.getElementById("hide");
    if(hide.style.display=="" || hide.style.display=="block"){
        hide.style.display ="none";
    }else {hide.style.display=="block"}
}