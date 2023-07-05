// Hey awesome programmer!
//
//     You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!
//
//     Therefore you need a method, which returns the smallest unused ID for your next new data item...
//
// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!
//
// Go on and code some pure awesomeness!

function nextId(ids) {
    let a = ids.sort((a,b) => a - b)
    let b = a.map((el,index) => el === a[index + 1] || el +1 === a[index + 1] ? el : 500)
    let c = b.findIndex(el => el === 500)
    return a[0] > 0 ? 0 : a[c] + 1
}