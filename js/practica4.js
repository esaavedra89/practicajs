/**
 * Created by Eleazar on 10/16/2017.
 */
//Build a constructor
function person(first, last, age, eye) {
    this.first = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;

}

var myFather = new person("Eleazar", "Saavedra", 66, "black");
var myMother = new person("Delvalle", "Hernandez", 60, "black");

document.getElementById("constructor").innerHTML =
    "My father is: "+myFather.age + ". My mother is: "+myMother.age;


function myLovers(first, last, age, kind) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.kind = kind;
}

var myNiece = new myLovers("Emma", "Romero", 2, "Human");
var myPet = new myLovers("Milka", "Chulina", 4, "Dog" );

document.getElementById("myLovers").innerHTML = "My niece is :"+myNiece.firstName +" "+myNiece.lastName+", she is "+myNiece.age
    +" years old, and she is a baby "+myNiece.kind+".<br>"+"My other love is my pet, it's name is : "+myPet.firstName
    +" "+myPet.lastName+", she is "+myPet.age+" years old and she is a "+myPet.kind;
;

function showDetail() {
    var list = document.getElementById("list-persons");
    var listValorSelected = list.options[list.selectedIndex].value;
    //obtener el texto que muestra la opcion seleccionada
    var listSeleccionado = list.options[list.selectedIndex].text;
    var printDetail = document.getElementById("printDetail");

    if(listValorSelected == null || listValorSelected == 0){
        swal("You must select one option");
        return false;
    }else if(listValorSelected == 1){
        printDetail.innerHTML = "Eleazar Saavedra Padre";

    }else if (listValorSelected==2){
        printDetail.innerHTML = "Delvalle Hernandez ";

    }
    else if (listValorSelected==3){
        printDetail.innerHTML = "Jose Saavedra";

    }
    else if (listValorSelected==4){
        printDetail.innerHTML = "Yessica Saavedra";
    }
    else{
        printDetail.innerHTML = "Eleazar Saavedra hijo";
    }
}