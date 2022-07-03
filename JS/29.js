function reverseWords(str) {
let a = str.split (" ")
let result = ""
for (let i of a) {
result += (i.split("").reverse().join("")) + " "
}
return result.slice (0, result.length-1)
}
