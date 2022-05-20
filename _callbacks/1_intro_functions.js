// declaracion de la funcion
// Donde describes lo que hace la funcion, como se llama  y que recibe

function saludar (nombre){
    return `Hola ${nombre}, saludos`
}
//invocacion de la funcion (llamada, usar)
const saludo = saludar("Daniel")
console.log(saludo);
//solo cambia, el parametro de la funcion
const saludo2 = saludar("Nestor")
console.log(saludo2);

const funcion = saludar;
console.log(funcion("jose"));
console.log(funcion("Danny"));
