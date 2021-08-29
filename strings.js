"use strict";

const myName = "Mathilde";
const pet = "hamster";
const petName = "Cordelia";

console.log(`My name is ${myName}.
I have a ${pet} called ${petName}.`);

console.log(`My name is ${myName}. \nI have a ${pet} called ${petName}.`)

const len = myName.length;

console.log(`${myName} is ${len} characters long`);

//Exercise with lenght and [index]
const albus = "Albus Percival Wulfric Brian Dumbledore";
const total = albus.length;
//1 
console.log(`Total number of characters is ${total}`); 
//2
const letter = albus[2];
console.log(`The character at index 2 is ${letter}`);
//3
const letter2 = albus[6];
console.log(`The character at index 6 is ${letter2}`);
//4
let firstD = albus.indexOf("D");
console.log(`The index of the first D in Dumbledore is at ${firstD}`);

let secondD = albus.indexOf("d");
console.log(`The index of the first D in Dumbledore is at ${secondD}`);

//5 
let lastE = albus.lastIndexOf("e");
console.log(`The index of the last e in Dumbledore is at ${lastE}`);

//Trim method
const str1 = "  There is        space here \n   ";
const str2 = str1.trim();
console.log(str2);

//Method Parameters
const fullName = "Peter Heronimous Lind";
const firstName = fullName.substring(0,5);
const lastName = fullName.substring(17)

console.log(`firstname is: _${firstName}_`);
console.log(`lastname is ${lastName}`);


//Quick exercises with substring
//const albus = "Albus Percival Wulfric Brian Dumbledore";

//1 Albus
const albusFirstName = albus.substring(0,5);
console.log(`Dumbledore's first name is: _${albusFirstName}_`);

//2 Dumbledore
const dumbledore = albus.substring(29);
console.log(`Albus' last name is: _${dumbledore}_`);

//3 Wulfric 
const wulfric = albus.substring(15,22);
console.log(`Albus' middle name is: _${wulfric}_`);

//4 _ Wulfric_
const wulfric2 = albus.substring(14,22);
console.log(`Albus' middle name is: _${wulfric2}_`);

//5 ian 
const ian = albus.substring(25,28);
console.log(`This word is a part of the middle name Brian: _${ian}_`);

//6 bus
const bus = albus.substring(2,5);
console.log(`This word is a part of the first name Albus: _${bus}_`);