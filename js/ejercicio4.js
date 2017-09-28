/**
 * Created by Eleazar on 9/28/2017.
 */

/**/

var valores = [true, 5, false, "hola", "adios", 2];
var resultado = valores[0]&&valores[2];

function compara() {
    if(valores[4]>valores[3]){
        console.log("La palabra 'adios' es mayor que la palabra 'hola'")
    }else{
        console.log("la palabra 'Hola' es mayor que la palabra 'adios'")
    }
}

function booleanos() {
    console.log("Este valor es: " + valores[0]||valores[2]);
    console.log("Este valor es: "  +resultado );
}

function operaciones() {
    ope1 = valores[1]+valores[5];
    ope2 = valores[1]-valores[5];
    ope3 = valores[1]*valores[5];
    ope4 = valores[1]/valores[5];
    ope5 = valores[1]%valores[5];

    console.log("Las operaciones son: \n" + "Suma: " + ope1 + "\nResta: " + ope2 + "\nMultiplicacion: " + ope3 +
        "\nDivision: " + ope4 + "\nModulo: " + ope5);

}

compara();
booleanos();
operaciones();