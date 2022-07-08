function noSpace(x){
let result = ''
for (let i of x) {
if (i == " ") continue
else result += i
}
  return result
}
