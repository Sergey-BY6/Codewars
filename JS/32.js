
String.prototype.toJadenCase = function () {
let a = this.split (" ")
let result = ""
for (let i of a) {
result += i[0].toUpperCase() + i.slice (1, i.length) + " "
}
let b = result.slice (0, result.length-1)
return b
};
