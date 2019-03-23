// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Array of Particles, multiple forces


var person;
var ticks = 0;
function preload() {
  img = loadImage('https://i.imgur.com/dpqfSAb.png');
  imgObs = loadImage('https://i.imgur.com/2zlFCEY.png');
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
  text("Neverending-non-collision game!!", 20, 100);
  image(img, 400, 100, 250, 250);
  image(imgObs, 0, 130, 200, 200);
  angleMode(DEGREES)
  push();
  rotate(10);
  noStroke();
  fill(87, 92, 96);
  textSize(20);
  text("(Press 'Space' to start!!)", 250, 170);

  if (key == ' ') {


      pop();
      background(51);
      var gravity = createVector(0.005, 0.180);
      person.applyForce(gravity);
      translate(-person.pos.x + 20, 0);
      person.update();
      person.edges();
      person.display();
      Obstacle();
      noStroke();
      fill(87, 92, 96);
      textSize(20);
      text("Press 'Space' to jump", 250, 170);
      text("You can press any key to pause", 800, 170);
      text("Sadly, I haven't implemented collisions yet", 1500, 170);
      text("Made by Lior, so there's that", 3000, 170);
       ticks++;
       console.log(ticks);
       if (ticks > 2000) {
         translate(0, 0);
         background(43, 47, 51);
         fill(87, 92, 96);
         textSize(20);
         text("Thanks for playing!\n You've played for about 30 sec according to my calculations.", person.pos.x, 170);

       }


  }




}
