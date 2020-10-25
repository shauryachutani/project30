const Engine=Matter.Engine
const World =Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint;
var engine,world
function setup() {
  createCanvas(800,400);
engine=Engine.create();
world=engine.world
 player = new Player(200,200);
 
 sling = new Sling(player.body,{x:200,y:200})
 box1=new Box(500,286)
  slab1=new Slab(500,300,120,20)
  box2=new Box(510,286)
  box3=new Box(490,286)
  box4=new Box(480,286);
  box5=new Box(475,286)
  box6=new Box(520,286)
  box7=new Box(480,286)
  box8=new Box(490,286)
  box9=new Box(500,286)
  box10=new Box(510,280)
  box11=new Box(490,280)
  box12=new Box(500,280)
box13=new Box(495,270)
slab=new Slab(650,130,120,20);
box14=new Box(650,110)
box15=new Box(640,110);
box16=new Box(630,110);
box17=new Box(660,110);
box18=new Box(670,110);
box19=new Box(680,110);
box20=new Box(670,110)
box21=new Box(660,110);
box22=new Box(650,110);
box23=new Box(640,110);
box24=new Box(650,100);
box25=new Box(655,100);
box26=new Box(651.9,90);

}

function draw() {
  background("purple"); 
  Engine.update (engine);
  player.display();
  sling.display();

  box1.display();
  slab1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
box13.display();
slab.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display()
box22.display();
box23.display();
box24.display();
box25.display();
box26.display();
}
function mouseDragged(){
  Matter.Body.setPosition(player.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  sling.fly();
}
function keyPressed(){
  if(keyCode === 32){
    sling.attach(player.body)
  }
}