// Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
//     For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']


function spacey(array) {
    let result = []
    array.forEach((el, index) => result.length === 0 ? result.push(el) : result.push(result[index - 1] + el))
    return result
}