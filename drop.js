class Drop{
    constructor(x,y){
        var options = {
            'restitution':0.1,
            'friction':0.01,
            
        }
        this.body = Bodies.circle(x, y, 10, options);
        
        this.radius = 10;
    
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos = this.body.position; 
        push();
        //translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        fill("lightblue");
        ellipseMode(CENTER);
        ellipse( pos.x,pos.y, this.radius,this.radius);
        pop();
      }
      updateY(){
        if(this.body.position.y > height){
          Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
        }
      }
}

    
