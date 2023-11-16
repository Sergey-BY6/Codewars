// Mash 2 arrays together so that the returning array has alternating elements of the 2 arrays . Both arrays will always be the same length.
//
//      [1,2,3] + ['a','b','c'] = [1, 'a', 2, 'b', 3, 'c']


const arrayMash = (array1, array2) => {
    let a = []
    array1.forEach((el, index) => {
        a.push(el)
        a.push(array2[index])
    })
    return a
}