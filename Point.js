class Point{
    constructor(x, y,r, angle){
        var options = {
            'isStatic' : true
        }
        this.body = Bodies.circle(x, y, r,options);
        this.r = r;
        World.add(world, this.body)
    }
    display(){
        push()
        translate(this.body.position.x, this.body.position.y);
        fill("black")
        ellipse(0, 0, this.r, this.r);
        pop()
    }
    }