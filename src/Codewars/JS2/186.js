// Return the number (count) of vowels in the given string.
//
//     We will consider a, e, i, o, u as vowels for this Kata (but not y).
//
// The input string will only consist of lower case letters and/or spaces.


function getCount(str) {
    let result = []
    let arr = ["a", "e", "i", "o", "u"]
    str.split("").forEach((el)=> {
        arr.filter(st => st === el && result.push(el))
    })
    return result.length
}