// constants to set up the environment

const CANVAS_WIDTH = 300;

const CANVAS_HEIGHT = 500;

const BACKGROUND_COLOR = 'lightblue';



// location of the player

var playerX = 100;

var playerY = 50;

var name = "sam";

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  //fill('grey');
  //arc(200, 50, 100, 80, 0, PI, CHORD);
}

// loops forever
function draw() {
  // Draw background
  background(BACKGROUND_COLOR);
  
  // Draw player
  drawPlayer(playerX, playerY);
  
  // Player movement
  if (keyIsDown(LEFT_ARROW)) {
    playerX--;
  }

  else if (keyIsDown(RIGHT_ARROW)) {
    playerX++;
  }

  else if (keyIsDown(UP_ARROW)) {
    playerY--;
  }

  else if (keyIsDown(DOWN_ARROW)) {
    playerY++;
  }
}

// draws a snowman
function drawPlayer(pX, pY) {
  //replace this...
  
	noStroke();
  fill('white');
  
  // body
  ellipse(pX, pY, 50, 50);
  ellipse(pX, pY+50, 75, 75);
  ellipse(pX, pY+100, 100, 100);
  
  // eyes
  fill('black');
  ellipse(pX-10, pY-5, 10, 10);
  ellipse(pX+10, pY-5, 10, 10);
  
  // nose
  fill('orange');
  triangle(pX, pY, pX+10, pY+5, pX-10, pY+10);
}



//PONG

function setup() {
	
createCanvas(500, 500);
	


}

v
ar value = 10

var x = 20

var y = 20

var dx = 5

var dy = 5



function draw(){
  
background('white')
	
drawRect()
  
drawBall()

	

if (keyIsDown(LEFT_ARROW)) {
     
value = value - 10;
  
}

  else if (keyIsDown(RIGHT_ARROW)) 
{
     
value = value+10;

  }
  

if (x==20 & y==20){
    
x=random(0,300)
    
y = random(0,300)
  
	}

}



function drawRect(){

	rect(value, 400, 200, 10)
	
	fill('blue')
	

}



function drawBall(){
	
	ellipse(x, y, 55, 55)
  
	fill ('black')
}
