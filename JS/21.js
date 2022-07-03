function points(games) {
  // your code here
  let result = 0
for (let i of games) {
if (i[0] > i[2]) result += 3
else if (i[0] < i[2])continue
else  result += 1
}
return result
}
