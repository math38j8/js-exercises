"use strict";

//const firstString = "peter";

//let firstName = firstString[0].toUpperCase() + firstString.substring(1);
//console.log(firstName);



//const str = "peter";

capitalize("matHilDe");

function capitalize(str) {
    let firstLetter = str[0].toUpperCase();
    let restName = str.substring(1).toLowerCase();
    let newName = firstLetter + restName;
    console.log(newName);
    console.log(firstLetter);
    console.log(restName);
};

