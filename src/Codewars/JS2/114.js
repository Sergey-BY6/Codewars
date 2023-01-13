function addLength(str) {
    let array = str.split(" ")
    let result = []
    for (let i = 0; i < array.length; i++) {
        result.push(array[i] + " " + array[i].length)
    }
    return result
}