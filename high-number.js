//Escribe un programa que solicite 10 números. Usando operadores lógicos y cualquier otra función/estructura de JavaScript que haya visto antes, determine y genere el mayor de esos números.

// Array para almacenar los números ingresados por el usuario
let numeros = [];

// Solicitar al usuario ingresar 10 números
for (let i = 0; i < 10; i++) {
    let numero = prompt("Por favor, ingresa el número " + (i + 1) + ":");
    numeros.push(parseFloat(numero));
}

// Función para encontrar el mayor número en un array
function encontrarMayor(array) {
    let mayor = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i];
        }
    }
    return mayor;
}

// Encontrar el mayor número en el array de números ingresados
let mayorNumero = encontrarMayor(numeros);