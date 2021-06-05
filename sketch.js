var helicopterIMG, helicopterSprite;
var packageIMG,packageSprite;
var packageBody,ground;
var line1,line1Body,line2,line2Body,line3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	packageSprite=createSprite(400,80,10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.3;

	


	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	line1=createSprite(width/2-100,610,20,100);
	line1.shapeColor="red";
	line2=createSprite(width/2+50,610+40,300,20);
	line2.shapeColor="red";
	line3=createSprite(width/2+200,610,20,100)
	line3.shapeColor="red";







	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(400 , 200 , 10 , { isStatic:true,restitution:0.5});
	World.add(world, packageBody);

	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  

  drawSprites();
 
}

function keyPressed() {
	if(keyCode===LEFT_ARROW){
		helicopterSprite.x=helicopterSprite.x-20;
		translation={
			x:-20,y:0
		}
		Matter.Body.translate(packageBody,translation)
	}

	else if(keyCode===RIGHT_ARROW){
		helicopterSprite.x=helicopterSprite.x+20;
		translation={
			x:+20,y:0
		}
		Matter.Body.translate(packageBody,translation)
	}


else if (keyCode === DOWN_ARROW) {
   Matter.Body.setStatic(packageBody,false);
    
  }

}



