// In this Kata you should fix/create a program that returns the following values:
//
//     false/False if either a or b (or both) are not numbers
// a % b plus b % a if both arguments are numbers



const myFirstKata = (a, b) => typeof a !== "number" || typeof b !== "number" ? false : a % b + b % a