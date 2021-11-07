function range(start, end, step= 1){
    let rangeArray = [];
    if(step > 0) {
        for (let i = start; i <= end; i += step) {
            rangeArray.push(i);
        }
    }
    else{
        for (let y = start; y >= end; y -= -step) {
            rangeArray.push(y);
        }
    }
    return rangeArray;
}

function sum(arrayToSum){
    let sum = 0;
    for(let z = 0; z < arrayToSum.length; z++){
        sum += arrayToSum[z]
    }
    return sum
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));