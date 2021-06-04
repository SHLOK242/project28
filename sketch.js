
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1
var dustbin1
var dustbin2
var dustbin3
var paper1
function preload()
{
	
}

function setup() {
	createCanvas(2000, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Engine.run(engine);
  paper1=new Paper()
ground1= new Ground(650,700,1700,20)
dustbin1= new dustbin(1300,600,40,200)
dustbin2= new dustbin(1400,700,200,40)
dustbin3= new dustbin(1500,600,40,200)
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  
  drawSprites();
  KeyPressed();
  paper1.display()
  ground1.display()
 dustbin1.display()
 dustbin2.display()
 dustbin3.display()
}

function KeyPressed() {
if(keyCode === UP_ARROW)
  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:3,y:-4})
}



