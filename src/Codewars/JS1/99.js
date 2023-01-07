

function digitize(n) {
    return ("" + n).split("").map(t => +t).reverse()
}