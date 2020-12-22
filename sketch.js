const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,side1,side2,side3,ground1 	

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(400,680,800,10);
	
	ball = new Paper(100,650,15)

	side1 = new Box(450,615,50,20)
	side2 = new Box(550,615,50,20)
	side3 = new Box(500,635,20,50)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground1.display();
  ball.display();
  side1.display();
  side2.display();
  side3.display();

  drawSprites();
 
}



