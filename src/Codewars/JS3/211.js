// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.
//
// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.
//
//     Example:
//
// solution('XXI'); // should return 21
// Help:
//
//     Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
// Courtesy of rosettacode.org


function solution(roman) {
    let obj = {i: 1, v: 5, x: 10, l: 50, c: 100, d: 500, m: 1000}
    let result = 0
    const a = roman.toLowerCase().split("")
    for (let i = 0; i < a.length; i++) {
        if (obj[a[i]] < obj[a[i + 1]]) {
            result += obj[a[i + 1]] - obj[a[i]]
            i += 1
        } else {
            result += obj[a[i]]
        }
    }
    return result
}
