const s = 'Hello'; // this is a primitive. If we use a method like toUpperCase() on it, it will turn it into an object
//console.log (typeof s); // prints "string"

const s2 = new String ('Hello'); // this is an object
//console.log (typeof s2); // prints "object"

//console.log (window); // parent object of the DOM
//console.log (navigator.appVersion); // navigator is a child of 'window'

// Object literal
const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: '2013',
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

//console.log (book1);
//console.log (book1.title); // prints 'Book One'
//console.log (book1.getSummary());

const book2 = {
    title: 'Book Two',
    author: 'Jane Doe',
    year: '2013',
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

console.log (book2.getSummary());
console.log (Object.values(book2)); // prints the values of the object ('Book Two', 'Jane Doe', etc)
console.log (Object.keys(book2)); // prints the keys of the object (title, author, etc)



// stopped at 7:44 https://youtu.be/vDJpGenyHaA