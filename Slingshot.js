class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        fill("red");
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(body) {
        this.sling.bodyA = body;
    }

    display(){
       
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            fill("red");
            
            push();
            
            stroke(48,22,8);
            if(pointA.x < 220) {
                strokeWeight(7);
                fill("red");
                line(pointA.x , pointA.y, pointB.x , pointB.y);
                
                
            }
            else{
                strokeWeight(3);
                fill("red");
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                
                
            }
           
            
            pop();
        }
    }
    
}