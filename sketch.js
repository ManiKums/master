
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//var ground1


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
    
	
	//Create the Bodies Here.
	paper =new Paper(100,600,20)

	dustbin=new Dustbin(550,620,20,100)
	dustbin2=new Dustbin(610,670,100,20)
	dustbin3=new Dustbin(670,620,20,100)
	ground=new GROUND(400,680,800,20)


	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  Engine.update(engine)
  background(0);
 
 paper.display();
 dustbin.display();
 dustbin2.display();
 dustbin3.display();
 ground.display();
// keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_Arrow){
		Matter.Body.apllyForce(paper.body,paper.Body.position,{x:15,y:-15})
	}
}

