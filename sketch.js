var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  rect3 = createSprite(300,100,20,20)
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(touche(movingRect,rect3))
  {
    movingRect.shapeColor = "yellow"
    movingRect.width= 60
  }
  else{
    movingRect.shapeColor = "red"
    movingRect.width= 80
  }
    drawSprites();
  
  
  
  
  
  }

 
