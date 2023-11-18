// Given a string, return a new string that has transformed based on the input:
//
//     Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
//     Note: You will have to handle multiple spaces, and leading/trailing spaces.
//
//     For example:
//
//     "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.


const stringTransformer = str => {
    let arr = str.split(" ")
    let result = []
    for (let i = 0; i < arr.length; i++) {
        result[i] = ""
        arr[i].split("").forEach(el => {
            if (el === el.toUpperCase()) {
                result[i] += el.toLowerCase()
            } else {
                result[i] += el.toUpperCase()
            }
        })
    }
    return result.reverse().join(" ")
}