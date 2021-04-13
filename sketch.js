
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ballo1, holder1,ground1, string1;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	strokeWeight(0.5)
	ground1 = new Ground(400,690,900,20);
	wall1 = new Ground(0,400,5,900)
	wall2 = new Ground(800,400,5,900)

	ballo1 = new Ballo(250,600,40);
	ballo2 = new Ballo(300,600,40);
	ballo3 = new Ballo(400,600,40);
	ballo4 = new Ballo(480,600,40);
	ballo5 = new Ballo(550,600,40);

	holder1 = new Hold(400,300,300,40);
	
	string1 = new rope(ballo1.body, {x: 250, y:300})
	string2 = new rope(ballo2.body, {x: 320, y:300})
	string3 = new rope(ballo3.body, {x: 400, y:300})
	string4 = new rope(ballo4.body, {x: 480, y:300})
	string5 = new rope(ballo5.body, {x: 550, y:300})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(46, 168, 255);

  ballo1.display();
  ballo2.display();
  ballo3.display();
  ballo4.display();
  ballo5.display();

  ground1.display();
  wall1.display();
  wall2.display();
  holder1.display();
  
  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();

  drawSprites();
 
}

function keyPressed() {
	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(ballo5.body,ballo5.body.position,{x:85,y:-85})
	}
}

