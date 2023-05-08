// Write a function that accepts two numbers a and b and returns whether a is smaller than, bigger than, or equal to b, as a string.
//
// (5, 4)   ---> "5 is greater than 4"
// (-4, -7) ---> "-4 is greater than -7"
// (2, 2)   ---> "2 is equal to 2"
// There is only one problem...
//
// You cannot use if statements, and you cannot use the ternary operator ? :.
//
// In fact the word if and the character ? are not allowed in your code.


function noIfsNoButs(a, b) {
    let result = []
    let smaller = `${a} is greater than ${b}`
    let greater = `${a} is smaller than ${b}`
    let equal = `${a} is equal to ${b}`
    a > b && result.push(smaller)
    a < b && result.push(greater)
    a === b && result.push(equal)
    return result.toString ()
}