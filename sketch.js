const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, canvas, ground;

function setup(){
  canvas = createCanvas(400,400);
  engine = Engine.create();
  world= engine.world;

  var option1 ={
    isStatic:true
  }

  ground = Bodies.rectangle(200,380,400,10,option1);
  World.add(world,ground);

  var option2= {
    restitution:1
  }

 box = Bodies.rectangle(200,20,20,20,option2);
 World.add(world,box);

 ball = Bodies.circle(150,20,50,option2);
 World.add(world,ball);
}

function draw(){
  background(0);
  Engine.update(engine);

  rectMode(CENTER);
  fill("lightgreen");
  rect (ground.position.x, ground.position.y, 400,10);


  rectMode(CENTER);
  fill("red")
 rect(box.position.x,box.position.y,20,20);

 ellipseMode(RADIUS);
 fill ("blue")
 ellipse(ball.position.x,ball.position.y,50,50)

 
}




