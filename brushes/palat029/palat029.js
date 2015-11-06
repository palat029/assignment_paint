////////////////////////////////////////////////////////////////////
// palat029.js
//
// basic palat029 tool: draws a thin, solid line
// author: Justin Bakse



////////////////////////////////////////////////////////////////////
// create and install brush

var palat029 = new Brush("palat029", "./brushes/palat029/palat029.svg");
brushes.push(palat029);
var mouseWasPressed;



////////////////////////////////////////////////////////////////////
// define brush behavior

palat029.draw = function() {
	fill(255, 50, 50);
	stroke(forecolor);

	if (mouseIsPressed) {
		line(pmouseX, pmouseY, mouseX - 10, mouseY + 30, mouseX + 85, mouseY + 30);
		ellipse(pmouseX, pmouseY, 20, 20);

	}
};
palat029.mouseReleased = function() {
	fill(255, 255, 0);
	stroke(forecolor);

	ellipse(pmouseX + 35, pmouseY + 35, 70, 70);
	fill(0, 0, 0);
	ellipse(pmouseX + 37, pmouseY + 20, 10, 10);
	ellipse(pmouseX + 20, pmouseY + 20, 10, 10);
	fill(255, 255, 255);
	ellipse(pmouseX + 25, pmouseY +
		50, 20, 30);
};
