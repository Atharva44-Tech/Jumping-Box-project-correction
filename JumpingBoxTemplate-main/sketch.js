var rect1,rect2,rect3,rect4,rect5;


function preload(){
music=loadSound("music.mp3");    
}


function setup(){
    canvas = createCanvas(450,600);

    //create 4 different surfaces
rect1=createSprite(40,570,100,30);
rect1.shapeColor="red";

rect2=createSprite(150,570,100,30);
rect2.shapeColor="purple";

rect3=createSprite(260,570,100,30)
rect3.shapeColor="green";

rect4=createSprite(370,570,100,30);
rect4.shapeColor="yellow";

rect5=createSprite(200,200,20,20);
rect5.shapeColor="blue";
    //create box sprite and give velocity
    rect5.velocityX=5
    rect5.velocityY=5
}

function draw() {
    background("lightBlue");
    drawSprites();
    
edge=createEdgeSprites()
rect5.bounceOff(edge);
  
if (rect5.isTouching(rect1)){
rect5.shapeColor=rect1.shapeColor;
rect5.bounceOff(rect1);
}

if (rect5.isTouching(rect2)){
  rect5.shapeColor=rect2.shapeColor;
  rect5.bounceOff(rect2);
  }

  if (rect5.isTouching(rect3)){
    rect5.shapeColor=rect3.shapeColor;
    rect5.bounceOff(rect3);
    rect5.velocityX=0
    rect5.velocityY=0
    music.stop();
    }

    if (rect5.isTouching(rect4)){
      rect5.shapeColor=rect4.shapeColor;
      rect5.bounceOff(rect4);
      music.play();
      }

}
