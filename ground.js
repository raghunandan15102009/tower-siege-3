class Ground {
  constructor(x,y){
      var options={
          restitution:1,
          friction:0,
          density:1,
          isStatic:true
      }
      this.x = x;
      this.y = y;
      this.body = Bodies.rectangle(this.x,this.y,260,20,options);
      World.add(world,this.body);
  }

  display(){
     var pos = this.body.position;
     push();
     translate(pos.x,pos.y);
     rectMode(CENTER);
     rect(0,0,260,20);
     pop();
  }
}
