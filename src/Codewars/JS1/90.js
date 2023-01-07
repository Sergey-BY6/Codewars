function shortcut (string) {
let result = ""

for (let i of string) {
if ( i === "a" || i === "e" || i === "i" || i === "o" || i === "u") continue
result += i
}
  return result
}
