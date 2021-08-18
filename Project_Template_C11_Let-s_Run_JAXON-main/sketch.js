var runner,runnerImg;
var track,trackImg;
var invisibleborder1,invisibleborder2



function preload(){
  runnerImg = loadAnimation("Runner-1.png" , "Runner-2.png")
  trackImg = loadImage("path.png")
}




function setup(){
  createCanvas(400,400);
  track = createSprite(200,200,150,150);
  track.addImage(trackImg);
  track.velocityY = 5;



  runner = createSprite(100,350,150,150);
  runner.addAnimation("runnerMoving" , runnerImg);
  runner.scale = 0.065

   invisibleborder1 = createSprite(10,200,130,400);
   invisibleborder2 = createSprite(390,200,130,400);
   invisibleborder1.visible=false
   invisibleborder2.visible=false

}

function draw() {
   background(0);
  if (track.y > 400) {
     track.y = track.width / 2;
     }
     runner.x = World.mouseX

  drawSprites();
}
