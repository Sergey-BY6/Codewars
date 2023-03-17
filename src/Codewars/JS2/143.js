// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.
//
//     Return as a number.us = (isBusy) => ({status: isBusy ? "busy" : "available"})

function divCon(x){
    let resultNumber = 0
    let resulText = 0
    for (let i = 0; i < x.length; i++) {
        typeof x[i] ===  "number" ? (resultNumber += x[i]) : (resulText += (+x[i]))
    }
    return resultNumber - resulText
}
