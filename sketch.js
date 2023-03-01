
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var groundObj;
var leftSide;
var rightSide;

function preload()
{
	
}

function setup() {
	var balls_option={
		isStatic: false,
		restitution:0.3,
		friction:0,
		density:1.2

	}
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
Matter.Bodies.circle()

	Engine.run(engine);
  
}


function draw() {

	groundObj.display()
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



