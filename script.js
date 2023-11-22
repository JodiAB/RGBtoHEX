function convertToHex() {
    var red = document.getElementById("redInput").value;
    var green = document.getElementById("greenInput").value;
    var blue = document.getElementById("blueInput").value;

    // Ensure values are within valid range
    red = Math.min(255, Math.max(0, red));
    green = Math.min(255, Math.max(0, green));
    blue = Math.min(255, Math.max(0, blue));

    // Converting to Hex
    var hex = "#" + componentToHex(red) + componentToHex(green) + componentToHex(blue);

    // Calculating percentage of red, green, and blue
    var total = red + green + blue;
    var redPercentage = (red / total * 100).toFixed(2);
    var greenPercentage = (green / total * 100).toFixed(2);
    var bluePercentage = (blue / total * 100).toFixed(2);

    // Setting the body background to the calculated Hex color code
    document.body.style.backgroundColor = hex;

    // Displaying Hex color code
    document.getElementById("result").innerHTML = "Hex Color Code: " + hex +
                                                  "<br>Red: " + redPercentage + "%" +
                                                  "<br>Green: " + greenPercentage + "%" +
                                                  "<br>Blue: " + bluePercentage + "%";

    // Display the actual color
    document.getElementById("colorBox").style.backgroundColor = hex;
  }

  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }