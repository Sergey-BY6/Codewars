// When provided with a letter, return its position in the alphabet.
//
// Input :: "a"
//
// Ouput :: "Position of alphabet: 1"



let a = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",
    "v", "w", "x", "y", "z"]

const position = (letter) => `Position of alphabet: ${a.indexOf(letter) + 1}`