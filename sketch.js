var pacman,pacmanImg,ghost1,ghost2,ghost3,ghost4;
var edges;
var Cherry,CherryImg;
var ghost1Img,ghost2Img,ghost3Img,ghost4Img;
var global 

function preload(){
pacmanImg = loadImage("images/pacman.png");
ghost1Img = loadImage("images/ghost1.png");
ghost2Img = loadImage("images/ghost2.png");
ghost3Img = loadImage("images/pinkGhost.png");
ghost4Img = loadImage("images/ghost4.png");
CherryImg = loadImage("images/Cherry.png");
}

function setup() {


  createCanvas(1200,400);
  pacman = createSprite(50,200,50,50);
  pacman.addImage("pacman",pacmanImg);
  
  
  
}

function draw() {
  background(0); 
/*if(keyDown("RIGHT_ARROW")){
  pacman.x = pacman.x+7;
}

if(keyDown("LEFT_ARROW")){
  pacman.x = pacman.x-7;
}*/
if(keyDown("UP_ARROW")){
  pacman.y = pacman.y-7;
}
if(keyDown("DOWN_ARROW")){
  pacman.y = pacman.y+7;
}
edges = createEdgeSprites();
pacman.bounceOff(edges);

redGhost();
blueGhost();
pinkGhost();
yellowGhost();
Cherry();
drawSprites();
}

function redGhost(){
  if(frameCount%300===0){
  ghost1 = createSprite(1200,200,50,40);
    ghost1.addImage("red",ghost1Img);
    ghost1.scale = 0.15;
  ghost1.velocityX =-3;
    ghost1.y = Math.round(random(30,380));
    ghost1.lifetime = 400;
    
  }
}
function blueGhost(){
  if(frameCount%250===0){
  ghost2 = createSprite(1200,200,50,40);
  ghost2.addImage("blue",ghost2Img);
  ghost2.scale = 0.1
  ghost2.velocityX =-3;
    ghost2.y = Math.round(random(30,380));
    ghost2.lifetime = 400;
    
  }
}
function pinkGhost(){
  if(frameCount%200===0){
  ghost3 = createSprite(1200,200,50,40);
  ghost3.addImage("pink",ghost3Img);
  ghost3.scale = 0.2;
  ghost3.velocityX =-3;
    ghost3.y = Math.round(random(30,380));
    ghost3.lifetime = 400;
  }
}
function yellowGhost(){
  if(frameCount%150===0){
  ghost4 = createSprite(1200,200,50,40);
  ghost4.addImage("yellow",ghost4Img);
  ghost4.scale = 0.1;
  ghost4.velocityX =-3;
    ghost4.y = Math.round(random(30,380));
    ghost4.lifetime = 400;
  }
}
function Cherry(){
  if(frameCount%50===0){
  cherry = createSprite(1200,200,20,20);
  cherry.addImage("Cherry",CherryImg)
  cherry.velocityX =-5;
    cherry.y = Math.round(random(30,380));
    cherry.lifetime = 250;
    cherry.scale = 0.02;
  }
}



