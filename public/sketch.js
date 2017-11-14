
var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;
var engine;

var world;
var box2;
var cannonball;
var groundOpts = {
  isStatic: true,
  restitution: 1,
  friction: 0,
  angle: 0.2
};

var boxes = [];
var circles = [];
var cannonballs = [];
var box1 = Bodies.rectangle(200, 100, 20, 20);
var omega = Bodies.circle(500, 500, 100, {isStatic: true});
var ground = Bodies.rectangle(100, 250, 250, 20, groundOpts);
var ground2 = Bodies.rectangle(200, 150, 250, 20, groundOpts);
var cannon = Bodies.rectangle(100, 400, 40, 15, {isStatic: true});

function setup() {
  createCanvas(1000,1000);
  engine = Engine.create();
  world = engine.world;
  World.add(world, [box1, ground, ground2, cannon, omega]);
  Engine.run(engine);
}
var x = 0;

// function keyReleased() {
//   Matter.Body.setAngle(cannon, x);
//   console.log(cannon);
// }

//this must only work without p5:
// var mouseConstraint = Matter.MouseConstraint.create(engine, { //Create Constraint
//   element: document.getElementById('world'),
//   constraint: {
//
//     stiffness:0.8
//   }
// });
// Matter.World.add(world, mouseConstraint);

function mousePressed() {
  console.log('u pressin it dog', mouseX, mouseY);
  // cannonball = Bodies.circle(cannon.position.x + 20, cannon.position.y + 20, 15, {restitution: 1, friction: 0});
    cannonball = Bodies.circle(cannon.position.x, cannon.position.y - 80, 7.5, {restitution: 1, friction: 0});
    cannonball2 = Bodies.circle(cannon.position.x, cannon.position.y - 60, 7.5, {restitution: 1, friction: 0});
  World.add(world, [cannonball, cannonball2]);
  //wait we can't just hard code a velocity...needs to depend on angle:
  // Matter.Body.setVelocity(cannonball, {x: 10, y: -15});

    // Matter.Body.setVelocity(cannonball, {x: 10*cos(cannon.angle), y: -10*sin(cannon.angle)});

    var constraint = Matter.Constraint.create({
      bodyA: cannonball,
      bodyB: cannonball2,
      length: 20,
      stiffness: 0.4
    });
    World.add(world, constraint);

  cannonballs.push(cannonball);
  cannonballs.push(cannonball2);
} //end MOUSEPRESSED

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
  for (var k = 0; k < cannonballs.length; k++) {
    ellipse(cannonballs[k].position.x, cannonballs[k].position.y, 15);
  }

  rect(box1.position.x,box1.position.y, 20, 20);
  ellipse(omega.position.x, omega.position.y, 200);

//this is how we get around the angle rotation issue, jeez it sure is cumbersome:
translate(cannon.position.x, cannon.position.y);
  rotate(cannon.angle);
  rectMode(CENTER);
  rect(0,0, 40, 15);
  rotate(-cannon.angle);
  translate(-cannon.position.x, -cannon.position.y);

  translate(ground.position.x, ground.position.y);
  rotate(ground.angle);
  rectMode(CENTER);
  rect(0,0, 250, 20);
  rotate(-ground.angle);
  translate(-ground.position.x, -ground.position.y);

  translate(ground2.position.x, ground2.position.y);
  rotate(ground2.angle);
  rectMode(CENTER);
  rect(0,0, 250, 20);
  rotate(-ground2.angle);
  translate(-ground2.position.x, -ground2.position.y);

  //ok so we can *draw* curved lines at least...
//   stroke(100);
// curve(1000, 500, 500, 450, 100, 200, 50, -200);

} //end DRAW

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

// Working:
// Matter.Body.translate(box1, {x:10, y:0});
// Matter.Body.setVelocity( box1, {x: 10, y: -10});
// Matter.Body.setAngularVelocity( box1, Math.PI/6);
// Matter.Body.applyForce(box1, {x: box1.position.x, y: box1.position.y}, {x: 0.02, y: -0.05});
