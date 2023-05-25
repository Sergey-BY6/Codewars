// In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:
//
//     "Hello!" => "Holle!"
// "Tomatoes" => "Temotaos"
// "Reverse Vowels In A String" => "RivArsI Vewols en e Streng"
// For simplicity, you can treat the letter y as a consonant, not a vowel.
//
//     Good luck!



function reverseVowels(str) {
    let arr = []
    let a = ["a", "e", "i", "o", "u"]
    let result = str.split("")

    for (let i = 0; i <= a.length; i++) {
        let pos = 0
        while (true) {
            let index = str.toLowerCase().indexOf(a[i], pos);
            if (index === -1) break;
            arr[index] = str[index]
            pos = index + 1
        }
    }

    let b = arr.map(el => el)
    for (let i = 0; i <= arr.length; i++) {
        let pos2 = arr.length
        if(typeof arr[i] === "string") {
            let index = b.findLastIndex(el => typeof el === "string", pos2);
            console.log(index)
            result[i] = arr[index]
            b.splice(index)
            pos2 = index - 1
        }
    }
    return result.join("")
}