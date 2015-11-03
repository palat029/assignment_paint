////////////////////////////////////////////////////////////////////
// palat029.js
//
// basic palat029 tool: draws a thin, solid line
// author: Justin Bakse



////////////////////////////////////////////////////////////////////
// create and install brush

var palat029 = new Brush("palat029", "./brushes/palat029/palat029.svg");
brushes.push(palat029);



////////////////////////////////////////////////////////////////////
// define brush behavior

palat029.draw = function() {
	fill(255, 50, 50);
	stroke(forecolor);

	if (mouseIsPressed) {
		rect(pmouseX, pmouseY, mouseX + random(0, 10), mouseY + random(-3, 3));
	}
};
