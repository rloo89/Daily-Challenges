
function adjacentElementsProduct (inputArray){
    
    let largestProduct = inputArray[0]*inputArray[1] 

    for (let i = 1; i < inputArray.length - 1; i++) {
        const currentProduct = inputArray[i] * inputArray[i+1]
        console.log(currentProduct)
        if (currentProduct > largestProduct) {
            largestProduct = currentProduct
        }
    }

    return largestProduct 
}

console.log(adjacentElementsProduct([3,6,-2,-5,7,3]));