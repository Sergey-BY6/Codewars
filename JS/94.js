function sumDigits(number) {
  let result = 0
  let a = number.toString().split("")
  for (let i of a) {
  if (i == "-") continue
  result +=  (+i)
  }
  return result
}
