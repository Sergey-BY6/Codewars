// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.
//
//     For Example:
//
//     [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
//     , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
//     , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]

function sumOfMinimums(arr) {
    return arr.map(el => Math.min(...el)).reduce((acc, value) => acc + value, 0)
}
