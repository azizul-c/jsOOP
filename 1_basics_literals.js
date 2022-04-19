const s = 'Hello'; // this is a primitive. If we use a method like toUpperCase() on it, it will turn it into an object
console.log (typeof s); // prints "string"

const s2 = new String ('Hello'); // this is an object
console.log (typeof s2); // prints "object"

console.log (window); // parent object of the DOM
console.log (navigator.appVersion); // navigator is a child of 'window'

// Object literals
const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: '2013'
};

console.log (book1);
console.log (book1.title); // prints 'Book One'

// stopped at 7:44 https://youtu.be/vDJpGenyHaA