const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;




function preload() {
  towerImage = loadImage("./assets/tower.png");
  bg = loadImage("./assets/background.gif")
}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(150,110,100,50,angle)

}

function draw() {
  background(189);
  image(bg,pos.x,pos.y,width,height)
  Engine.update(engine);

  ground.display();
  cannon.display();
  tower.display();
  
 
}
