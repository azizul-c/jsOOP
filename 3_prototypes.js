// Constructor 
function Book (title, author, year) {
    console.log ('Book Instantiated.');
    this.title = title;
    this.author = author;
    this.year = year; 

}

// getSummary -- you should do it as a prototype, or else it will be a 'value' of the object
Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
}

// getAge
Book.prototype.getAge = function () {
    const years = new Date ().getFullYear()  // get this year (2022)
                - this.year;
    return `${this.title} is ${years} years old`;
}

// Revise / change year
Book.prototype.revise = function (newYear) {
    this.year = newYear;
    this.revise = true;
}

// Instantiate an Object
const book1 = new Book ('Book One', 'John Doe', '2013');
const book2 = new Book ('Book Two', 'Jane Doe', '2014');

console.log (book2);
console.log (book2.title);
console.log (book2.getSummary());
console.log (book2.getAge());

book2.revise ('2018');
console.log (book2);