function setup() {

	createCanvas(windowWidth,windowHeight);
	background(190,100,255,100);

	stroke(255);
	fill(10,70,230,100);
	triangle(30,10,200,200,500,80);
	triangle(500,309,800,1000,105,150);
	triangle(1200,800,50,50,430,510);
}

function draw() {
  
  	push();
  	translate(width*0.8, height*0.5);
  	rotate(frameCount / -100.0);
  	noStroke(0);
  	star(0, 0, 30, 70, 10);
  	pop();
}

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
 }