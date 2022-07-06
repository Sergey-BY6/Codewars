var humanYearsCatYearsDogYears = function(humanYears) {
2
  let arr = [15,24]
3
  let cat = 0
4
  let dog = 0
5
​
6
  if ( humanYears == 1) {
7
  cat = arr[0]
8
  dog = arr[0]
9
  }
10
    else if (humanYears == 2) {
11
     cat = arr[1]
12
     dog = arr[1]
13
    }
14

15
    else if (humanYears >= 3) {
16
     cat = arr[1] + ((humanYears - 2) * 4)
17
     dog = arr[1] + ((humanYears - 2) * 5)
18
    }
19
  return [humanYears,cat,dog];
20
}
21
​
 Corre
