// The function is not returning the correct values. Can you figure out why?
//
//     Example (Input --> Output ):

// function getPlanetName(id){
//     var name;
//     switch(id){
//         case 1:
//             name = 'Mercury'
//         case 2:
//             name = 'Venus'
//         case 3:
//             name = 'Earth'
//         case 4:
//             name = 'Mars'
//         case 5:
//             name = 'Jupiter'
//         case 6:
//             name = 'Saturn'
//         case 7:
//             name = 'Uranus'
//         case 8:
//             name = 'Neptune'
//     }
//
//     return name;
// }


const getPlanetName = (id) => id === 1 ? 'Mercury' : (id === 2 ? 'Venus' : (id === 3 ? 'Earth' : (id === 4 ? 'Mars' : (id === 5 ? 'Jupiter' : ( id === 6 ? 'Saturn' : (id === 7 ? 'Uranus' : 'Neptune')) )) ))