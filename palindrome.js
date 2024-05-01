// Escriba un programa que solicite una palabra u oración (puede estar en mayúscula, tener espacios y puntuación). Averigua si la oración/palabra es un palíndromo o no. Ignorando la puntuación, los espacios y las letras mayúsculas.


function esPalindromo(frase) {
    // Convertir la frase a minúsculas y eliminar la puntuación y los espacios
    frase = frase.toLowerCase().replace(/[^a-z]/g, '');

    // Verificar si la frase es un palíndromo
    for (let i = 0; i < frase.length / 2; i++) {
        // Comparar el caracter actual con su correspondiente del otro extremo
        if (frase[i] !== frase[frase.length - 1 - i]) {
            // Si los caracteres no coinciden, no es un palíndromo
            return false;
        }
    }
    // Si no se encontraron diferencias, es un palíndromo
    return true;
}

// Solicitar al usuario ingresar una palabra u oración
let input = prompt("Ingresa una palabra u oración:");

// Verificar si la entrada es un palíndromo e imprimir el resultado
if (esPalindromo(input)) {
    console.log("La palabra/u oración ingresada es un palíndromo.");
} else {
    console.log("La palabra/u oración ingresada NO es un palíndromo.");
}