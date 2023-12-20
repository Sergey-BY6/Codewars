// When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.
//
//     Example:
//
// 'red white blue' //returns string value of white
//
// 'red blue gold' //returns gold


const longestWord = stringOfWords => {
    let result = ''
    stringOfWords.split(" ").forEach(el => {
        if (el.length >= result.length) {
            result = el
        }
    })
    return result
}
