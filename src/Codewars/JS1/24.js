const betterThanAverage = (classPoints, yourPoints) => {
  // Your code here
  let points = 0
for (let i of classPoints) points += i
return yourPoints> (points / classPoints.length + 1)
}
