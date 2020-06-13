const Engine=Matter.Engine;
const Bodies = Matter.Bodies;
const World= Matter.World;
const Constraint = Matter.Constraint;

var engine,world;
var box1,player,slingshot;

function setup() {
  createCanvas(800,400);

  box1=new Box(300,100,60,60);
  box2 = new Box(700,320,70,70);
    box3 = new Box(920,320,70,70);
    box4 = new Box(810,260,300,70);
    box5 = new Box(700,240,70,70);
    box6 = new Box(920,240,70,70);
    box7 =  new Box(810,180,300,70);

    box8 = new Box(810,160,70,70);
    box9 = new Box(760,120,150,70);
    box10 = new Box(870,120,150,70);
    player = new Player(100,200,20,20);

      slingshot = new SlingShot(player,{x:200,y:50});


}

function draw() {
  background(255,255,255);  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  player.display();
  slingshot.display

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(player.body,{x:mouseX , y:mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
function keyPress(){
  slingshot.sttach(player.body);
}