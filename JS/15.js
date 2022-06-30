function squareDigits(num){

  let result = []
  for (let a of String (num)) {
  result+= (String(a*a))
  }
  return +result

}
