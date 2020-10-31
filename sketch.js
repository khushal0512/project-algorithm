var fixedRect,movingRect;
var square1,square2,square3,square4;



function setup() {
  createCanvas(1200,800);

  fixedRect=createSprite(900, 200, 50, 100);
  //fixedRect.velocityX=-5;
  movingRect=createSprite(100,200,80,50);
//movingRect.velocityX=5;

square1=createSprite(100,100,50,50);
square1.velocityX=2;
square2=createSprite(500,100,50,50);
square2.velocityX=-2;
square3=createSprite(300,100,50,50);
square4=createSprite(400,100,50,50);

}

function draw() {
  background(255,255,255); 

  console.log(movingRect.x-fixedRect.x);

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
bounceOff(square1,square2);
 /*if(isTouching(square1,movingRect)){
   square1.shapeColor="blue";
   movingRect.shapeColor="blue";
 }
 else{
  square1.shapeColor="red";
  movingRect.shapeColor="red";
 }*/
  drawSprites();

}

