class Tree {
    constructor(x,y,width,height){
      var options = {
        isStatic : true
      }
      this.x = x;
      this.y = y;
      this.image = loadImage("tree.png");
      this.image.scale = 1.0;
      
      this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
      World.add(world,this.body);

    }
  
    display() {
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      imageMode(CENTER);
      stroke ("green");
      strokeWeight(20);
      fill("green");
      image(this.image,0,0,this.width,this.height);
      pop();
      
      
    }
  }