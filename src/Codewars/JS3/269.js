// Please write a function that sums a list, but ignores any duplicate items in the list.
//
//     For instance, for the list [3, 4, 3, 6] , the function should return 10.


function sumNoDuplicates(numList) {
    let obj = {}
    let result = 0
    for (let i = 0; i < numList.length; i++) {
        if (obj[numList[i]]) {
            obj[numList[i]] +=1
        } else {
            obj[numList[i]] = 1
        }
    }
    for (const key in obj) {
        if (obj[key] === 1) {
            result += +key
        }
    }
    return result
}

