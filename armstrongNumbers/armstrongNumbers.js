class Solution{
    armstrongNumber(n){
        //code here
        const digits = n.toString().split("");
        
        // const calculatedNum = digits.reduce((sum, elem) => {
        //     const elemInNum = +elem;
        //     return sum + elemInNum * elemInNum * elemInNum;
        // }, 0);
        let sum = 0;
        for (let i = 0; i < 3; i++) {
            const digit = digits[i];
            sum += Math.pow(digit, 3);
        }
        
        return n === sum ? "Yes" : "No";
    }