function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  let result = ""
  for (let a of dna) {
  if (a == "T" ) result += "U"
    else result += a
  }
  return result
}
