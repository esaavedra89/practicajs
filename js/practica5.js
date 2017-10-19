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
    //obtener el texto que muestra la opcion seleccionada
    var listTextSelected = select.options[select.selectedIndex].text;

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

//How to loop through all properties in a JSON object
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
//Use bracket notation to access the property values.
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
//How to access nested JSON objects.
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
//How to modify values in a JSON object
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
//Access an array value of a JSON object.
function arrayJS() {
    var myArray, x;
    myArray = {
        "name":"John",
        "age":"30",
        "cars":["Ford", "BMW", "Fiat"]
    };
    x = myArray.cars[0];
    document.getElementById("arrayJS").innerHTML = x;
}

window.onload = arrayJS();

//Looping through an array using a for in loop
function loopingJS() {
    var loopJS, i; x = " ";
    loopJS = {
        "name":"John",
        "age":"30",
        "cars":["Ford", "BMW", "Fiat"]
    };
    for(i in loopJS.cars ){
    x += loopJS.cars[i]+"<br>";
    }
    document.getElementById("loopingJS").innerHTML = x;
}

window.onload = loopingJS();

//Loopin through an array using a for loop
function forJS() {
    var forJS, i, x = " ";
    forJS = {
        "name":"John",
        "age":"30",
        "cars":["4Runner", "Grand Marquis", "Camry"]
    };
    for(i=0; i<forJS.cars.length; i++){

        x += forJS.cars[i]+"<br>";
    }
    document.getElementById("forJS").innerHTML = x;
}

window.onload = forJS();

//Looping through arrays inside arrays.
function arrayArray() {
var obj, i, j, x = " ";
    obj = {
        "name":"Delvalle",
        "age":58,
        "sons":[
            {"name":"Jose", "cars":["Corolla", "Malibu", "Caprice"]},
            {"name":"Yessica", "cars":["Lancer", "Malibu", "Laser"]},
            {"name":"Eleazar", "cars":["Malibu", "Corolla", "Laser"]}
        ]
}
for (i in obj.sons){
        x +="<h4>"+ obj.sons[i].name + "</h4>";
        for (j in obj.sons[i].cars){
            x += obj.sons[i].cars[j]+ "</br>";
        }
    }
    document.getElementById("arrayArray").innerHTML = x;
}
window.onload = arrayArray();

//How to modify an array value of a JSON object.
function modArray() {
    var modArray, i, x = " ";
    modArray = {
        "name":"Daniela",
        "age":29,
        "neighbors":["Patricia", "Yaida", "Adriana"]
    };
    modArray.neighbors[2] ="Maria";

    for(i in modArray.neighbors){
        x +=modArray.neighbors[i] + "</br>"
    }

    document.getElementById("modArray").innerHTML = x;
}

window.onload = modArray();

//How to delete properties of an array.
function delArray() {
    var delArray, i, x = " ";
    delArray = {
        "name":"Daniela",
        "age":29,
        "neighbors":["Patricia", "Yaida", "Adriana"]
    };
    delete delArray.neighbors[0];
    for (i in delArray.neighbors){
        x += delArray.neighbors[i] + "</br>";
    }
    document.getElementById("delArray").innerHTML = x;
}

window.onload = delArray();

//Create Object from JSON String
function milka() {

var milka = JSON.parse('{"name":"Milka","age":5,"city":"Maturín"}');
document.getElementById("createJS").innerHTML = milka.name +"," +milka.age;
}
window.onload = milka();
