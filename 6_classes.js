class Book {
    constructor (title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

    getAge () {
        const years = new Date ().getFullYear()  // get this year (2022)
                - this.year;
        return `${this.title} is ${years} years old`;
    }

    revise (newYear) {
        this.year = newYear;
    this.revise = true;
    }

    static topBookStore () { // static means we dont have to instantiate an object
        return 'Barnes and Noble';
    }
}

// Instantiate an object
const book1 = new Book ('Book One', 'John Doe', '2012');

console.log (book1);
book1.revise ('2018');
console.log (book1);

// using static function
console.log (Book.topBookStore());