//Escriba un programa que solicite un número entero n . Donde  1 <= n. Resuelve esto usando recursividad.

function imprimirNumeros(n) {
    // Caso base: si n es igual a 1, imprimir 1 y detener la recursión
    if (n === 1) {
        console.log(n);
    } else {
        // Imprimir el número actual y luego llamar a la función recursivamente con n-1
        console.log(n);
        imprimirNumeros(n - 1);
    }
}

// Pedir a usuario ingresar un número entero
let n = parseInt(prompt("Ingresa un número entero mayor o igual a 1:"));

// Verificar si el número ingresado es válido
if (n >= 1) {
    console.log("Imprimir números del " + n + " al 1:");
    imprimirNumeros(n);
} else {
    console.log("El número debe ser mayor o igual a 1.");
}