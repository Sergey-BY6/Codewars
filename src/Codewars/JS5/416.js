// Polly is 8 years old. She is eagerly awaiting Christmas as she has a bone to pick with Santa Claus. Last year she asked for a horse, and he brought her a dolls house. Understandably she is livid.
//
//     The days seem to drag and drag so Polly asks her friend to help her keep count of how long it is until Christmas, in days. She will start counting from the first of December.
//
//     Your function should take 1 argument (a Date object) which will be the day of the year it is currently. The function should then work out how many days it is until Christmas.
//
//     Watch out for leap years!



const  daysUntilChristmas = days => {
    let years = days.getFullYear()
    let day = ( 24 * 3600 * 1000)
    return days.getMonth() === 11 && days.getDate() > 25
        ? (new Date(years + 1, 11, 25, 0, 0, 0, 0) - days) / day
        : (new Date(years, 11, 25, 0, 0, 0, 0) - days) / day
}