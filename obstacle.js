function Obstacle() {
  this.x = 300;

  this.display = function() {
    fill(255, 0, 100);
    rect(this.x, height - 50, 30, 50);
  };

}
