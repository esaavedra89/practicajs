/**
 * Created by Eleazar on 10/18/2017.
 */

//Accces a JSON using dot notation

var myJ, x;
myJ = {
    "name": "Eleazar",
    "last": "Saavedra",
    "age": 28,
    "car": null
};

x = myJ.name;
document.getElementById("myJ").innerHTML = x;

function selectProperty() {
    var select = document.getElementById("select-property");
    var printProperty = document.getElementById("printProperty");
    var listValorSelected = select.options[select.selectedIndex].value;
    //obtener el texto que muestra la opcion seleccionada
    var listTextSelected = select.options[select.selectedIndex].text;
    var d;

    switch(listTextSelected){
        case "Options":
            swal("You must select one option");
            return false;

        case "Name":
            printProperty.innerHTML = myJ.name;
            break;

        case "LastName":
            printProperty.innerHTML = myJ.last;
            break;
        case "Age":
            printProperty.innerHTML = myJ.age;
            break;
        case "Car":
            printProperty.innerHTML =  myJ.car+"<br/> He don't have a car";
    }

}

function loopProperty() {
    var loop = {
        "name":"Milka",
        "lastname":"Chulina",
        "kind":"dog",
        "age":4
    };
    for (x in loop){
        document.getElementById("loopProperty").innerHTML += x + "<br>";
    }

}

window.onload = loopProperty();

function bracketProp() {
    var loop2 = {
        "name":"Milka",
        "lastname":"Chulina",
        "kind":"dog",
        "age":4
    };
    for (x in loop2){
        document.getElementById("bracketProp").innerHTML += loop2[x] + "<br>";
    }
}

window.onload = bracketProp();

function nestedJS() {
    var nestedJson = {
        "name":"Milka",
        "lastname":"Chulina",
        "kind":"dog",
        "age":{
            "age1":"3",
            "age2":"4",
            "age3":"5"
        }
    }
    document.getElementById("nestedJS").innerHTML += nestedJson.age.age1 +"<br>";
    document.getElementById("nestedJS").innerHTML += nestedJson.age["age1"];
}
window.onload = nestedJS();

function modifyJS() {
    var modify, i , x = " ";
    modify = {
        "name":"John",
        "age":30,
        "cars":{
            "car1":"Ford",
            "car2":"BMW",
            "car3": "Fiat"
        }
    }

    modify.cars.car2 = "Mercedes";

    for (i in modify.cars){
        x += modify.cars[i]+"<br>";
    }
    document.getElementById("modifyJS").innerHTML = x;
}
window.onload = modifyJS();