
//You need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'.
//If there are one or two good ideas, return 'Publish!',
//if there are more than 2 return 'I smell a series!'.
//If there are no good ideas, as is often the case, return 'Fail!'.

// console.log(publistIt(["good", "bad", "bad", "bad", "bad"]))

console.log(publishIt(["good", "bad", "bad", "bad", "bad"]));


// input [" Good etc"]
// output: "Publish!"

function publishIt(array) {

    //Create a counter
    let goodCount = 0;

    //Loop through each item of the array
    array.forEach((item)) => {
        // if good, increase counter
        if (item === "good") {
            goodCount ++
        }
        // if not, do nothing

 /* another method, using const foundGood = array.filter(item => {
        return item === "good"
    }) 
    */ 

    }}

    //Check the counter
    //If there are one or two good ideas, return 'Publish!',
    if (goodCount > 0 && goodCount <= 2) {
        return "Publish!";
    // //if there are more than 2 return 'I smell a series!'.
    else if (goodCount > 2) {
        return "I smell a series!";

    

//If there are no good ideas, as is often the case, return 'Fail!'.
else {
    return "Fails";
}
    } 
    }




   