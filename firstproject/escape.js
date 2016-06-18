var bubbles = [];
var numBubbles = 70;

function setup(){

	createCanvas(windowWidth, windowHeight);

	for(var i = 0; i <= numBubbles; i++){
		bubbles.push(new Bubble(random(0,windowWidth), random(0,windowHeight), random(10,50)));
	}
}

function draw(){

	background(253, 191, 181);

	for (var i = 0; i < bubbles.length; i++){
		bubbles[i].display();
		bubbles[i].move();
	}

}

function Bubble(x,y,diameter){
	this.x=x;
	this.y=y;
	this.diameter=diameter;

	this.display = function(){
		noStroke();
		fill(255, 48, 158);
		ellipse(this.x,this.y, this.diameter,this.diameter);
	}

	this.move = function(){
		this.y=this.y+(random(-3,3));
		this.x=this.x+(random(-3,3));
	}
}