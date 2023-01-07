function noSpace(x){
let result = ''
for (let i of x) {
if (i === " ") return
else result += i
}
  return result
}
