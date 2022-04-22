// Object of Protos
const bookProtos = {
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge: function () {
        const years = new Date ().getFullYear()  // get this year (2022)
                - this.year;
        return `${this.title} is ${years} years old`;
    }
}

// Create Object
const book1 = Object.create(bookProtos);
book1.title = 'Book One';
book1.author = 'John Doe';
book1.year = '2014';

console.log(book1);

// Another way of creating an object
const book2 = Object.create(bookProtos, {
    title: {value: 'Book Two'},
    author: {value: 'Jane Doe'},
    year: {value: '2012'}
});

console.log (book2);

// stopped at 27:52 https://youtu.be/vDJpGenyHaA