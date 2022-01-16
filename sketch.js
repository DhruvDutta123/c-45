var ship,shipImg;
var aliens=[];
var enemy1,enemy2,enemy3,enemy4;
var lasers=[];
var points=0;

function setup(){
  createCanvas(1200,1200);
  frameRate(10);
 

  ship=new Ship();
  //create bottom row of enemies
  var startX=80;
  var startY=80;
  for(var i=0;i < 6;i++){
  aliens[i]=new Enemy(i * startX + 80,startY,5);
  }
  //create top row of enemies
  startY=40;
  var offSet = 0;
  for(var j=0;j < 12;j++){
    aliens[j]=new Enemy(offSet* startX + 80,startY,10);
    offSet++
    }
}

function draw(){
  background(50); 
  ship.display();
  ship.move();
var edge = false; 
  for(var i = 0;i < aliens.length;i++){
    aliens[i].display();
    aliens[i].move();
    if(aliens[i].x > width || aliens[i].x < 0){
      edge = true
    }
      }
      if(edge){
        for(var k=0;k < aliens.length;k++){
          aliens[i].shDown();
    }
  }
  //displaying and moving the laser
  for(var ls = 0;ls < lasers.length;ls++){
    lasers[ls].show();
    lasers[ls].move();

    //Colision detection
  for(var j = 0;j < aliens.length;j++){
    if(lasers[ls].hits(aliens[j])){
      lasers[ls].remove();
      points = points+aliens[j].pts;
      aliens.splice(j,1); //removing enemy from array
    }
  }//ending of enemy loop
  }//ending of laser loop 1.

  for(var lg = lasers.length-1;lg>=0;lg--){
    if(lasers[lg].toDelete){
      lasers.splice(lg,1);//removing lasers from array
    }
  }//end of laser loop 2.
  updateHUD();
  //check if game is over
  if(aliens.length<=0){
    gameOver();
  }
}

function keyPressed(){
if(keyCode==="space"){
  var laser = new Laser(ship.x,ship.y)
  lasers.push(laser)
}
  if(keyCode===RIGHT_ARROW){
    ship.setDir(1);
  }
else if(keyCode===LEFT_ARROW){
  ship.setDir(-1);
}
}

function updateHUD(){
  fill("green");
  text("Score:"+points,10,20);
  text("Aliens remaining:"+aliens.length,75,20)
}

function gameOver(){
  background("black");
  textSize(50);
  textAlign(CENTER);
  text("SUPERB! You save the Earth",width/2,height/2);
  noLoop();
}

function keyRealeased(){
  ship.setDir(0);
}
