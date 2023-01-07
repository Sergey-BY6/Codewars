function removeSmallest(numbers) {
  let user =  Math.min (...numbers)
let a = numbers.indexOf(user, 0)
let newUser = []

for (let i in numbers) {
  if (i === a) return
  else {
    newUser.push (numbers[i])
}
}
return newUser
}
