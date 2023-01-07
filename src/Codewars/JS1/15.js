function squareDigits(num){

  let result = Array
  for (let a of String (num)) {
  result+= (String(a*a))
  }
  return +result

}
