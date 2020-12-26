var paper;
var ground;
var dustbin;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload() {
 
  //Nothing to put in.
}

function setup() {
  createCanvas(1600, 700);

  engine = Engine.create();                 
  world = engine.world;

  //Create the Bodies Here.
  paper = new Paper(200, 655, 40);
	
  ground = new Ground(width/2, 675, width, 20);

  dustbin = new Dustbin(1200, 660);

   var render = Render.create({
   element: document.body,
   engine: engine,
   options: {
	 width: 1200,
	 height: 700,
	 wireframes: false
   }
 })

  Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  ground.display();
  dustbin.display();
  
  drawSprites();
 
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper.body, paper.body.position, {x: 85, y: -85});
  }
}

