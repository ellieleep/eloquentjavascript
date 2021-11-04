function multiplier(factor) {
    const equation = (number) => {
        return number * factor;
    }
    return equation
}

function multiplierPrime(factor){
    return number => number * factor;
}

const twice = multiplier(2);
console.log(twice(5));