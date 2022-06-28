function fakeBin(x) {
    let result = ""
    for (let a of x) {
    a<=4 ? result += 0: result += 1
    }
    return result
}
