/**
 * Created by Eleazar on 10/12/2017.
 * Keep going practice with JavaScript
 *
 * por alguna razon, pasar las funciones dateFull() y time() al HTML como <script> no funcionaban, al regresarlas
 * volvieron a funcionar normalmente
 */
/*
function findPosition() {
    var input = document.getElementById("input").value;
    var str = "With JavaScript you can find a position of one letter in an array.";
    var arr = str.split("");
    var print1 = document.getElementById("print");

    if((ci == null || ci.length == 0 || isNaN(ci)){
        alert()
    }else{}

    print1.innerHTML = arr[input];
}
//convert degrees
function convert(degree) {
    var x;
    if (degree == "C") {
        x = document.getElementById("c").value * 9 / 5 + 32;
        document.getElementById("f").value = Math.round(x);
    } else {
        x = (document.getElementById("f").value -32) * 5 / 9;
        document.getElementById("c").value = Math.round(x);
    }
}
*/
//date
 function dateFull() {
     var date = new Date();
     var show = document.getElementById("date");
     var day = document.getElementById("day");
     var d;

     show.innerHTML = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();

     switch(date.getDay()){

         case 0:
             d = "Sunday";
             break;
         case 1:
             d = "Monday";
             break;
         case 2:
             d = "Tuesday";
             break;
         case 3:
             d = "Wednesday";
             break;
         case 4:
             d = "Thursday";
             break;
         case 5:
             d = "Friday";
             break;
         case 6:
             d = "Saturday";

     }

     day.innerHTML = d;
 }

 window.onload = dateFull();

//time
function time() {

    var today = new Date();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var seconds = today.getSeconds();
    minute = checkTime(minute);
    seconds = checkTime(seconds);
    var timeS = document.getElementById("dtime");
    timeS.innerHTML = hour + ":" + minute + ":" + seconds;
    var t = setTimeout(time, 500);

}

function checkTime(i) {
    //add zero in front of numbers <10
    if (i < 10){i = "0" + i};
    return i;
}

window.onload = time();

//regard
function regards() {
    var sayHello = document.getElementById("sayHello");
    var hour = new Date().getHours();
    if(hour<12){
        sayHello.innerHTML = "Good morning";
    }else if(hour>12 && hour<16){
        sayHello.innerHTML = "Good afternoon";
    }else {
        sayHello.innerHTML = "Good evening";
    }
}
window.onload = regards();

//loop 1
function funct() {
    var x = "", i;
    for (i=0; i<5; i++){
        x = x +"The number is "+ i + "<br>";
    }
    document.getElementById("loop1").innerHTML = x;
}

window.onload = funct();

//loop 2
function loop2() {
    var x = "", i;
    for (i=1; i<6; i++){
        x = x + "<h"+i+">" + "Headings" + "</h"+i+">";
        document.getElementById("smallerH").innerHTML = x;
    }
}

window.onload = loop2();

function whi() {
    var text = "";
    var i = 0;
    while(i<10){
        text +="<br>The number is "+i;
        i++;
    }
    document.getElementById("while").innerHTML = text;
}

window.onload = whi();

function forIn() {
    var txt = "";
    var person = {fname:"John", lname:"Doe", age:25};
    var x;
    for (x in person) {
        txt += person[x] + " ";
    }
    document.getElementById("forIn").innerHTML = txt;

}

window.onload = forIn();

function catchError() {
    var demo = document.getElementById("demo");
    try {
        adddlert("Welcome guest!");
    }
    catch(err) {
        document.getElementById("catchError").innerHTML = err.message;
    }
}

window.onload = catchError();

function errorConfirm() {
    var txt= "";
    try {
        adddlert("Welcome guest!");
    }catch (err){
        txt = "There was an error on this page.\n\n";
        txt +="Click OK to continue viewing this page,\n\n";
        txt +="or Cancel to return to the home page.\n\n";
        if(!confirm(txt)){
            document.location.href = "practica3.html";
        }
    }
}


