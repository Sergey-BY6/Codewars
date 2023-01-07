function getAverage(marks) {
    return Math.floor((marks.reduce((acc, el) => el + acc, 0)) / marks.length)
}