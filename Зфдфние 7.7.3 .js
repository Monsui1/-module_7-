let users = [
    { name: 'Alice', age: 18 },
    { name: 'Svetlana', age: 17 },
    { name: 'Pavel', age: 30 },
    { name: 'Dmitry', age: 16 }
];

let adults = users.filter(user => user.age >= 18);
let adultNames = adults.map(user => user.name);

console.log(adults);
console.log(adultNames);