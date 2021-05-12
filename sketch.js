const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



var bg
var sd=[]
var max=100

function preload(){
  bg=loadImage ("snow2.jpg")
}




function setup() {
  createCanvas(1370,650);
  

  engine = Engine.create();
	world = engine.world;
  Engine.run(engine);
  if(frameCount%60==0){
    for(var i=0; i<max; i++){
      sd.push(new Snow(random(0,1370),random(0,650)) )
    }
  }
}



function draw() {
  background(bg);  
  for(var i=0; i<max; i++){
    sd[i].display()
    sd[i].update()
  }
  drawSprites();

}
