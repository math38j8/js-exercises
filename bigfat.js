"use strict";
document.addEventListener("DOMContentLoaded", start);

function start() {
  console.log(start);
  document.querySelector("#butt").addEventListener("click", getInput);
}

//when button is pressed get the output category
function getInput() {
  console.log("getInput");
  //imput valuee
  let inputValue = document.querySelector("#fname").value;
  console.log(inputValue);

  //ouput category
  let generateCondition = document.querySelector("#info").value;
  console.log(generateCondition);

  let answer;

  if (generateCondition == "f-U") {
    answer =
      inputValue[0].toUpperCase() + inputValue.substring(1).toLowerCase();
    console.log(answer);

    /*   inputValue[0].toUpperCase() + inputValue.substring(1).toLowerCase();
    console.log(answer); */
  } else if (generateCondition == "f-name") {
    answer = inputValue.substring(0, inputValue.indexOf(" "));
    console.log(answer);
  } else if (generateCondition == "f-length") {
    answer = inputValue.substring(0, inputValue.indexOf(" ")).length;
    console.log(answer);
  } else if (generateCondition == "f-m") {
    answer = inputValue.substring(
      inputValue.indexOf(" "),
      inputValue.lastIndexOf(" ")
    );
    console.log(answer);
  } else if (generateCondition == "f-ch") {
    answer = inputValue.includes(".jpg") || inputValue.includes(".png");
    console.log(answer);
  } else if (generateCondition == "f-p") {
    answer = inputValue.padStart(20, "*");
    console.log(answer);
  } else if (generateCondition == "f-th") {
    answer =
      inputValue.substring(0, 2) +
      inputValue[2].toUpperCase() +
      inputValue.substring(3).toLowerCase();
    console.log(answer);
  }
  if (generateCondition == "f-hy") {
    if (inputValue.includes("-") || inputValue.includes(" ")) {
      answer =
        inputValue.substring(0, inputValue.indexOf("-") + 1) +
        inputValue[inputValue.indexOf("-") + 1].toUpperCase() +
        inputValue.substring(inputValue.indexOf("-") + 2);
    }
    console.log(answer);
  }
  document.querySelector("#outp").value = answer;
}

//conditions
