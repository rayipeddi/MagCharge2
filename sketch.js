const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var container
var mag1
var line, line2
var line3, line4
var point0, point1, point2, point3, point4, point5
var pointGroup
var pointIMG
var container2
var turbine
var turbineH
function preload(){
pointIMG = loadImage("point.jpg")
}
function setup() {
  createCanvas(displayWidth - 20, displayHeight-30);
  engine = Engine.create();
  world = engine.world;
  pointGroup = createGroup()
  container2 = createSprite(450,400,400,160)
  container = new Container(200,300,500,200)
  line = new Line(128,450,75,4)
  line2 = new Line(128,350,75,4)
  line3 = new Line(704,450,75,4)
  line4 = new Line(704,350,75,4)
  mag1 = new Container(118,351,30,100)
  mag2 = new Container(758,351,30,100)
  turbineH = createSprite(455,400,2,160)

  turbine = createSprite(455,400,165,20)

  point0 = createSprite(339,400,10,10)
  point0.velocityX = 5
  
  point1 = createSprite(525,430,10,10)
  point1.velocityX = 5
  point2= createSprite(443,453,10,10)
  point2.velocityX = 5
  point3 = createSprite(539,473,10,10)
  point3.velocityX = 5
  point4 = createSprite(283,367,10,10)
  point4.velocityX = 5
  point5 = createSprite(366,467,10,10)
  point5.velocityX = 5

  Engine.run(engine);
}

function draw() {
  background("gray"); 
  Engine.update(engine);
  point0.shapeColor = "black"
  point1.shapeColor = "black"
  point2.shapeColor = "black"
  point3.shapeColor = "black"
  point4.shapeColor = "black"
  point5.shapeColor = "black"
  turbineH.shapeColor = "black"
  turbine.shapeColor = "green"

  
  //pointGroup.add(point0,point1,point2,point3,point4,point5)
  container2.display()
  container.display()
  line.display()
  line2.display()
  mag1.display()
  line3.display()
  line4.display()

  mag2.display()
  jump(point0)
  jump(point1)
  jump(point2)
  jump(point3)
  jump(point4)
  jump(point5)
  /*point0.display()
  point1.display()
  point2.display()
  point3.display()
  point4.display()
  point5.display()*/
  drawSprites()
  fill("black")
  textSize(17)
  text("TURBINE ⚙",420,405)
  text("MAGNETS →",5,411)
  text("← MAGNETS",798,411)
  text("◼ = MAGNETIC DUST", 900, 300)
  fill("white")
  textSize(40)
  text("💡",435,290)
}
 function jump(objectA){
  if(objectA.x >= 650){
    objectA.velocityX = objectA.velocityX*-1
  }
  if(objectA.x <= 250){
    
    if(objectA.velocityX < 0){
      objectA.velocityX = 5
    }
  }

}