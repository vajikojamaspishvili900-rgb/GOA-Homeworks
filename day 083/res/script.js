const countingLowerAndUpper = (text) => {
    let counting = {
        lower: 0,
        upper: 0
    }
    
    for(let i of text){
        if(i.toLowerCase() !== i.toUpperCase()){
            if(i === i.toLowerCase()){
                counting.lower++
            }else if(i === i.toUpperCase()){
                counting.upper++
            }
        }
    }
    return counting
    
}

export default countingLowerAndUpper


/*
ამ ფუნქციის მეორე ფაილში გადმოტანა:

import countingLowerAndUpper from "./helper.js";

console.log(countingLowerAndUpper("This is GOA-s Group"));
*/

