// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.
//
//     Good luck!



const solve = s => {
    let a = ["a", "e", "i", "o", "u"]
    return Math.max(...s.split("").map(el => a.filter(ek => ek === el)[0] !== undefined ? 1 : "_")
        .join("").match(/\d+/g).map(el => el.length))
}


