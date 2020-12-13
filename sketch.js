const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var umbrella;
var maxDrops = 100;
var drops = [];

function preload(){
    
    
}

function setup(){
    createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;
    if(frameCount%200 === 0){
    for ( var i = 0; i<maxDrops; i++){
      drops.push(new Drop((0,400),random(0,400)));
    }
  }
    umbrella = new Umbrella(200,500);
    
}

function draw(){
  background(0);
  Engine.update(engine);
  for ( var i = 0; i<maxDrops; i++){
    drops[i].display();
    drops[i].updateY();
  }
  umbrella.display();


  
}   

