"use strict";

let counter = 0;
const array = [];

loop()

function loop(){

    counter++;
   
    console.log(array);

    if (counter < 10) {
        array.unshift(counter);

      } else {
        array.unshift(counter);
        array.pop();
      }

    setTimeout(loop, 500);
}

 