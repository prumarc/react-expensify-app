// Object destructuring
// const person = {
//     name: 'Marcos',
//     age: 30,
//     location: {
//         city: 'Puebla',
//         temp: 92
//     }
// };

// const {name = 'Anonymous', age} = person;

// console.log(`${name} is ${age}.`);

// const {city, temp: tempature } = person.location;
// if (city && tempature) {
//     console.log(`It's ${tempature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-published' } = book.publisher;

// console.log(publisherName)

//
//Array destructuring
//

// const address = ['1299 s juniper street', 'Philadelphiea', 'pensilvania', '19147'];
// const  [, city, state] = address;
// console.log(`You are in ${city} ${state}.`);


const item = ['Coffee (ice)', '$3.00', '$3.50', '$3.75'];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);








