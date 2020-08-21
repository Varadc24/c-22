const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390, 400,20,ground_options);
    World.add(world,ground);
    var balloptions = {
    restitution:1.0
    }
    ball = Bodies.circle(200, 200, 25, balloptions);
    World.add(world,ball);

    console.log(ground);

}

function draw(){
    background(0);
    Engine.update(engine);
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y,25, 25);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
}