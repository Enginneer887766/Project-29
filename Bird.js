class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,35,35);
    this.image = loadImage("hexagon.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
  }
}
