//
// window.onload = f1;
//
// function f1() {
var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;
// var Render = Matter.Render;
var engine;

var world;
var box2;
var groundOpts = {
  isStatic: true,
  restitution: 1,
  friction: 0
};

var boxes = [];
var box1 = Bodies.rectangle(200, 100, 20, 20);
var ground = Bodies.rectangle(100, 250, 250, 20, groundOpts);
var ground2 = Bodies.rectangle(200, 150, 250, 20, groundOpts);

// var box2 = new Box(100, 100, 80, 80);



function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  // World.add(world, boxes);
  World.add(world, box1);
  World.add(world, ground);
  World.add(world, ground2);

  Engine.run(engine);
}
// var render = Render.create({
//   element: document.body,
//   engine: engine
// });

// Render.run(render);


//
// function Box(x,y,w,h) {
//   this.body = Bodies.rectangle(x,y,w,h);
//   this.w = w;
//   this.h = h;
//   console.log(world, this.body);
//   //this seems to be source of trouble:
//   // World.add(world, this.body);
//   this.show = function() {
//     var pos = this.body.position;
//     var angle = this.body.angle;
//     push();
//     translate(pos.x, pos.y);
//     rotate(angle);
//     rectMode(CENTER);
//     strokeWeight(1);
//     stroke(255);
//     fill(127);
//     rect(0,0,this.w,this.h);
//     pop();
//   };
//
// }

// }


function draw() {
  background(251);
  for (var i = 0; i < boxes.length; i++) {
    // console.log(boxes[i]);
    // World.add(world, box[i]);
      rect(boxes[i].position.x, boxes[i].position.y, 20, 20);

  }
  // box2.show();
  rect(box1.position.x,box1.position.y, 20, 20);
  // rotate(ground.angle);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 250, 20);
  // rotate(ground2.angle);
  rectMode(CENTER);
  rect(ground2.position.x, ground2.position.y, 250, 20);

  // console.log(box2);

  // if (box2 !== undefined) {
  //   // console.log(box2);
  //   rect(box2.position.x,box2.position.y, 20, 20);
  //
  // }

  // Engine.update(engine);
}

function mouseDragged() {
  box2 = Bodies.rectangle(mouseX, mouseY, 20, 20, {restitution: 1, friction: 0});
  World.add(world, box2);
  boxes.push(box2);
  // console.log(boxes);
  // console.log(box2);
  // console.log(world);
}
