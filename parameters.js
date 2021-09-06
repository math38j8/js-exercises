"use strict";

//let firstName = "Scott";
const myName = "Zelda";
const secondName = "Fitzgerald";

//sayHello(myName);
//sayHello();
sayHello(myName, secondName);



function sayHello(firstName) {
    //console.log(firstName);
    console.log(`Hello ${firstName}`);
};

//____________________________________________________________________________________________

const firstName = "Mathilde"
const myPet = "hamster"
const petName = "Cordelia"

presentPet(firstName, myPet, petName);

function presentPet(firstParam, secondParam, thirdParam) {
console.log(`My name is ${firstParam}, I have a ${secondParam} called ${thirdParam}`);
};

//____________________________________________________________________________________________
presentPet("Mathilde", "hamster", "Cordelia");

function presentPet(ownerName, animalType, animalName) {
    console.log(`My name is ${ownerName}, I have a ${animalType} called ${animalName}`);
};

//____________________________________________________________________________________________



let globalVar = "Freddie";
exp("Hey");
function exp(myParam){
    //myParam = "Dunno";

    globalVar = "Pluto";
    //console.log(myParam);
    console.log(myParam + " " + globalVar);

};
