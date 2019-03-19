// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Array of Particles, multiple forces

var person;


function setup() {
  createCanvas(640, 360);
  person = new Person();

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

  translate(-person.pos.x +20, 0);
  person.update();
  person.edges();
  person.display();
  fill(255, 0, 100);
  rect(x, height - 50, 30, 50);
  rect(x - 100, height - 50, 30, 50);
  rect(x + 100, height - 50, 40, 50);
  rect(x + 334, height - 50, 20, 50);
  rect(x + 564, height - 50, 30, 50);
  rect(x + 775, height - 50, 40, 50);
  rect(x + 986, height - 50, 40, 50);
  rect(x + 1097, height - 50, 50, 50);
  rect(x + 1308, height - 50, 20, 50);
  rect(x + 1687, height - 50, 30, 50);

  rect
}
