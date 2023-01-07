const capitals = (word) => {
    let a = []
    for (let i = 0; i < word.length; i++) {
        word[i] === word[i].toUpperCase() ? a.push(i) : false
    }
    return a
};