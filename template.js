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
const fullName = "Peter Heornimous Lind";
const firstName = fullName.substring(0,5);

console.log(`firstname is: _${firstName}_`);