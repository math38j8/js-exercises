"use strict";

window.addEventListener("DOMContentLoaded", start);

const allAnimals = [];                      //make a const that contains a string
let Animal = {                              //defines a template for date objects (prototype)
  name: "",
  desc: "",
  type: "",
  age: 0,
};

function start() {
  console.log("ready");

  loadJSON();
}

function loadJSON() {
  fetch("animals.json")                     //fetching the json data
    .then((response) => response.json())
    .then((jsonData) => {
      // when loaded, prepare objects
      prepareObjects(jsonData);
    });
}

function prepareObjects(jsonData) {
  jsonData.forEach((jsonObject) => {            //making forEach loop for each json object
    // TODO: Create new object with cleaned data - and store that in the allAnimals array
    // TODO: MISSING CODE HERE !!!
    console.log("prepareObjects: ");
    console.log(jsonObject);
    const animal = Object.create(Animal);                       //creating an object from the prototype
    animal.type = getAnimalType(jsonObject.fullname);           //modifying the prototype
    animal.name = getFirstName(jsonObject.fullname);
    animal.desc = getAnimalDescription(jsonObject.fullname);
    animal.age = jsonObject.age;

    allAnimals.push(animal);                                    //adds the changes to the end of the array
  });
  console.log(allAnimals);
  displayList();
}

function getFirstName(fullName) {
  const firstName = fullName.substring(0, fullName.indexOf(" "));
  return firstName;
}
function getAnimalType(fullName) {
  const animalType = fullName.substring(fullName.lastIndexOf(" ") + 1);
  return animalType;
}
function getAnimalDescription(fullName) {
  const animalDescription = fullName.substring(fullName.indexOf(" "), fullName.lastIndexOf(" ") + 1).trim();
  const animalDescriptionNoThe = animalDescription.slice(animalDescription.indexOf(" ")).trim();
  return animalDescriptionNoThe;
}

function displayList() {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  allAnimals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document.querySelector("template#animal").content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}
