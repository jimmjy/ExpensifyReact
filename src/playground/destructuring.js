//
// Object destructuring
//

// const person = {
//     name: 'James',
//     age: 30,
//     location: {
//         city: 'Toronto',
//         temperature: 5
//     }
// };

// const { name = 'anonymous', age } = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${name} is ${age}`);

// const { city, temperature: temp } = person.location;

// if (temp && city) {
//     console.log(`It's ${temp} in ${city}`);
// };

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self Published' } = book.publisher;

// console.log(publisherName);

//
// Array destructuring

const address = ['1299 S Juniper street', 'Philly', 'Pens.', '19147'];

const [ , city, state ] = address;

console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.55', '$2.75' ];

const [ coffee, , medium] = item;

console.log(`A medium ${coffee} costs ${medium}`);