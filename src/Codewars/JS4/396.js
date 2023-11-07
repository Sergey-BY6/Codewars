// Given any number of boolean flags function should return true if and only if one of them is true while others are false. If function is called without arguments it should return false.
//
// onlyOne() --> false
// onlyOne(true, false, false) --> true
// onlyOne(true, false, false, true) --> false
// onlyOne(false, false, false, false) --> false




function onlyOne() {
    let a = 0
    for (key in arguments) {
        if (arguments[key])  a+=1
    }
    return a === 1
}