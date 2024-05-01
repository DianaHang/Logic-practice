//Escribe un programa que pregunte a un usuario la cantidad de segundos necesarios hasta que se ejecute una alarma (mensaje) junto con un texto para mostrar una vez que hayan pasado esos segundos en tiempo real.
//Ejemplo de resultado : "Hora de acostarse después de 10 segundos".

// Pedir segundos hasta que se ejecute la alarma
let segundos = prompt("Digita la cantidad de segundos para la alarma:");

// Convertir a entero
segundos = parseInt(segundos);

// Calcular la hora actual en milisegundos
let horaActualEnMilisegundos = Date.now();

// Calcular la hora de la alarma en milisegundos
let horaAlarmaEnMilisegundos = horaActualEnMilisegundos + (segundos * 1000);

// Mensaje con el temporizador
setTimeout(function() {
    console.log("¡Hora de acostarse después de " + segundos + " segundos!");
}, 
segundos * 1000);