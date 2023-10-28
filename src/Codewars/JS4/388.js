// Description:
//     Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.
//
//     Examples
// remove("Hi!") === ""
// remove("Hi! Hi!") === ""
// remove("Hi! Hi! Hi!") === ""
// remove("Hi Hi! Hi!") === "Hi"
// remove("Hi! !Hi Hi!") === ""
// remove("Hi! Hi!! Hi!") === "Hi!!"
// remove("Hi! !Hi! Hi!") === "!Hi!"


const remove = (string) => {
    let a = string.split(" ").map(el => el.split(""))
    let b = a.filter(el => el.filter(e => e === "!").length !== 1)
    return b.length ? b.map(el => el.join("")).join(" ") : ""
}