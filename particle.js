// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Array of Particles, multiple forces

function Person() {
  this.pos = createVector(50, height);
  this.vel = createVector(1, 0);
  this.acc = createVector(0, 0);

  this.applyForce = function(force) {
    this.acc.add(force);
  };

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  };

  this.display = function() {
    fill(255, 150);
    stroke(255);
    rect(this.pos.x, this.pos.y - 50, 20, 50);
  };

  this.edges = function() {
    if (this.pos.y > height) {
      this.vel.y *= 0;
      this.pos.y = height;


    }


  };
}



function Obstacle() {
  var rectt = 10;
  for (i = 0; i < 1523; i++) {
    fill(161, 97, 198);
    rect(rectt * 30 * i,height - 50 , 30, 50);
  }
}


function gameName()  {
  fill(157, 192, 249);
  text("Neverendng-non-collision game!", 10, 30);


}
