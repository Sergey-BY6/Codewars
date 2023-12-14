// Write a function that takes a list of at least four elements as an argument and returns a list of the middle two or three elements in reverse order.")


const reverseMiddle = arr => {
    let ln = arr.length / 2
    return Number.isInteger(ln)
        ? arr.slice(ln - 1, ln + 1).reverse()
        : arr.slice(ln - 1, ln + 2).reverse()
}