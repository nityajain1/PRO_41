class Umbrella{
    constructor(x,y){
    var options = {
        'isStatic':true
    }
    this.body = Bodies.circle(x, y, 40, options);
    this.image  = loadImage("images/Walking Frame/walking_1.png");
    this.radius = 40;

    World.add(world, this.body);
  }
  display(){
    
    push();
    
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,300,300);
    pop();
  }
}



    
    
