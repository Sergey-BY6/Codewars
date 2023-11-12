// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
//
//     For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
//
//     The input will be a lowercase string with no spaces.
//
//     Good luck!


const capitalize = s => {
    let a = ["", ""]
    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
            a[0] += s[i].toUpperCase()
            a[1] += s[i]
        } else {
            a[0] += s[i]
            a[1] += s[i].toUpperCase()
        }
    }
    return a
}