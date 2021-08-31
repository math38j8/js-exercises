"use strict";

let inputValue;
let result;
let operator;
let maskedNumber;

window.addEventListener("DOMContentLoaded", start);
document.querySelector("#clearresults").addEventListener("click", clearResults); //when clicked on clear go to clearResults


function start() {
    console.log("start");

    document.querySelector("#generate").addEventListener("click", generate);
}


function generate() {
    console.log("generate"); //checking if the function is working
    inputValue = document.querySelector("#usertext").value; //finds the value of the input field

   console.log(inputValue);

   correctOutput();
   
}


function correctOutput() {
    console.log("correctOutput");

    operator = document.querySelector("#operator").value;
    console.log(operator);

    if (operator === "option1") {
        //If input is a first name: Make the first character in a name uppercase, and the rest lowercase
        result = inputValue[0].toUpperCase() + inputValue.substring(1);
        console.log(result);
    }
    else if (operator === "option2") {
        //If input is a full name: Find the first name
        result = inputValue.split(' ', 1);
        console.log(result);
    } else if (operator === "option3") {
        //If input is a full name: Find the length of the first name
        result = inputValue.indexOf(" ");
        console.log(result);
    } else if (operator === "option4"){
        //If input is a full name: Find the middle name start and end position, and the middle name itself in a full name string
        let firstSpace = inputValue.indexOf(" ");
        let secondSpace = inputValue.lastIndexOf(" ");
        result = `The middle name starts at ${firstSpace} and ends at ${secondSpace}. The middle name is ${inputValue.substring(firstSpace,secondSpace)}`;
        console.log(firstSpace);
        console.log(secondSpace);
    }else if (operator === "option5"){
        //If input is a filename: Check if a filename is .png or .jpg
        console.log(inputValue.endsWith('.jpg'));
        if (inputValue.endsWith('.jpg')) {
            result = `File name is a .jpg`;
        } else if (inputValue.endsWith('.png')) {
            result = `File name is a .png`;
        } else {
            result = `Input is not a file name`;
        }
    }else if (operator === "option6"){
        //If input is a password: Hide a password with the correct number of *s
        let password = inputValue.indexOf("");
        result = inputValue.replaceAll(password, "*");
        console.log(result); 
        console.log(password);

        
    } else  {
        //option8
        //With any input: Make a character uppercase, if it follows a space or a hyphen
        result = inputValue.split("-");
        console.log("result",result);
    }

    viewOutput();
}


function viewOutput() {
    console.log("viewOutput");
    let viewresult = document.createElement("output");
    document.querySelector("#output").appendChild(viewresult);
    viewresult.append(result);

    //document.querySelector("input[id=usertext]").value = result;  --not necessary

}

function clearResults() {
    console.log("clearing") //make sure the function works
    document.querySelector("input[id=usertext]").value = ""; //empty the input
    document.querySelector("#output").innerHTML = '';
} //empty the results
