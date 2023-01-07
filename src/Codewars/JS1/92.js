function remove (string) {
  if (string[string.length - 1] === "!") {
  return string.split ("").slice(0, -1).join ("")
  }
return  string
}
