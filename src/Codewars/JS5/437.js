// Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.
//
//     Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.
//
//     Rules:
//
// Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.


const arr = ["E", "I", "O", "U"]

const gordon = a => {
    let result = a.toUpperCase().split(" ")
        .map(el => el.split("")
            .map(ell => ell === "A" ? "@" : (arr.includes(ell) ? "*" : ell)
            ).join("")
        ).join("!!!! ")
    return result + "!!!!"
}