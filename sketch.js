const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var divisionHeight=300;
var particles =[];
var plinkos= [];
var divisions =[];

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;


  ground = new Ground(200, 800, 600, 20);


  for(var j = 40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,75,8));
  }

  for(var j = 40; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,175,8));
  }

  for(var j = 40; j<=width-20; j=j+50){
    plinkos.push(new Plinko(j,275,8));
  }

  for(var j = 40; j<=width-30; j=j+50){
    plinkos.push(new Plinko(j,375,8));
  }

  for(var k=0; k<=width; k=k+80){
    divisions.push(new Divisons(k, height-divisionHeight/2,10,divisionHeight));
  }

}

function draw() {
  background(0,0,0);

  Engine.update(engine);
  


  for(var k=0; k< divisions.length;k++){
    divisions[k].display();
  }

  for(var j = 0; j<plinkos.length; j++){
    plinkos[j].display();
  }

  
  if (frameCount% 50 === 0){
    particles.push(new Particle(random(width/2 -10,width/2 +10),10,10))
  }

  for (var i = 0; i<particles.length; i++){
    particles[i].display();
  }

  ground.display();

}




