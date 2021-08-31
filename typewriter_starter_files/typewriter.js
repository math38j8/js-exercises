"use strict";

let maxNumberOfIterations;
let iterator;
let text = document.querySelector("#typewriter").textContent;
let addedText;

document.querySelector("#allowsounds").addEventListener("click", allowsounds);
document.querySelector("#typewriter").textContent = "";


function allowsounds() {
    document.querySelector("#typekey1").play();
    console.log("allow sounds");
}


init();

function init() {
    maxNumberOfIterations = text.length;
    iterator = 0;
    setTimeout(loop, 1000);

    console.log(maxNumberOfIterations);
}

function loop() {
    console.log("loop");

    iterator++;
    console.log(iterator);


    if (iterator <= maxNumberOfIterations) {
        //console.log(text[iterator - 1]);
        //addedText = document.querySelector("#typewriter").textContent;

        //setTimeout(() => { document.querySelector("#typewriter").innerHTML += text[iterator - 1] }, 200);

        document.querySelector("#typewriter").innerHTML += text[iterator - 1];
        document.querySelector("#typekey1").play();
        setTimeout(loop, 1200);
    }
}
