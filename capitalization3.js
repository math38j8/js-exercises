"use strict";

const firstString = "peter";

let upperCase = firstString[2].toUpperCase();


console.log(upperCase);

let newName = firstString.substring(0,2) + firstString[2].toUpperCase() + firstString.substring(3);
console.log(newName);

let secondName = firstString[0].toUpperCase() + firstString.substring(1);
console.log(secondName);

let thirdName = firstString.substring(0,3).toUpperCase() + firstString.substring(3);
console.log(thirdName);

let fourthName = firstString.substring(0,4).toUpperCase() + firstString.substring(4);
console.log(fourthName);

