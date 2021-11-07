function reverseArray(arr){
    let reversedArray = [];
    for(let x = arr.length-1; x >= 0; x--) {
        reversedArray.push(arr[x]);
    }
    return reversedArray;
}
function reverseArrayInPlace(arr){
        for(let x = 0; x < Math.floor(arr.length/2); x++){
            let ele = arr[x];
            arr [x] = arr[arr.length-1-x];
            arr[arr.length-1-x] = ele;
    }
}
console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);