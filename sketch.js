var rect1 , rect2

function setup() {
  createCanvas(windowWidth,windowHeight);
 

  rect1=  createSprite(400, 200, 80, 50);
  rect1.shapeColor= "green"
  rect1.debug=true
  rect2 = createSprite(500, 100, 90, 50);
  rect2.shapeColor= "green"
  rect2.debug=true


}

function draw() {
  background(0);
  rect1.x=mouseX  
  rect1.y=mouseY

  if( rect1.width/2+rect2.width/2 > rect2.x-rect1.x && 
    rect1.width/2+rect2.width/2 > rect1.x-rect2.x &&
    
    rect1.height/2+rect2.height/2 > rect1.y-rect2.y&&
    rect1.height/2+rect2.height/2 > rect2.y-rect1.y

    ){
    rect2.shapeColor= "red"
    rect1.shapeColor= "red"

  }
  else{
    rect1.shapeColor= "green"
    rect2.shapeColor= "green"

  }

  
  
  drawSprites();
}