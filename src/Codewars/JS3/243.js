// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
//
//     Your task is to write a function maskify, which changes all but the last four characters into '#'.
//
//     Examples
// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""


function maskify(cc) {
    let result = ""
    for (let i = 0; i < cc.length; i++) {
        i < cc.length - 4 ? result += "#" : result += cc[i]
    }
    return cc.length < 4 ? cc : result
}



