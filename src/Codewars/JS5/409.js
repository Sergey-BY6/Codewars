// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.
//
//     For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.
//
//     More examples in the test cases.
//
//     Good luck!
//
//     If you like this Kata, please try:


const repeats = arr => {
    let a = arr.sort((a, b) => a > b ? 1 : -1)
    let b = a.filter((e, index) => e !== a[index - 1])
    let c = a.filter((e, index) => e === a[index - 1])
    for (let i = 0; i < c.length; i++) {
        let y = b.findIndex(el => el === c[i])
        b.splice(y, 1)
    }
    return b.reduce((acc, value) => acc + value)
};