const rps = (p1, p2) => {
    let a = ["scissors", "paper", "rock"]
    let b = ["Player 1 won!", "Player 2 won!", "Draw!"]

    if (p1 === a[0] && p2 === a[1]) return b[0]
    else if (p1 === a[0] && p2 === a[2]) return b[1]

    else if (p1 === a[1] && p2 === a[0]) return b[1]
    else if (p1 === a[1] && p2 === a[2]) return b[0]

    else if (p1 === a[2] && p2 === a[0]) return b[0]
    else if (p1 === a[2] && p2 === a[1]) return b[1]

    else if (p1 === p2) return b[2]

};
