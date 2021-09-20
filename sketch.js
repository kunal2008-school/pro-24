const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber,rubber2,rubber3;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(150,100,50);
    rubber2 = new Rubber(175,100,50);
    rubber3 = new Rubber(200,100,50);
    iron = new Iron(200,300)
    iron1 = new Iron(220,300)
    iron2 = new Iron(250,300)
    stone = new Stone(250,300)
    stone1 = new Stone(275,300)
    stone2 = new Stone(300,300)
    stone3 = new Stone(325,300)
}

function draw(){
    background("lightBlue");
    Engine.update(engine);



    plane.display();
    hammer.display();
    rubber.display();
    rubber2.display();
    rubber3.display();
    iron.display()
    iron1.display()
    iron2.display()
    stone.display();
    stone1.display();
    stone2.display();
    stone3.display();
}