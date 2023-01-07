const humanYearsCatYearsDogYears = (humanYears) => {
  let arr = [15,24]
  let cat = 0
  let dog = 0

  if ( humanYears === 1) {
  cat = arr[0]
  dog = arr[0]
  }

    else if (humanYears === 2) {
     cat = arr[1]
     dog = arr[1]
    }

    else if (humanYears >= 3) {
     cat = arr[1] + ((humanYears - 2) * 4)
     dog = arr[1] + ((humanYears - 2) * 5)
    }
  return [humanYears,cat,dog];
}



