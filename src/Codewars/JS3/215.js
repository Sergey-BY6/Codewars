// You will be given a number and you will need to return it as a string in Expanded Form. For example:
//
//     expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'


function expandedForm(num) {
    let result = ""
    let str = num.toString().split("")
    for (let i = 0; i < str.length; i++) {
        let b = str.map(el => 0).filter((el, index) => index <= str.length - (i + 2))
        if (+str[i] !== 0) {
            +str[i] !== 0 && (result += `${str[i]}` + b.join("") + " + ")
        }
    }
    return result.slice(0, -3)
}