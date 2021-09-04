"use strict";

let person1 = {
    firstName: "Peter",
    age: 29,
    student: false
};

let person2 = {
    firstName: "Other Peter",
    age: 28,
    student: false
};
//const person2 = person1;

//person2.firstName = "other Peter";

//console.log(person1.firstName);

let person3 = person1;
person3.firstName = "Changed";

console.log("person1");
console.log(person1);
console.log("person2");
console.log(person2);
console.log("person3");
console.log(person3);

person3 = person2;

console.log("person1");
console.log(person1);
console.log("person2");
console.log(person2);
console.log("person3");
console.log(person3);

person2.firstName = "Also changed";

console.log("person1");
console.log(person1);
console.log("person2");
console.log(person2);
console.log("person3");
console.log(person3);

person1 = person3;
console.log("person1");
console.log(person1);
console.log("person2");
console.log(person2);
console.log("person3");
console.log(person3);