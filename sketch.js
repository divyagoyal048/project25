
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
dustImg = loadImage("Bin.png");
}

function setup() {
	createCanvas(1200,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper = new Paper(250,80,70);
  ground = new Ground(600,500,1200,15);

  bin = createSprite(964,420,20,20);
  bin.addImage(dustImg);
  bin.scale = 0.45

  left = new Dustbin(982,420,10,120);
  right = new Dustbin(982,420,10,120);
  down = new Dustbin(982,420,10,120);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);
 

  paper.display();

  ground.display();

  left.display();
  down.display();
  right.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:15, y:-15})
	}
}



