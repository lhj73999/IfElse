function setup()
{
	createCanvas(800, 600);
	noFill();
	stroke(255, 0, 0);
}

function draw()

{   background(0);
	if (mouseX < 100) {

		ellipse(50, 200, 100, 100);
	} else if(mouseX>300) {
		ellipse(400, 200, 100, 100);
	}
}  

     