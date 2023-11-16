// Do you remember the old mobile display keyboards? Do you also remember how inconvenient it was to write on it?
//     Well, here you have to calculate how many keystrokes you have to do for a specific word.
//
//     This is the layout:
//
//
//     Given a string, return the number of keystrokes necessary to type it. You can assume that the input will entirely consist of characters included in the mobile layout (lowercase letters, digits, and the symbols * and #).
//
// Examples
// "*#"       =>  2 (1 + 1)
// "123"      =>  3 (1 + 1 + 1)
// "abc"      =>  9 (2 + 3 + 4)
// "codewars" => 26 (4 + 4 + 2 + 3 + 2 + 2 + 4 + 5)


let a = [
    ["2", "a", "b", "c"],
    ["3", "d", "e", "f"],
    ["4", "g", "h", "i"],
    ["5", "j", "k", "l"],
    ["6", "m", "n", "o"],
    ["7", "p", "q", "r", "s"],
    ["8", "t", "u", "v"],
    ["9", "w", "x", "y", "z"],
    ["1"], ["*"], ["0"], ["#"]
]


const mobileKeyboard = str => {
    let result = []
    for (let i = 0; i < str.length; i++) {
        for (let y = 0; y < a.length; y++) {
            if (a[y].indexOf(str[i]) > -1) {
                result.push(a[y].indexOf(str[i]) + 1)
                break
            }
        }
    }
    return str.length < 1 ? 0 : result.reduce((acc, value) => acc + value)
}