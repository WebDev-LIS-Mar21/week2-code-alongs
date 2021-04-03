//Primitive values: Number 1, String "a", Boolean True, Null, Undefined
//Non-primitive values: Array [], Object {}

//Primitive types are passed by value
let name1 = 'Ana';
let name2 = 'Lucia';

console.log(name1);
console.log(name2);
name2 = name1;
console.log(name2);
name1 = 'Miguel';
console.log(name2);

//Non-primitive types are passed by reference
let book1 = {
    title: "Harry Potter"
}

let book2 = book1; //Passing the reference
console.log(book2);
console.log(book1);
book1.title = 'Lord of The Rings';
console.log(book2);
console.log(book1);

//1. Copy an object
const book3 = Object.assign({}, book2);
book3.title = "Pride and Prejudice";
console.log(book2);
console.log(book3);

const student = {
    name: 'Dalia',
    course: 'Webdev',
    calendar: {
        weekdays: ['mon', 'tue'],
        nested: {

        }
    }
}

const student2 = Object.assign({}, student); //Shallow copy
console.log(student);
console.log(student2);
student2.name = 'Mario';
console.log(student);
console.log(student2);
//It will deep copy every property of the object
const student3 = JSON.parse(JSON.stringify(student)); //Deep copy

const names = ["Luis", "Jeein", "Mario", "Stefano"];
const copyOfNames = names;
copyOfNames[0] = "Pedro"; //Making a change on both names and copyOfNames
console.log(names);
console.log(copyOfNames);
//Copying arrays
const anotherCopyOfNames = JSON.parse(JSON.stringify(names)); //Deep copy
//Spread [...names]; 
//names.map((item) => item);
const animals1 = ['giraffe', 'lion', 'zebra'];
const animals2 = ['dog', 'cat', 'rabbit'];
const allAnimals = [...animals1, ...animals2]; 
console.log(allAnimals);

//Spread operator with objects
const anotherBook = {
    title: "Hunger Games",
    author: {
        name: 'some one',
        age: 2
    }
}

const copyOfAnotherBook = {...anotherBook, pages: 400};
console.log(copyOfAnotherBook);
copyOfAnotherBook.author.name = 'yada';
console.log(anotherBook);
console.log(copyOfAnotherBook);