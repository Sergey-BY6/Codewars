// An element in an array is dominant if it is greater than all elements to its right. You will be given an array and your task will be to return a list of all dominant elements. For example:
//
//     solve([1,21,4,7,5]) = [21,7,5] because 21, 7 and 5 are greater than elments to their right.
// solve([5,4,3,2,1]) = [5,4,3,2,1]
//
// Notice that the last element is always included. All numbers will be greater than 0.
// More examples in the test cases.


const solve = arr => {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(arr.slice(i + 1).map(el => arr[i] > el ? 1 : 0))
    }
    let a = result.map((el, index) => el.filter(e => e === 0).length > 0 ? true : index).filter(el => typeof el === "number")

    let resultFinally = []
    for (let i = 0; i < a.length; i++) {
        resultFinally.push(arr[a[i]])
    }
    return resultFinally
}