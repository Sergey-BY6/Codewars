// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
//
//     Example:
//
// Input:
//
//     'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
//
// Output:
//
//     'alpha beta gamma delta'


const removeDuplicateWords = s => {
    let result = []
    s.split(" ").filter(el => !result.includes(el) && result.push(el))
    return result.join(" ")
}