"use strict";

// const string = "Mathilde Sahlholdt Christensen";

// let string2 = string.indexOf(" ");
// console.log(string2);

// let firstName = string.substring(0,8);
// console.log(firstName);

// let string3 = string.lastIndexOf(" ");
// console.log(string3);

// let secondName = string.substring(9,18);
// console.log(secondName);

// let lastName = string.substring(19);
// console.log(lastName);


//PARAMETERS
//_________________________________________________________
// getNameParts("Mathilde Sahlholdt Christensen");

// function getNameParts(fullname) {
//     let firstNameString = fullname.indexOf(" ");
//     let lastNameString = fullname.lastIndexOf(" ");
//     console.log(firstNameString);
//     console.log(lastNameString);

//     let firstName = fullname.substring(0,firstNameString);
//     console.log(firstName);
    
//     let middleName = fullname.substring(firstNameString+1,lastNameString);
//     console.log(middleName);
   
//     let lastName = fullname.substring(lastNameString+1);
//     console.log(lastName);

//     console.log( { firstName, middleName, lastName } );
// }



//FULL NAME FUNCTION
//_________________________________________________________


fullName("Potter", "Harry");

function fullName(lastName, firstName, middleName) {
    console.log(`${firstName} ${middleName} ${lastName}`);
};