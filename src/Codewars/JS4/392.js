// Some people just have a first name; some people have first and last names and some people have first, middle and last names.
//
//     You task is to initialize the middle names (if there is any).
//
// Examples
// 'Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'


const initializeNames = name => {
    let a = name.split(" ")
    return a.length === 2
        ? name
        :
        a.map((el, i) => i === 0 || i === a.length - 1 ? el : el.slice(0, 1) + ".").join(" ")
}