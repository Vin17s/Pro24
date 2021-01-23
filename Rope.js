class Rope{
    constructor(body1,body2,offSetX,offSetY){
        this.offSetX = offSetX
        this.offSetY = offSetY
        var options = {
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offSetX,y:this.offSetY}
        }
        this.rope = Constraint.create(options)
        World.add(world,this.rope)
    }
    display(){
        var pointA = this.rope.bodyA.position
        var pointB = this.rope.bobyB,position
        strokeWeight(2)
        var point1X = pointA.x
        var point1Y = pointA.y
        var point2X = pointB.x+this.offSetX
        var point2Y = pointB.y+this.offSetY
        line(point1X,point1Y,point2X,point2Y)
    }
}