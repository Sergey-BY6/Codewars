// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
//
//     Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

function replace(s) {
    return s.split("").map(el =>
        el === "a" ||
        el === "e" ||
        el === "i" ||
        el === "o" ||
        el === "u" ||
        el === "A" ||
        el === "E" ||
        el === "I" ||
        el === "O" ||
        el === "U"
            ? "!"
            : el).join("")
}