// In this kata you will be given a sequence of the dimensions of rectangles ( sequence with width and length ) and circles ( radius - just a number ).
// Your task is to return a new sequence of dimensions, sorted ascending by area.
//
//     For example,
//
// const array = [ [4.23, 6.43], 1.23, 3.444, [1.342, 3.212] ]; // [ rectangle, circle, circle, rectangle ]
// sortByArea(array) => [ [ 1.342, 3.212 ], 1.23, [ 4.23, 6.43 ], 3.444 ]

function sortByArea(array) {
    let a = array.map((el, index) => typeof el === "number" ? [index, el * el * 3.14] : [index, el[0] * el[1]]).sort((a,b,index) => a[1] - b[1])
    let result = []
    for (let i = 0; i < a.length; i++) {
        result.push(array[a[i][0]])
    }
    return result
}