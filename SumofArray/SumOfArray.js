// Given an array of N integers. 
// Your task is to print the sum of all of the integers.

function sumOfArray(inputArray, number){

    let numSum = 0;

    // for (let i = 0; i < inputArray.length; i++){
    //     // numSum += inputArray[i]

    //     numSum = numSum + inputArray[i]
    // }

    inputArray.forEach((kimchi) => {
        numSum += kimchi;
    }) 

    return numSum
}

console.log(sumOfArray([1,2,3,4,5,6]));

//  console.log the function means calling the function