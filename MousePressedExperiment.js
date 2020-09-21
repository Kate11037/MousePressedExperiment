function setup() {
	createCanvas(400, 400);
	background(255, 255, 255);
}

function draw() {
	rect(200, 0, 200, 400);
}

function mousePressed() {
	if (mouseX > 200) {
		fill(0, 255, 0);
	}
	else {
		fill(255);
	}
}

