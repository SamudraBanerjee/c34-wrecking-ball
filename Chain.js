class Chain{
    constructor(body,point){
        var options={
            bodyA:body,
            pointB:point,
            stiffness:1.2,
            length:300
        }
        this.pointB=point;
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }

    display(){
    var pointA=this.chain.bodyA.position;
    var pointB=this.pointB;    
    push()
    stroke("purple");
    strokeWeight(5);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    pop()
    }
}