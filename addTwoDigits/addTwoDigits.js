// Daily Challenge

// You are giving a two-digit integer n. Return the sum of its digits.

// inputs: N= 29 N = 18 N= 99

// Output=   N= 11 N = 9. N= 18

// Create a function that takes 1 parameter (number) , separates it and then adds it together.


function addTwoDigits (input) {
    const stringNum = input.toString();
    const splitArray = stringNum.split("");
    let sum = 0; // we create this because we want to the catch the value in each iteration
    for(let i = 0; i < splitArray.length; i++){
        const integerNum = parseInt(splitArray[i])
        sum += integerNum 
    }
    return  sum
}

console.log(addTwoDigits(29))

//  when it loops in the beginning sum is 0, 2nd time it loops, it becomes 2 (assuming that the N is 29) and then the 3rd time becomes 9.