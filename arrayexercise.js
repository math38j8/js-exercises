"use strict";

//Arrays can be modified
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

console.log(letters[4]);

let newar = letters;
newar[4] = '*';

console.log(letters[4]);

//Array methods

const people = ['Harry', 'Ron', 'Hermione'];

let result;

//result = people.push("Draco");           //Draco is added to the array

//result = people.pop();                      //Hemione is removed from array 

//result = people.push("Neville");        //Neville is added to the array

//result = people.slice(0,3);              //There is now two arrays – if it was (0,2) one would be the original one and the copy only with two index

//result = people.splice(1,0,"Cho");       //Adds Cho to the array at index 1 - creates an empty array

//people[1] = "Ginny";                       //Adds Ginny to the array and sets her as index 1

//result = people.push("Fred", "George");      //Adds Fred and George to the array

//result = people.indexOf("Fred");            //Finds out what index Fred

//result = people.splice(result,1);              //Splits array in two - Index 0 in one array and index 1 + 2 in second array

console.log(result);
console.log(people);

// .push = adds to the array - in the end
// .pop = removes from the array - the the end
// .unshift = adds to the array - in the beginning
// .shift = removes from the array - the first one


//Converting to arrays
const str = "abcdefghijklmn";
const arr1 = str.split();        //makes the whole ting an array with only 1 index

const arr2 = Array.from(str);    //makes an array with every character as an index = 14 indexes here

console.log(arr1);
console.log(arr2);


        //String to array: .split()
        //Array to string: .join()
