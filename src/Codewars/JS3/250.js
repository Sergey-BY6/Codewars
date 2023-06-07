//
// There is a war and nobody knows - the alphabet war!
//     There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.
//
//     Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.
//
// The left side letters and their power:
//
//     w - 4
// p - 3
// b - 2
// s - 1
// The right side letters and their power:
//
//     m - 4
// q - 3
// d - 2
// z - 1
// The other letters don't have power and are only victims.
//
// Example
// alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!



function alphabetWar(fight) {
    let result = [0,0]
    let left = {w:  4, p:  3, b:  2, s:  1}
    let right = { m: 4, q: 3, d: 2, z: 1}
    for (let i = 0; i <= fight.length; i++) {
        for (var key1 in left) {
            if (key1 === fight[i]) {
                result[0] += left[key1]
            }
        }
        for (var key2 in right) {
            if (key2 === fight[i]) {
                result[1] += right[key2]
            }
        }
    }
    return result[0] === result[1] ? "Let's fight again!" : (result[0] < result[1] ? "Right side wins!" : "Left side wins!")
}