var triangles = [];

function setup(){

	createCanvas(windowWidth, windowHeight);
}

function draw(){

	background(253, 191, 181);

	for (var i = 0; i < triangles.length; i++){

		triangles[i].draw();

		if (triangles[i].x > 700){
			triangles.splice(i,1);
		}
		
	}

	if (mouseIsPressed){
		if (mouseButton == LEFT){
			triangles.push(new Triangle(mouseX, mouseY, random (100,200), random (100,200), random(100,200)));
		}
		
	}

}

function Triangle(x1,y1,x2,y2,x3,y3){
	
	this.x1 = x1;
	this.y1 = y1;
	this.x2 = x2;
	this.y2 = y2;
	this.x3 = x3;
	this.y3 = y3;

	/**this.display = function(){
		noStroke();
		fill(random(0,255), 0, 255);
		triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
	}

	this.move = function(){
		this.x2++;
		this.y2++;
		this.x3++;
	}**/

	this.draw = function(){
		this.x1++;
		this.y1++;
		this.x2++;
		fill(255, 0, 255);
		triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
	}	
}