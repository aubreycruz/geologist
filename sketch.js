const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var stone, rubber, hammer, iron;

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	plane = new Plane(600, height, 1200, 20);
	iron = new Iron (300, 350);
	stone = new Stone(700, 320, 100, 100);
	rubber = new Rubber(900, 450, 70);
	hammer = new Hammer(10, 100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  plane.display();
  iron.display();
  stone.display();
  rubber.display();
  hammer.display();
  
  drawSprites();
 
}



