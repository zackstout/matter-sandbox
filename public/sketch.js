
var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;
var engine;

var world;
var box2;
var groundOpts = {
  isStatic: true,
  restitution: 1,
  friction: 0,
  // angle: 0.2
};

var boxes = [];
var circles = [];
var box1 = Bodies.rectangle(200, 100, 20, 20);
var ground = Bodies.rectangle(100, 250, 250, 20, groundOpts);
var ground2 = Bodies.rectangle(200, 150, 250, 20, groundOpts);
var cannon = Bodies.rectangle(100, 400, 40, 15, {isStatic: true});

function setup() {
  createCanvas(1000,1000);
  engine = Engine.create();
  world = engine.world;
  World.add(world, [box1, ground, ground2, cannon]);
  // World.add(world, ground);
  // World.add(world, ground2);

  Engine.run(engine);
}
var x = 0;

function keyReleased() {
  Matter.Body.setAngle(cannon, x);
  console.log(cannon);
}

function draw() {
  background(251);
  if (keyIsDown(SHIFT)) {
    x += 0.02;
    Matter.Body.setAngle(cannon, x);

  }
  // console.log(x);
  for (var i = 0; i < boxes.length; i++) {
      rect(boxes[i].position.x, boxes[i].position.y, 20, 20);
  }
  for (var j = 0; j < circles.length; j++) {
    ellipse(circles[j].position.x, circles[j].position.y, circles[j].size);
  }
  rect(box1.position.x,box1.position.y, 20, 20);

translate(cannon.position.x, cannon.position.y);
  rotate(cannon.angle);
  rectMode(CENTER);
  rect(0,0, 40, 15);
  rotate(-cannon.angle);
  translate(-cannon.position.x, -cannon.position.y);

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


//get angle working
//forget about them once off screen
//power up force with mouse pressdown
//or maybe change angle like that, and power up with a slider?
//how would you do the flipper? like a somewhat static body?
//animate a cannon that illustrates your angle
//animate moving obstacles
//animate static obstacles (done pretty much)
//can we overlay a parabolic path? or make a tangent flash when hitting a curved obstacle?
//make some surfaces be "extra" bouncy and impart force, like portal 2
//just making 2d portal would be fucking dope ....just do that??
//how to make a parabolic wall?
