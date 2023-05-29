// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.
//
// Note that the number will always be non-negative (>= 0).


function insertDash(num) {
    let a = num.toString().split("")
    let b = a.map((el, index) => (a[index] % 2 === 0))
    let result = ""
    for (let i = 0; i < b.length; i++) {
        !b[i] && !b[i + 1] ? (result += a[i] + "-") : result += a[i]
    }
    return result[result.length - 1] === "-" ? result.slice(0, result.length - 1) : result
}