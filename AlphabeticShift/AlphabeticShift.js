function AlphabeticShift (input) {
    let outputString = " "; 
    // used to add a letter

    for (let i = 0 ; i < input.length; i++ ) {
        const charCode = input.charCodeAt(i)

        if (String.fromCharCode(charCode) === "z") {
            outputString += "a";
        } else {
            outputString += String.fromCharCode (charCode + 1);
        
        } 
    }

    return outputString
}

console.log(AlphabeticShift("crazy"))

// convert into ASCII and convert back into a letter