function removeExclamationMarks(s) {
  let result = ""
  for (let i of s) {
  if (i == "!") continue
    else result += i
  }
  return result ;
}
