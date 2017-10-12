/**
 * Created by Eleazar on 10/12/2017.
 * Keep going practice with JavaScript
 */

function findPosition() {

    var input = document.getElementById("input").value;
    var str = "With JavaScript you can find a position of one letter in an array.";
    var arr = str.split("");
    var print1 = document.getElementById("print");

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

//date
 function dateFull() {
     var date = new Date();
     var show = document.getElementById("date");

     show.innerHTML = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
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
    if (i < 10){i = "0" + i};//add zero in front of numbers <10
    return i;
}

window.onload = time();