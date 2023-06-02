// When provided with a String, capitalize all vowels
//
// For example:
//
//     Input : "Hello World!"
//
// Output : "HEllO WOrld!"



function swap(string) {
    let a = ["a", "e", "i", "u", "o"]
    let b = string.split("")
    for (let i = 0; i < b.length; i++) {
        a.forEach(el => {
            if (el === b[i].toLowerCase()) {
                b[i] = el.toUpperCase()
            }
        })
    }
    return b.join("")
}