
//NEXT TO TRY:
//-spinners --- wait could we just set angularVelocity..?! and prob airFriction to zero?
//-flyers
//-zones of gravity
//-uh, portals
//-oscillating radius, or oscillating flyers
//-playing with constraints
//-playing with mouse manipulation
//-look into curved walls
//just search through document for '!'s to find ideas lol
//be able to choose your skin: ocean, space -- you could change obstacles, or gravity!
//make STICKIES: if ball touches them they stick to it
//different consistencies of the background liquid
//golf at the trump tower
//could do a slingshot

//what was my issue to .toFixed? why is the multiplying and dividing thing better?


var x = 0;
var z = 0;
var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;
var engine;
var Mouse = Matter.Mouse;
var MouseConstraint = Matter.MouseConstraint;

var world;
var box2;
var cannonball;
var groundOpts = {
  isStatic: true,
  restitution: 1,
  friction: 0,
  angle: 0.2
};

var boxXs = [];
var mConstraint;
var boxes = [];
var circles = [];
var cannonballs = [];
var grounds = [];
var box1 = Bodies.rectangle(200, 100, 20, 20);
var omega = Bodies.circle(500, 500, 100, {isStatic: true});
var ground = Bodies.rectangle(100, 250, 250, 20, groundOpts);
var ground2 = Bodies.rectangle(300, 150, 250, 20, {isStatic: true});
var cannon = Bodies.rectangle(100, 400, 40, 15, {isStatic: true, restitution: 1});

//attempt at moving bodies i.e. flyers:
for (var k=0; k<10; k++) {
  var ground3 = Bodies.rectangle(500, 50*k, 100, 20);
  grounds.push(ground3);
}


//oooooooh you could do something dope like on deleting a body, make it just fall from the world!!
function setup() {
  var canvas = createCanvas(1000,1000);
  engine = Engine.create();
  //wow, super weird, this seems to make the cannonballs have less force....which is odd:
  // engine.timing.timeScale = 0.5;

  world = engine.world;

  // Matter.Body.applyForce( ground2, {x: ground2.position.x + 50, y: ground2.position.y}, {x: 0, y: 0.02});



//ok nice, there is a super smooth way to disable gravity:
//omg you could like hit a bucket and then it would swap gravity dog!
//you could also probably cheat the engine into simulating gravitational pull by planets like this..?
//is low gravity just like slow time?
  // world.gravity.y = -0.5;
  World.add(world, [box1, ground, ground2, cannon, omega]);
  Engine.run(engine);

  for (var l=0; l<10; l++) {
    World.add(world, grounds[l]);
  }

  //investigage why elt isn't working:
  var canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  var options2 = {
    mouse: canvasmouse
  };
  mConstraint = MouseConstraint.create(engine, options2);
  World.add(world, mConstraint);


} //end SETUP


// function keyReleased() {
//   Matter.Body.setAngle(cannon, x);
//   console.log(cannon);
// }

//this must only work without p5??:
// var mouseConstraint = Matter.MouseConstraint.create(engine, { //Create Constraint
//   element: document.getElementById('world'),
//   constraint: {
//
//     stiffness:0.8
//   }
// });
// Matter.World.add(world, mouseConstraint);


//difference from mouseClicked?
function mousePressed() {
  console.log('u pressin it dog', mouseX, mouseY);
  //this shows cannonball in action:
  cannonball = Bodies.circle(cannon.position.x + 40*cos(cannon.angle), cannon.position.y + 40*sin(cannon.angle), 15, {restitution: 1, friction: 0});

  //these show Constraints at work:
  // cannonball = Bodies.circle(cannon.position.x, cannon.position.y - 80, 7.5, {restitution: 1, friction: 0});
  // cannonball2 = Bodies.circle(cannon.position.x, cannon.position.y - 60, 7.5, {restitution: 1, friction: 0});
  // World.add(world, [cannonball, cannonball2]);
  World.add(world, cannonball);

  //wait we can't just hard code a velocity...needs to depend on angle:
  // Matter.Body.setVelocity(cannonball, {x: 10*cos(cannon.angle), y: -10*sin(cannon.angle)});
  Matter.Body.applyForce(cannonball, {x: cannon.position.x, y: cannon.position.y}, {x: 0.04*cos(cannon.angle), y: 0.04*sin(cannon.angle)});
  // console.log(canvas.elt);
  //ahhhhhhh it would be super dope if we made the cannon recoil a bit every time it was fired!


  //for the Constrained balls:
  // Matter.Body.setVelocity(cannonball, {x: 0, y: 20});
  // Matter.Body.setVelocity(cannonball, {x: 10*cos(cannon.angle), y: -10*sin(cannon.angle)});

  // var constraint = Matter.Constraint.create({
  //   bodyA: cannonball,
  //   bodyB: cannonball2,
  //   length: 20,
  //   stiffness: 0.4
  // });
  // World.add(world, constraint);

  cannonballs.push(cannonball);
  // cannonballs.push(cannonball2);
} //end MOUSEPRESSED

function draw() {

  //ok..doesn't really work as far as drawing the line goes:
  if (mConstraint.body) {
    console.log(mConstraint);
    var pos = mConstraint.body.position;
    var offset = mConstraint.constraint.pointA;
    var m = mConstraint.mouse.position;
    stroke(0, 255, 0);
    ellipse(pos.x, pos.y, 30, 30);
    stroke(0,0,0);
  }

//SPINNER!
  Matter.Body.setAngle(ground2, z);
function rotateG2() {
  z += 0.04;
}
rotateG2();

//flyers:
for (var u=0; u<10; u++) {
  // console.log(grounds[u]);
  Matter.Body.setVelocity(grounds[u], {x: -10, y: 0});

}

  background(251);
  if (keyIsDown(SHIFT)) {
    x -= 0.05;
    Matter.Body.setAngle(cannon, x);

  }
  // console.log(x);
  // for (var i = 0; i < boxes.length; i++) {
  //     rect(boxes[i].position.x, boxes[i].position.y, 20, 20);
  // }
  for (var j = 0; j < circles.length; j++) {
    ellipse(circles[j].position.x, circles[j].position.y, circles[j].size);
  }
  for (var o = 0; o < grounds.length; o++) {
    rect(grounds[o].position.x, grounds[o].position.y, 100, 20);
  }
  for (var k = 0; k < cannonballs.length; k++) {
    ellipse(cannonballs[k].position.x, cannonballs[k].position.y, 15);
  }

  //for adding bodies by click:
  // for (var l = 0; l < boxXs.length; l++) {
  //   rect(boxXs[l].position.x,boxXs[l].position.y, 50, 50);
  //
  // }


  rect(box1.position.x,box1.position.y, 20, 20);
  rect(ground3.position.x,ground3.position.y, 100, 20);

  ellipse(omega.position.x, omega.position.y, 200);

  //this is how we get around the angle rotation issue, jeez it sure is cumbersome:
  //maybe we can pass a point to rotate, obviating the outer 2 steps...:
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

//let's turn this off while we play with dragging and dropping:
// function mouseDragged() {
//   // box2 = Bodies.rectangle(mouseX, mouseY, 20, 20, {restitution: 1, friction: 0});
//   var ran = random(5, 20);
//   circle1 = Bodies.circle(mouseX, mouseY, ran/2, {restitution: 1, friction: 0});
//   circle1.size = ran;
//   // World.add(world, box2);
//   World.add(world, circle1);
//   // boxes.push(box2);
//   circles.push(circle1);
//
// }

function mouseClicked() {
  // Matter.Body.applyForce(box1, {x: box1.position.x, y: box1.position.y}, {x: 0.02, y: -0.05});
  // Matter.Body.applyForce(box1, {x: box1.position.x, y: box1.position.y}, {x: 0.01, y: -0.01});

    //for add bodies to world on click:
    // boxX = Bodies.rectangle(mouseX, mouseY, 50, 50, {isStatic: true});
    // World.add(world, boxX);
    // boxXs.push(boxX);
}

// Working:
// Matter.Body.translate(box1, {x:10, y:0});
// Matter.Body.setVelocity( box1, {x: 10, y: -10});
// Matter.Body.setAngularVelocity( box1, Math.PI/6);
// Matter.Body.applyForce(box1, {x: box1.position.x, y: box1.position.y}, {x: 0.02, y: -0.05});
