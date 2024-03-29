
// Given the triangle of consecutive odd numbers:
//
//     1
// 3     5
// 7     9    11
// 13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
//
// 1 -->  1
// 2 --> 3 + 5 = 8


function rowSumOddNumbers(n) {

    let counter1 =  1 //1723
    let result = 2

    for (let i = 1; i <n ; i++) {
        counter1 += (result)
        result +=2
    }

    let result2 = counter1
    for (let i = 0; i < n-1; i++) {
        counter1 += (result2 += 2)
    }
    return counter1
    // return n*n*n
}

console.log(rowSumOddNumbers(42))