const descendingOrder =(n) => {
  let arr =   Array.from (String (n), Number)
  arr.sort(function (a, b) {
    return b - a;
});
let newArr = ""
for (let a of arr) {
newArr += a
}
return +newArr
}
