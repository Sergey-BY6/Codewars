// Nickname Generator
//
// Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.
//
//     If the 3rd letter is a consonant, return the first 3 letters.
//
// nickname("Robert") //=> "Rob"
// nickname("Kimberly") //=> "Kim"
// nickname("Samantha") //=> "Sam"
// If the 3rd letter is a vowel, return the first 4 letters.
//
// nickname("Jeannie") //=> "Jean"
// nickname("Douglas") //=> "Doug"
// nickname("Gregory") //=> "Greg"
// If the string is less than 4 characters, return "Error: Name too short".


let arr = ["a", "e", "o", "u", "i"]

const nicknameGenerator = (name) => {
    if (name.length < 4) return 'Error: Name too short'
    return arr.filter(el => el === name[2])[0] ? name.slice(0, 4) : name.slice(0, 3)
}