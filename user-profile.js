/**
 * Escriba un programa que solicite al usuario sus datos: nombre de usuario, edad y una lista de sus películas favoritas. Almacene la información y luego muéstrela en la consola. Tenga en cuenta que el resultado de las películas debe agregar un pequeño mensaje como: 'La película {película} es una de mis favoritas'.
 * 
 * 
 * (x) Definir las variables que pidan datos.
 * (x) Convertir la variable de películas en un arreglo.
 * () Imprimir los datos.
 * () Separar cualquier película e imprimir el mensaje extra.
 */

let nombreUsuario = prompt("Digita tu nombre de usuario:");
let edadUsuario = prompt("Ingresa tu edad:");

// Convertir la edad a un número entero
edadUsuario = parseInt(edadUsuario);

// Solicitar al usuario su lista de películas favoritas
let peliculasFavoritas = prompt("Escribe tus películas favoritas separadas por comas:");

// Dividir la cadena de películas en un array
let listaPeliculas = peliculasFavoritas.split(',');

// Imprimir datos
console.log("Nombre de usuario: " + nombreUsuario);
console.log("Edad: " + edadUsuario);

//Separar e imprimir mensaje extra
console.log("Películas favoritas:");
listaPeliculas.forEach(pelicula => {
    console.log("La película '" + pelicula.trim() + "' es una de mis favoritas.");
});
