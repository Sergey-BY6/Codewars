function correct(string){
// your code here
let result = ""
  for (let i of string) {
  if (i === "5") result += "S"
    else if (i === "0") result += "O"
    else if (i === "1") result += "I"
    else result += i
  }
  return result
}
