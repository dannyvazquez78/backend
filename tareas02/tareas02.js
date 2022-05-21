function getMax(array){
    let maxNum = array[0];

    for (let i = 0; i < array.lenght; i++) {
        console.log(array[i]);
        if(array[i] > maxNum)
        console.log(`el elemento ${array[i]} es mas grande que ${maxNum}`);            
        maxNum = array[i]
    } 

    return maxNum;
}

getMax([2,3,4,10])