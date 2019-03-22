// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Array of Particles, multiple forces

var person;

function preload() {
  img = loadImage('https://i.imgur.com/EIGOHAU.png');
  //theFont = loadFont('libraries\theFont\GermaniaOne-Regular.ttf');
}
function setup() {

  createCanvas(640, 360);
  person = new Person();
}

function keyPressed() {
  if (key == ' ' && person.pos.y > 345) {
    var jump = createVector(0, -5.2);
    person.applyForce(jump);
  }
}

var x = 400;

function draw() {
  background(43, 47, 51);
  textSize(30);
  //textFont(theFont);
  fill(123, 204, 189);
  text("Welcome to the..", 20, 60);
textSize(40);
  fill(157, 192, 249);
  text("Neverendng-non-collision game!!", 20, 100);
image(img, -100, 100)
  if (key == ' ') {



    background(51);
    var gravity = createVector(0.005, 0.180);
    person.applyForce(gravity);
    translate(-person.pos.x + 20, 0);
    person.update();
    person.edges();
    person.display();
    Obstacle();

  }




}
