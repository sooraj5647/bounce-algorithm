

var fixedRect,movingRect;



function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 50);
  movingRect = createSprite(600,200,50,50);

  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";

  fixedRect.velocityX = 3;
  movingRect.velocityX = -3;
}

function draw() {
  background(0); 
  
  if(movingRect.x - fixedRect.x <= (movingRect.width + fixedRect.width) / 2 
  && fixedRect.x - movingRect.x <= (fixedRect.width + movingRect.width) / 2
  && movingRect.y - fixedRect.y <= (movingRect.height + fixedRect.height) / 2
  && fixedRect.y - movingRect.y <= (fixedRect.height + movingRect.height) / 2) {
    
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";

    fixedRect.velocityX = fixedRect.velocityX * -1;
    movingRect.velocityX = movingRect.velocityX * -1;
  }

  else {
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }

  drawSprites();
}