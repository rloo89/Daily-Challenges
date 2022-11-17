// You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.



// Example

// For inputArray = [1, 1, 1], the output should be arrayChange(inputArray) = 3.

// Input/Output

// [time limit] 4000ms (js)
// [input] array.integer inputArray
// Guaranteed constraints:

// 3 ≤ inputArray.length ≤ 105,

// -105 ≤ inputArray[i] ≤ 105.

// [output] integer
// The minimal number of moves needed to obtain a strictly increasing sequence from inputArray. It's guaranteed that for the given test cases the answer always fits signed 32-bit integer type.



function arrayChange(inputArray) {
    const copiedArray = [...inputArray];
    let minMoves = 0;

    for (let i = 0; i < copiedArray.length - 1; i++) {
        const currentMoves = copiedArray[i] - copiedArray[i + 1] + 1;
        copiedArray[i + 1] = copiedArray[i + 1] + currentMoves;
        minMoves += currentMoves;
    }

    return minMoves;
}

console.log(arrayChange([1, 1, 1]));
console.log(arrayChange([3, 0, 1]));