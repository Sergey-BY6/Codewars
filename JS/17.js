function oddOrEven(array) {
  //enter code here
let a = array.reduce((sum, current) => sum + current, 0)
return (a%2 == 0 || a == null) ? "even" : "odd"
}
