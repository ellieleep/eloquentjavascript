function countBs(testMessage){
    let bCount = 0;
    for(let x = 0; x < testMessage.length; x++ ){
        if(testMessage[x] == 'B'){
            bCount++
        }
    }
    return bCount;
}
function countChar(testMessage, char){
    let charCount = 0;
    for(let x = 0; x < testMessage.length; x++ ){
        if(testMessage[x] == char){
            charCount++
        }
    }
    return charCount;
}

console.log(countBs('Banana Balls'))
console.log(countChar('Banana Balls', 'B'))