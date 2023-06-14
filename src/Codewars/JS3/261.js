// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.
//
// Solve("*'&ABCDabcde12345") = [4,5,5,3].
// --the order is: uppercase letters, lowercase, numbers and special characters.
//     More examples in the test cases.


function solve(s) {
    let a = s.match(/[A-Z]/g) === null ? 0 : s.match(/[A-Z]/g).length
    let b = s.match(/[a-z]/g) === null ? 0 : s.match(/[a-z]/g).length
    let c = s.match(/\d/g) === null ? 0 : s.match(/\d/g).length
    let d = s.length - ( a + b + c)
    return [a, b, c, d]
}