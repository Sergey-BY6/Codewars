// Given a string, you progressively need to concatenate the first letter from the left and the first letter to the right and "1", then the second letter from the left and the second letter to the right and "2", and so on.
//
//     If the string's length is odd drop the central element.
//
// For example:
//
//     charConcat("abcdef")    == 'af1be2cd3'
// charConcat("abc!def")   == 'af1be2cd3' // same result



const charConcat = (string) => {
    let result = ""
    let length = Math.floor(string.length / 2)
    let strRe = string.length % 2 === 0 ? string : string.slice(0, length) + string.slice(length + 1)
    let a = strRe.slice(0, strRe.length / 2)
    let b = strRe.slice(strRe.length / 2).split("").reverse().join("")

    for (let i = 0; i < strRe.length / 2; i++) {
        if (i === 0) result += (a[i] + b[i] + "1")
        else result += (a[i] + b[i] + +(i + 1))
    }
    return result
}