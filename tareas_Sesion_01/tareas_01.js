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

let lista = [5,10,30,60,22,37,99]
let numMayor = 0
console.log(lista);
function numeroMasgrande (lista) {
    for(let i = 0; i < lista.length; i++){
        if(numMayor < lista[i]){
            numMayor = lista[i];
        }
    }
    console.log("el numero mayor es: " + numMayor);
    return numMayor
}

numeroMasgrande(lista)


    






