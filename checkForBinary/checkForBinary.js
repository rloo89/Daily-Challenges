

function isBinary(str) {
    for (let i = 0; i < str.length; i++){
        if(str[i] !== "0" && str[i] !== "1") {
            return 0 // return means getting out of the function
        }
    }
    return 1
}

console.log(isBinary("1"));