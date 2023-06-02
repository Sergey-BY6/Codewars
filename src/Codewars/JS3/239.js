// This time no story, no theory. The examples below show you how to write function accum:
//
//     Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.



function accum(s) {
    let a = s.split("")
    let b = []
    a.forEach((el, index) => {
        b.push(el.toUpperCase())
        for (let i = 1; i <= index; i++) {
            b.push(el.toLowerCase())
        }
        b.push("-")
    } )
    return b.join("").slice(0,b.length - 1)
}