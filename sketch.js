var player; //global variable
var playerAnimation;

var coin;
var coinAnimation;

var cloud, cloudImg1, cloudImg2, cloudImg3, cloudImg4
var cloudGroup;

var pipe1, pipe2, pipe3
var pipeImg1, pipeImg2, pipeImg3

var block1, block2, block3, block4
var blockImg1, blockImg2, blockImg3, blockImg4

var bg
var bgImg

var inviseGround
var ground
var groundImg

var gameState = "welcome"

function preload(){
  playerAnimation = loadAnimation("images/1.png","images/2.png","images/3.png","images/4.png","images/5.png","images/6.png","images/7.png","images/8.png")
  coinAnimation = loadAnimation("images/c1.png", "images/c2.png", "images/c3.png", "images/c4.png", "images/c5.png" )

  cloudImg1 = loadImage("images/cloud1.png")
  cloudImg2 = loadImage("images/cloud2.png")
  cloudImg3 = loadImage("images/cloud3.png")
  cloudImg4 = loadImage("images/cloud4.png")

  pipeImg1 = loadImage("images/pipe1.png")
  pipeImg2 = loadImage("images/pipe2.png")
  pipeImg3 = loadImage("images/pipe3.png")

  blockImg1 = loadImage("images/block1.png")
  blockImg2 = loadImage("images/block2.png")
  blockImg3 = loadImage("images/block3.png")
  blockImg4 = loadImage("images/block4.png")

  bgImg = loadImage("images/background.png")

  groundImg = loadImage("images/ground.png")



}

function setup(){
  createCanvas(displayWidth, displayHeight);
  player = createSprite(400,400,50,50);
  player.addAnimation("running",playerAnimation)
  player.scale = 0.5
  //player.visible=false

  player.setCollider("circle",0,0,40);
  player.debug = true

  inviseGround = createSprite(displayWidth/2, displayHeight-150, displayWidth, 10);
  inviseGround.addImage(groundImg)

  
    
  )

}

function draw(){
  background(bgImg);

  if(keyDown("space")&& player.y >= displayHeight/1.2) {
    player.velocityY = -12;
   
  }
  
  //add gravity
  player.velocityY = player.velocityY + 0.5

  player.collide(inviseGround)
  
  if(player.collide(inviseGround)){
    player.velocityY = 0
  }
  spawnClouds();
  drawSprites();
 
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 200 === 0) {
     cloud = createSprite(displayWidth,displayHeight/2-500,40,10);
    cloud.y = Math.round(random(displayWidth/2-900, displayWidth/2-700));
    var rand = Math.round(random(1,4))
    switch(rand) {
      case 1: cloud.addImage(cloudImg1);
              break;
      case 2: cloud.addImage(cloudImg2);
              break;
      case 3: cloud.addImage(cloudImg3);
              break;
      case 4: cloud.addImage(cloudImg4);
              break;
      default: break;
    }
   // cloud.scale = 0.5;
    cloud.velocityX = -3;
    cloud.lifetime = 1000;
  // cloudGroup.add(cloud);
    }
} 