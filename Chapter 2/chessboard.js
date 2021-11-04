let size = 8
let iter = 1
for(let x = 0; x < size; x++){
        if(iter % 2 == 0) {
            let hashString = '# '
                console.log(`${hashString.repeat(size)}`)
            }
        if(iter % 2 == 1){
            let hashString = ' #'
            console.log(`${hashString.repeat(size)}`)
        }
    iter++;
}