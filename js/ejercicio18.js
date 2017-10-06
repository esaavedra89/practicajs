//con el input no funciona, tiene que ser un boton para enviar el formulario
/**
 *impedir ciertos caracteres
 */
/*function permite(elEvento, permitidos) {
var numeros = " 0123456789";
var caracteres = " abcdefghijklmn"+&ntilde + "opqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
var numeros_caracteres = numeros + caracteres;
var teclas_especiales = [8, 37, 39, 46];

switch(permitidos){
    case 'num':
        permitidos = numeros;
        break;
    case 'car':
        permitidos = caracteres;
        break;
    case 'num_car':
        permitidos = numeros_caracteres;
        break;
}

var evento = elEvento ||window.event;
var codigoCaracter = evento.charCode || evento.keyCode;
var caracter = String.fromCharCode(codigoCaracter);

var tecla_especial = false;
for(var i in teclas_especiales) {
    if(codigoCaracter == teclas_especiales[i]) {
        tecla_especial = true;
        break;
    }

}
    return permitidos.indexOf(caracter) != -1 || tecla_especial;
}*/
swal("Hello world!");


function limita(maximoCaracteres) {
    var elemento = document.getElementById("campoTexto");
    var cara = document.getElementById("caracteres");
    cara.innerHTML = maximoCaracteres-elemento.value.length;
    if(elemento.value.length >= maximoCaracteres ) {
        return false;
    }
    else {
        return true;
    }
}

function formulario() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var ci = document.getElementById("cedula").value;
    var cel = document.getElementById("tel").value;
    var correo = document.getElementById("correo").value;
    var radiobutton = document.getElementsByName("pregunta");
    var sexo = document.getElementById("sexo");
    //obtener el valor de la opcion seleccionada
    var sexoValorSeleccionado = sexo.options[sexo.selectedIndex].value;
    //obtener el texto que muestra la opcion seleccionada
    var sexoSeleccionado = sexo.options[sexo.selectedIndex].text;
    var campoTexto = document.getElementById("campoTexto").value;
    var condiciones = document.getElementById("condiciones");
    var informacion = document.getElementById("informacion");
    var valida = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;





    if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
        alert("Casilla de nombre no puede quedar en blanco");
        return false;
    } else if (apellido == null || apellido.length == 0 || /^\s+$/.test(apellido)) {
        alert("Apellido no debe quedar vacio");
        return false;
    } else if (ci == null || ci.length == 0 || isNaN(ci)) {
        alert("Ingrese su numero de CI");
        return false;
    } else if (cel == null || cel.length == 0 || isNaN(cel)) {
        alert("Ingrese su numero telefonico");
        return false;
    } else if (!valida.test(correo)) {
        alert("Ingrese una direccion de correo valida");
        return false;
    } else if (sexoValorSeleccionado == null || sexoValorSeleccionado == 0){
        alert("Debe seleccionar su sexo");
        return false;
    } else if (condiciones.checked == false) {
                alert("Debe aceptar las condiciones para enviar el formulario");
                return false;
            }
            else {

for (var i = 0; i < radiobutton.length; i++) {
    if (radiobutton[i].checked) {
        alert("Su nombre es: " + nombre + " " + apellido + "\n" + "Su CI es: " + ci + "\n" +
            "Su Numero de telefono es: " + cel + "\n" + "Su correo electronico es: " + correo + "\n" +
            "Su estado civil es: " + radiobutton[i].value + "\n" + "Su sexo es: " +sexoSeleccionado + "\nPresentacion: \n"
            + campoTexto + "\nAcepta las condiciones: " + condiciones.checked + "\nQuiero recibir informacion: " + informacion.checked);
            }
        }
    }
}









