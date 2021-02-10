var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGgroup, obstaclegroup,bananagroup
var score = 0
var gamestate = "Play"
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(450,400)
  
  
  monkey = createSprite(50,315,20,20)
  monkey.scale = 0.1
  monkey.addAnimation("1234",monkey_running)
  ground = createSprite(400,350,900,10)
  ground.velocityX = -4
  ground.x = ground.width/2
  console.log(ground.x)
  
  bananagroup = createGroup()
  obstaclegroup = createGroup()
  
  
  
  
}


function draw() {
  background("lightgreen")
  
  text("Score:"+score,225,20)
  if (gamestate == "Play"){
     
    if (ground.x < 0){
    ground.x = ground.width/2 }
    if (keyDown("space")){
    monkey.velocityY = -12
  }
  monkey.velocityY = monkey.velocityY + 0.8
  if (monkey.isTouching(bananagroup)){
  bananagroup.destroyEach()}
    
    foodgroup()
  pobstacle()
  
  if (monkey.isTouching((obstaclegroup))){
    gamestate = "End"
    
    
  }
    
  }
  if (gamestate == "End"){
   
   ground.velocityX = 0
    obstaclegroup.setVelocityXEach (0)
    bananagroup.setVelocityXEach (0)
  }
 
  monkey.collide(ground)
  drawSprites()
}

function foodgroup()
{
  if(frameCount%60==0){
  banana = createSprite(550,50,10,10)
  banana.addImage("yashika",bananaImage)
    banana.scale = 0.1
  banana.velocityX = -5
  banana.y = Math.round(random(20,140))
    bananagroup.add(banana)
}}

function pobstacle(){
  
  if (frameCount%120==0){ 
  obstacle = createSprite(450,330,10,10)
  obstacle.addImage("yashika",obstacleImage)
  obstacle.scale = 0.1
  obstacle.velocityX = -4 
  obstaclegroup.add(obstacle)
  }}






