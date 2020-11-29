class Polygon {
    constructor(x, y) {
        var options = {
            isStatic:false,
            restitution: 0.3,
            friction: 20,
            density: 1.2
        }
        this.x=x;
        this.y=y;
        this.body = Bodies.circle(this.x, this.y,40, options)
        World.add(world, this.body);
        this.radius=40;
        //this.image=loadImage("polygon.js");
    }
    display() {
        var pos = this.body.position;
        push()
        translate(pos.x, pos.y);
        imageMode(CENTER)
        ellipse(0, 0,40);
        pop()
    }
}