// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.
//
// Example
// n = 3, so I expect a 3x3 square back just like below as a string:
//
//     +++
//         +++
//             +++


function generateShape(integer) {
    let result = ""
    for (let i = 0; i < integer; i++) {
        if (i === 0) {
            for (let j1 = 0; j1 < integer; j1++) {
                result += "+"
            }
        } else {
            result += "\n"
            for (let j2 = 0; j2 < integer; j2++) {
                result += "+"
            }
        }
    }
    return result
}
