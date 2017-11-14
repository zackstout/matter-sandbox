
var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;
var engine;

var world;
var box2;
var groundOpts = {
  isStatic: true,
  restitution: 1,
  friction: 0
};

var boxes = [];
var circles = [];
var box1 = Bodies.rectangle(200, 100, 20, 20);
var ground = Bodies.rectangle(100, 250, 250, 20, groundOpts);
var ground2 = Bodies.rectangle(200, 150, 250, 20, groundOpts);

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  World.add(world, box1);
  World.add(world, ground);
  World.add(world, ground2);

  Engine.run(engine);
}


function draw() {
  background(251);
  for (var i = 0; i < boxes.length; i++) {
      rect(boxes[i].position.x, boxes[i].position.y, 20, 20);
  }
  for (var j = 0; j < circles.length; j++) {
    ellipse(circles[j].position.x, circles[j].position.y, circles[j].size);
  }
  rect(box1.position.x,box1.position.y, 20, 20);
  // rotate(ground.angle);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 250, 20);
  // rotate(ground2.angle);
  rectMode(CENTER);
  rect(ground2.position.x, ground2.position.y, 250, 20);

}

function mouseDragged() {
  // box2 = Bodies.rectangle(mouseX, mouseY, 20, 20, {restitution: 1, friction: 0});
  var ran = random(5, 20);
  circle1 = Bodies.circle(mouseX, mouseY, ran/2, {restitution: 1, friction: 0});
  circle1.size = ran;
  // World.add(world, box2);
  World.add(world, circle1);
  // boxes.push(box2);
  circles.push(circle1);

}

function mouseClicked() {
  //this now works as well! ahahaa!!!
  Matter.Body.applyForce(box1, {x: box1.position.x, y: box1.position.y}, {x: 0.02, y: -0.05});
  // this works:
  // Matter.Body.translate(box1, {x:10, y:0});
  //and so does this!!!:
  // Matter.Body.setVelocity( box1, {x: 10, y: -10});
  //this too:
  // Matter.Body.setAngularVelocity( box1, Math.PI/6);

}
