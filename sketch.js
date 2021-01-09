var sword, swordI;
var fru1I,fru2I,fru3I,fru4I;
var  monstI;
var gameovesrI;
var Score = 0;
var PLAY=1;
var END = 0;
var gameState = 1;
function preload(){
 swordI = loadImage("sword.png")
 fru1I = loadImage("fruit1.png"); 
  fru2I = loadImage("fruit2.png"); 
   fru3I = loadImage("fruit3.png");  
  fru4I = loadImage("fruit4.png"); 
monstI = loadImage("alien1.png","alien2.png");
gameoverI = loadImage("gameover.png"); 
}
function setup(){
createCanvas(400,400)  ;
  
sword = createSprite(40,200,20,20);
sword.addImage(swordI);
sword.scale = 0.7;  
  
  
  
fruitsGroup = createGroup();  
monsterGroup = createGroup();  
}
function draw(){
background("pink");
  
  textSize(15);
  fill("green");
  text("Score: "+ Score,300,30)
  if( gameState === PLAY){
sword.x = World.mouseX;  
sword.y = World.mouseY;   
  
if(fruitsGroup.isTouching(sword)){  
 fruitsGroup.destroyEach(); 
 Score = Score + 2
}} 

  
  if(monsterGroup.isTouching(sword)){
 gameState = END; 
}  

if (gameState === END){
fruitsGroup.destroyEach();  
monsterGroup.destroyEach();  
 fruitsGroup.velocityX = 0;  
monsterGroup.velocityX = 0;  
sword.addImage(gameoverI);
sword.x = 200;
  sword.y = 200;
}  
  
 sword.setCollider("circle",10,0,60) 
Fruits();
Monster();  
drawSprites();
}
function Fruits(){
if(World.frameCount%80 === 0){
 var fruit = createSprite(400,200,20,20);
fruit.scale = 0.2
  
r = Math.round(random(1,4));
if( r== 1){
fruit.addImage(fru1I);
}  
 else if (r == 2){
  fruit.addImage(fru2I) 
 }
else if (r == 3){
 fruit.addImage(fru3I); 
}
else if (r == 4){
 fruit.addImage(fru4I); 
}  
fruit.y = Math.round(random(50,340));   
fruit.velocityX = -7;   
fruit.setLifetime = 100;   
   
fruitsGroup.add(fruit);   
}  
}

function Monster(){
if(World.frameCount%200===0){
 var monst = createSprite(400,200,20,20); 
  monst.addImage(monstI);
 monst.y = Math.round(random(100,300)); 
monst.velocityX = -8;
monst.setLifetime = 50;  
 
monsterGroup.add(monst);  
}  
}