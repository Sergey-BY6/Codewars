function find_average(array) {
  let result = 0
  for (let a of array) {
  result += a
  }
  return array.length === 0 ? 0 : result / array.length
}
