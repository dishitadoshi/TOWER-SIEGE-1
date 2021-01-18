const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,ground2,ground3;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,
block11,blok12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25;
var polygon;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(510,370,250,20);
    
    block1=new Box(430,340,30,40,PI/7);
    //block1.fill("pink");
    block2=new Box(460,340,30,40,PI/7);
    block3=new Box(490,340,30,40,PI/7);
    block4=new Box(520,340,30,40,PI/7);
    block5=new Box(550,340,30,40,PI/7);
    block19=new Box(580,340,30,40,PI/7);
    block23=new Box(610,340,30,40,PI/7);
    
    block6=new Box(460,300,30,40,PI/7);
    block7=new Box(490,300,30,40,PI/7);
    block8=new Box(520,300,30,40,PI/7);
    block20=new Box(550,300,30,40,PI/7);
    block24=new Box(580,300,30,40,PI/7);

    block9=new Box(490,260,30,40,PI/7);
    block21=new Box(520,260,30,40,PI/7);
    block25=new Box(550,260,30,40,PI/7);

    block22=new Box(520,220,30,40,PI/7);

    ground2=new Ground(690,200,170,20);

    block10=new Box(630,170,30,40,PI/-7);
    block11=new Box(660,170,30,40,PI/-7);
    block12=new Box(690,170,30,40,PI/-7);
    block13=new Box(720,170,30,40,PI/-7);
    block14=new Box(750,170,30,40,PI/-7);
    
    block15=new Box(660,130,30,40,PI/-7);
    block16=new Box(690,130,30,40,PI/-12);
    block17=new Box(720,130,30,40,PI/-7);

    block18=new Box(690,90,30,40,PI/-7);

    polygon= new Polygon(200,100,20,20);
    World.add(world,polygon);
    slingshot = new SlingShot(polygon.body,{x:100, y:150});

    ground3=new Ground(600,400,1200,10)
}

function draw(){
    background(0);
    Engine.update(engine);
   ground1.display();
   ground2.display();
   fill("pink");
   block1.display();
   fill("green");
   block2.display();
   fill("yellow");
   block3.display();
   fill("grey");
   block4.display();
   fill("brown");
   block5.display();
   fill("blue");
   block6.display();
   fill("green");
   block7.display();
   fill("purple");
   block8.display();
   fill("orange");
   block9.display();
   fill("white");
   block10.display();
   fill("pink");
   block11.display();
   fill("yellow");
   block12.display();
   fill("grey");
   block13.display();
   fill("brown");
   block14.display();
   fill("blue");
   block15.display();
   fill("purple");
   block16.display();
   fill("orange");
   block17.display();
   fill("white");
   block18.display();
   fill("pink");
   block19.display();
   fill("green");
   block20.display();
   fill("yellow");
   block21.display();
   fill("grey");
   block22.display();
   fill("brown");
   block23.display();
   fill("blue");
   block24.display();
   fill("orange");
   block25.display();
   polygon.display();
   slingshot.display();
   ground3.display();
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}