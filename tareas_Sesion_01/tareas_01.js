// minMax([20,4,5,8,99,26])

// function minMax(arr){
//     let minimo = arr[0]
//     let maximo = arr[0]
//     for(let i = 0; i<arr.length; i++){
//         if(minimo > arr[i]){
//             minino = arr[i]
//         }
//         if(maximo < arr[i]){
//             maximo = arr[i]
//         }
//     }
//     return [minimo, maximo]
// }

let lista = [-5,10,30,60,22,37,99, 300]
// let lista = [-5,-3,-30,-60,-22,-37,-99, -300]

console.log(lista);
function numeroMasgrande (lista) {
    let numMayor = 0
    for(let i = 0; i < lista.length; i++){
        if(numMayor < lista[i]){
            numMayor = lista[i];
        }
    }
    console.log("el numero mayor es: " + numMayor);
    return numMayor
}

numeroMasgrande(lista)

// let text = "hola"
// let textInvertido = "";
//     console.log(text);
//     for(let i  = text.length-1; i >= 0; i--){
//         textInvertido += text[i];
//     }

//     console.log("Texto orginal: " + text);
//     console.log("Texto invertido: " + textInvertido);


// function revS(str) {
//     return (str === '') ? '' : revS(str.substr(1)) + str.charAt(0);
//    }

//    console.log(revS("hello"));
















    






