function setup(){
	createCanvas(windowWidth,windowHeight);
}

function draw(){

	background(253, 191, 181);

	for(var x = 0; x <= width; x+=30){
		for(var y = 0; y <=height; y+=30){
			noStroke();
			fill(random(0,255),0,random(0,255),random(10,255));
			ellipse(x,y,40,40);
		}	
	}
}