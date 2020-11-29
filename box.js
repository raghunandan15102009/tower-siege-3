class Can {
    constructor(x,y,width,height) {
      var options = {
          isStatic:false,
          friction:2,
          density:0.3,
          stiffness:4
      }
      this.x=x;
      this.y=y;
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.visibility=255;
      World.add(world, this.body);
    }
    display(){
      if (this.body.speed < 3) {
        rectMode(CENTER);
        var pos =this.body.position;
        rect(pos.x, pos.y, this.width, this.height);
      } else {
        World.remove(world, this.body);
        push();
        this.visibility=this.visibility-5;
        tint(255,this.visibility);
        var pos =this.body.position;
        rect(pos.x, pos.y, this.width, this.height);
        pop();
      }
    }
    score(){
      if(this.visibility<0&&this.visibility>-105){
        score++;
      }
    }
  };
