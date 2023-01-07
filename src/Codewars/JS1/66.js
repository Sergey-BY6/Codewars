function removeExclamationMarks(s) {
  let result = ""
  for (let i of s) {
  if (i === "!") return
    else result += i
  }
  return result ;
}
