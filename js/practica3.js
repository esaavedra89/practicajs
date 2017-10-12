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
