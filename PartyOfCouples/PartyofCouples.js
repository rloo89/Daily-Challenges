// Coding Challenge

// In a party of N people, each person is denoted by an integer. Couples are represented by the same number. Find out the only single person in the party of couples.


class Solution{
    findSingle(n, arr){
        //code here
        const numberCounterObj = {};
        
        for (let number of arr) {
            if (numberCounterObj[number] === undefined) {
                numberCounterObj[number] = 1;
            } else {
                numberCounterObj[number]++;
            }
        }
        
        for (let numberCounter in numberCounterObj) {
            if (numberCounterObj[numberCounter] % 2 != 0)
                return numberCounter;
        }
        
        return -1;
    }
}