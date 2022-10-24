
//  Write a function that returns the sum of two numbers.

//  Example For param1 = 1 and param2 = 2, the output should be add(param1, param2) = 3.


function sumOfNumbers (param1: number, param2: number) : number {
    return param1 + param2
}

console.log (sumOfNumbers(1,2));



// Write a function that returns the sum of all numbers regardless of # of params.
// Learning take away: spread operators.


function sumOfAllNums(...nums: number[]): number {
    let sum = 0;
    for (let i = 0; i < nums.length; i++)
    sum += nums[i];
    return sum;
}

console.log(sumOfAllNums(1,2,3,4,10))