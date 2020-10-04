
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,boyImage;

function preload()
{
	boyImage = loadImage("boy.png");
}

function setup() {
	createCanvas(1200,800);


	engine = Engine.create();
	world = engine.world;

	boy = createSprite(200,150,50,50);
	boy.addImage("boy",boyImage);
	boy.scale = 0.2;
	

	ground = new Ground(400,200,800,10);
	tree = new Tree(700,350,40,200);
	stone = new Stone(250,200,20,20);
	mango1 = new Mango(705,350,20,20);
	mango2 = new Mango(710,345,20,20);
	mango3 = new Mango(715,360,20,20);
	mango4 = new Mango(720,365,20,20);


	slingshot = new Slingshot(stone.body,{x : 200, y : 100});

		//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  ground.display();
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();;
  mango3.display();
  mango4.display();
  
  slingshot.display();


  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x : mouseX, y : mouseY});
    
}
function keyPressed() {
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x : 235,y : 420});
		launcher.attach(stone.body);

	}

}
function detectCollision(lstone,lmange){
mangoBodyPosition = lmango.body.position;
stoneBodyPosition = lstone.body.position;

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x,mangoBodyPosition.y)
if(distance <= lmango.r+lstone.r){
	Matter.Body.setStatic(lmango.body,false)
	detectCollision(stone,mango1);
	detectCollision(stone,mango2);
	detectCollision(stone,mango3);
	detectCollision(stone,mango4);
}

}

