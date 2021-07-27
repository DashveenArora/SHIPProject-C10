var ship;
var sea;
var shipImage;
var seaImage;
function preload(){
  seaImage=loadImage("sea.png");
  shipImage=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(400,200,400,400);
  sea.addImage(seaImage);
 sea.scale=0.3;
  ship=createSprite(100,200,30,50);
  ship.addAnimation("moving",shipImage);
  ship.scale=0.2;
  sea.velocityX=-2;

 

}

function draw() {
  background("blue");
  if(sea.x<0){
    sea.x=sea.width/8;
  
    }
  drawSprites();
}