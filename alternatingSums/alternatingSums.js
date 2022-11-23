function alternatingSums (newArray) {
    let weightOne = 0;
    let weightTwo  = 0;

    newArray.forEach((element, index) =>{
        if(index % 2 === 0) {  
            weightOne += element;
        } else {
            weightTwo += element;
        }
        
    })

    return [weightOne,weightTwo]
}


console.log(alternatingSums([50, 60, 60, 45, 70]));

//    if(index % 2 === 0) thi is used as an approach to get into two groups. or  (i % 3)

//  for (let i = 0 ; i < newArray.length; i++) {

// }