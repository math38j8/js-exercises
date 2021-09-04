"use strict";

//An object is a group of properties, each with its own value 

let objectEx = {
    "firstName": "Peter",
    "age": "29",
    "student": "false"
};

//firstName, age and student are properties   --> Peter, 29 and false are values 
//properties have to be in quotes in json files but dont have to in js files


//What is the difference between arrays and objects?
//Arrays are intended for lists of items of the same type - ex. list of strings, numbers, objects
//Objects are intended for properties that belong together

//Properties can be accesed with .dot notation
//console.log(`${object.firstName} is ${object.age} years old.`);

//Properties can be read (get)
    //let name = object.firstName;
//or written (set)
    //object.firstName = "Newname";


const person1 = {
    firstName: "Peter",
    age: 29,
    student: false
};

//console.log(person1.lastName); //lastName is undefined

//person1.lastName ="Lind";
//console.log(person1.lastName);   //now lastName is defines

//console.log(person1); //view the entire object


//Properties can also be removed

// person1.lastName = undefined;
// console.log(person1.lastName);
// console.log(person1.middleName);

// delete person1.lastName;
// console.log(person1.lastName);
// console.log(person1);


//Like arrays objects can be modified
person1.age++;
console.log(person1);

const person2 = {
    firstName: "Mathilde",
    age: 23,
    student: true
}

person1 = person2;