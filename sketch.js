// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Array of Particles, multiple forces

var person;
var obstacle = [];
var i = 0;

function setup() {
  createCanvas(640, 360);
  person = new Person();
  /*  for (i = 0; i < 2; i++) {
    obstacle[i] = new Obstacle();
  }      */ // enable for obstacle generation
}

function keyPressed() {
  if (key == ' ' && person.pos.y > 355) {
    var jump = createVector(0, -5.2);

    person.applyForce(jump);

  }

}
var x = 400;

function draw() {
  background(51);

  var gravity = createVector(0.005, 0.15);
  person.applyForce(gravity);

  translate(-person.pos.x + 20, 0);
  person.update();
  person.edges();
  person.display();
  var rectt = 10;
  fill(255, 0, 100);
  rect(rectt * 30, height - 50, 30, 50);
  rect(rectt * 45, height - 50, 30, 50);
  rect(rectt * 60, height - 50, 30, 50);
  rect(rectt * 75, height - 50, 30, 50);
  rect(rectt * 90, height - 50, 30, 50);
  rect(rectt * 105, height - 50, 30, 50);
  rect(rectt * 130, height - 50, 30, 50);
  rect(rectt * 145, height - 50, 30, 50);
  rect(rectt * 160, height - 50, 30, 50);
  //obstacle[i].display(); //enable for obstacle generation


}
