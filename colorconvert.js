//HEX to RGB

String.prototype.convertToRGB = function(){
    let aRgbHex = this.match(/.{1,2}/g);
    let aRgb = [
        parseInt(aRgbHex[0], 16),
        parseInt(aRgbHex[1], 16),
        parseInt(aRgbHex[2], 16)
    ];
    return aRgb;
}

console.log('c0ffee'.convertToRGB()); //[ 192, 255, 238 ]



//RGB to HEX
function ColorToHex(color) {
    let hexadecimal = color.toString(16);
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
  }
  
  function ConvertRGBtoHex(red, green, blue) {
    return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
  }
  console.log(ConvertRGBtoHex(192, 255, 238));

  