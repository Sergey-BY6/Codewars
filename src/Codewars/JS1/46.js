
function positiveSum(arr) {
  let result = 0
  for (let a of arr) {
  if (a < 0) continue
  result += a
  }
  return result
}
