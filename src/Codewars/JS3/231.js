// Your job here is to write a function (keepOrder in JS/CoffeeScript, keep_order in Ruby/Crystal/Python, keeporder in Julia), which takes a sorted array ary and a value val, and returns the lowest index where you could insert val to maintain the sorted-ness of the array. The input array will always be sorted in ascending order. It may contain duplicates.
//
//     Do not modify the input.
//
//     Some examples:
//     keepOrder([1, 2, 3, 4, 7], 5) //=> 4
//     ^(index 4)
// keepOrder([1, 2, 3, 4, 7], 0) //=> 0
// ^(index 0)
// keepOrder([1, 1, 2, 2, 2], 2) //=> 2
// ^(index 2)

function keepOrder(ary, val) {
    let a = val <= ary[0] ? 0 : val > ary[ary.length - 1] ? ary.length : ary.map((el, index ) => ary[index] < val ? el : 200).findIndex(el => el === 200)
    return a === -1 ? 0 : a
}