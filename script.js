function convertToHex() {
    var getValue = id => Math.min(255, Math.max(0, document.getElementById(id).value));
    var red = getValue("redInput");
    var green = getValue("greenInput");
    var blue = getValue("blueInput");

    var hex = "#" + componentToHex(red) + componentToHex(green) + componentToHex(blue);

    var total = red + green + blue;
    var redPercentage = (red / total * 100).toFixed(2);
    var greenPercentage = (green / total * 100).toFixed(2);
    var bluePercentage = (blue / total * 100).toFixed(2);

    document.body.style.backgroundColor = hex;

    document.getElementById("result").innerHTML = `Hex Color Code: ${hex}<br>
                                                  Red: ${redPercentage}%<br>
                                                  Green: ${greenPercentage}%<br>
                                                  Blue: ${bluePercentage}%`;

    document.getElementById("colorBox").style.backgroundColor = hex;
  }

  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }