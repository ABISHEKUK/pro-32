const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world,score;
var polygon,polygonImg;
var backgroundIMG;

function preload(){
  polygonImg=loadImage("polygon.png");
  
}
function setup() {
  var canvas = createCanvas(1000,400);
  engine = Engine.create();
  world = engine.world;
  block1=new Box(480,275);
  block2=new Box(510,275);
  block3=new Box(540,275);
  block4=new Box(570,275);
  block5=new Box(600,275);
  block6=new Box(450,275);
  block7=new Box(630,275);
  block8=new Box(480,235);
  block9=new Box(510,235);
  block10=new Box(540,235);
  block11=new Box(570,235);
  block12=new Box(600,235);
  block13=new Box(510,195);
  block14=new Box(530,195);
  block15=new Box(560,195);
  block16=new Box(530,155);
  block17=new Box(800,100);
  block18=new Box(800,140);
  block19=new Box(830,140);
  block20=new Box(770,140);
  block21=new Box(800,180);
  block22=new Box(830,180);
  block23=new Box(860,180);
  block24=new Box(770,180);
  block25=new Box(740,180);
  
  ground1=new Ground(500,390,1000,20);
  ground2=new Ground(550,305,250,20);
  ground3=new Ground(800,205,250,20);
  var options={
    density:2.5,
    restitution:0.5,
    friction:1.2,
  }
  polygon=Bodies.circle(200,200,20,options);
  World.add(world,polygon);
  slingShort=new SlingShot(this.polygon,{x:200,y:200});
  score=0;
}
function draw() {
  background(56,44,44); 
  Engine.update(engine);

  textSize(30);
  text("Press space to play again",10,50);
  text("score : "+score,750,40);

  fill(135,206,234);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill(63,224,208);
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill(254,192,203);
  block17.display();
  fill(63,224,208);
  block18.display();
  block19.display();
  block20.display();
  fill(135,206,234);
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();
  slingShort.display();
  ground1.display();
  ground2.display();
  ground3.display();

  imageMode(CENTER);
  image(polygonImg,this.polygon.position.x,this.polygon.position.y,40,40);
 
  

}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  slingShort.fly();
}
function keyPressed(){
  if(keyCode === 32){
    slingShort.attach(this.polygon);
  }
}
