// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

function almostIncreasingSequence (inputArray) {
    let isFirstTimeDecrease = true;

    for( let i = 0; i < inputArray.length - 1 ; i++){
        if(inputArray[i + 1] <= inputArray[i]) {
            if(isFirstTimeDecrease === true) {
                isFirstTimeDecrease = true;
            } else {
                return false
            }
        }
    }

    return true;
}

console.log(almostIncreasingSequence([1,0,4]));
