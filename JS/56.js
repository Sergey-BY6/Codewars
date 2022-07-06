function findDifference(a, b) {
  let aa = a.reduce((sum, current) => sum * current, 1)
  let bb = b.reduce((sum, current) => sum * current, 1)
  return Math.abs(aa - bb)
}
