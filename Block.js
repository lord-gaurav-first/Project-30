class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibility = 255;
      this.image = loadImage("block.png");
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      if (this.body.speed < 3){
        push();
        rectMode(CENTER);
        image(this.image, pos.x,pos.y, this.width, this.height);
        pop()
      }else {
        World.remove(world, this.body);
        this.visibility -= 5;
        push();
        tint(255, this.visibility);
        image(this.image, pos.x,pos.y, this.width, this.height);
        pop();
      }
      
    }
}
