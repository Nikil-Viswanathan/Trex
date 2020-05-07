var trex,trexrun,ground,groundanim,invisground
function preload(){
  trexrun = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundanim = loadAnimation("ground2.png");
}


function setup() {
  createCanvas(600, 200);
  trex= createSprite(50,150)
  ground = createSprite(300,170);
  invisground = createSprite(50,175,100,5);
trex.addAnimation("trex",trexrun);
  trex.scale = 0.5;
  ground.addAnimation("ground",groundanim);
  invisground.visible = false;
  ground.x = ground.width/2;
}

function draw() {
  background(220);
  drawSprites();
  trex.velocityY = trex.velocityY + 0.8;
  if(keyDown("space") && trex.y> 148){
    trex.velocityY = -11
  }
  trex.collide(invisground)
 if(ground.x < 0){
   ground.x = ground.width/2;
 }
  ground.velocityX = -6;

}