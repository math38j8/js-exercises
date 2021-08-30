"use strict";

const string = "Mathilde Sahlholdt Christensen";

let string2 = string.indexOf(" ");
console.log(string2);

let firstName = string.substring(0,8);
console.log(firstName);

let string3 = string.lastIndexOf(" ");
console.log(string3);

let secondName = string.substring(9,18);
console.log(secondName);

let lastName = string.substring(19);
console.log(lastName);