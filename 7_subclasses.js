class Book {
    constructor (title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

// Magazine Subclass
class Magazine extends Book {
    constructor (title, author, year, month) {
        super(title, author, year); // inherit values from Book class
        this.month = month; 
    }
}

// Instantiate Magazine
const mag1 = new Magazine ('Mag One', 'Jane Doe', '2015', 'Feb');
console.log (mag1);
console.log (mag1.getSummary());