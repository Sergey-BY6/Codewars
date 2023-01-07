function getGrade (s1, s2, s3) {
  let a = (s1 +s2 +s3) / 3
  console.log (a)
  if      ( a>=90 && a <= 100 ) return "A"
  else if (a >= 80 &&  a < 90 ) return "B"
  else if (a >=70 && a < 80 ) return "C"
  else if (a >= 60 &&  a < 70 ) return "D"
  else if (a >=0 && a < 60 ) return "F"
}
