/* let nombre = prompt("Escriba su nombre:");
let mensaje;
mensaje = "Bienvenido " + nombre;
document.getElementById("visor").innerHTML = mensaje; */
import {sumar} from "./operaciones.js";

let txtdato1;
let txtdato2;
let btnSumar;
let divResultado;

onload = () => setup();

function setup() {
    /* const total = sumar(2,2)
    document.getElementById("visor").innerHTML = 'Total: ' + total; */
    txtdato1 = document.getElementById("txtdato1");
    txtdato2 = document.getElementById("txtdato2");
    btnSumar = document.getElementById("btnSumar");
    divResultado = document.getElementById("resultado");

    btnSumar.addEventListener("click", handleSumar)
}

function handleSumar() {
    const dato1 = parseInt(txtdato1.value);
    const dato2 = parseInt(txtdato2.value);
    const resultado = sumar(dato1, dato2);
    divResultado.innerHTML = "Resultado: " + resultado;
}