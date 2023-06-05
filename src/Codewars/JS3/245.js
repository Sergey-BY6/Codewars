// Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.
//
//     Example:
// For input: [3, 4, 4, 3, 6, 3]
//
// remove the 3 at index 0
// remove the 4 at index 1
// remove the 3 at index 3
// Expected output: [4, 6, 3]
//
// More examples can be found in the test cases.


function solve(arr) {
    let result = {}
    let result2 = []
    let result3 = []
    for (let i = 0; i < arr.length; i++) {
        if(result[arr[i]] === undefined) {
            result[arr[i]] = []
            result[arr[i]].push(i)
        }
        else {
            result[arr[i]].push(i)
        }
    }
    for (key in result) {
        result2.push(result[key][result[key].length - 1])
    }
    result2.sort()
    for (let i = 0; i < arr.length; i++) {
        result2.includes(i) && result3.push(arr[i])
    }
    return result3
}