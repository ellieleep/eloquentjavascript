function arrayToList(arr){
    for(let x = 0; x < Math.floor(arr.length/2); x++){
        let ele = arr[x];
        arr [x] = arr[arr.length-1-x];
        arr[arr.length-1-x] = ele;
    }
    for(let item of arr){
        let arrList = {value: item, rest: arrList}
    }
    console.log(list)
}
console.log(arrayToList([10, 20]));