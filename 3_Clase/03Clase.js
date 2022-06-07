//Vamos a crear nuestra propia funcion map usando higher order functions
// const arreglo1 = [1,2,5,10,20]

// function map(array, callback) {
//     const resultados =[]
//     for ( let i = 0; i < array.lenght; i++) {
//         const elemento = array[i]

//         const resultado = callback(elemento)

//         resultados.push(resultado)
//     }
//     return resultados;
// }

// const arreglo = [1,2,5,10,20]

// function negativo( numero) {
//     return numero * -1;
// }

// const resultados = map(arreglo, negativo)
// console.log(resultados);

// const otrosResultados = map(arreglo, x => x+10)
// console.log(otrosResultados);


const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 9);

console.log(result);

/*
  Vamos a crear nuestra propia funcion map
  usando higher-order functions
  La firma de map se verá así:
​
  map(array, callback) => array
*/
​
​
/*
  Vamos a recibir un arreglo y un callback
  Vamos a ejecutar el callback a cada elemento del arreglo
  y el resultado lo vamos a guardar en otro arreglo
*/
function map(array, callback) {
  const resultados = [];
​
  for (let i = 0; i < array.length; i++) {
    const resultado = callback(array[i]);
    resultados.push(resultado)
  }
​
  return resultados;
}
​
​
// Vamos a usar nuestro map
​
const arreglo = [1, 2, 5, 10, 20];
​
​
function negativo(numero) {
  return numero * -1;
}
​
const resultados = map(arreglo, negativo)
console.log(resultados)
​
const otrosResultados = map(arreglo, x => x+10)
console.log(otrosResultados)