const quarterOf = (month) => {
  // Your code here
  return month <=3 ? 1 : (month >3 && month<= 6 ? 2 : (month > 6 && month <=9 ? 3: 4))
}
