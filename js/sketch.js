var ellipseWidthMultiplier = 20;
var ellipseHeightMultiplier = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  noFill();
  stroke(255);
}

// set global starting points for moving ellipses
var x = -400;
var y = -400;

function draw() {
  background(0);
  translate(width / 2, height / 2);

  // center stationary concentric circles
  for (var i = 1; i <= 30; i++) {
    ellipse(0, 0, i * ellipseWidthMultiplier, i * ellipseHeightMultiplier);
  }

  // horizontally moving concentric circles
  for (var i = 1; i <= 30; i++) {
    ellipse(x, 0, i * ellipseWidthMultiplier, i * ellipseHeightMultiplier);
  }
  x += 2;

  // vertically moving concentric circles
  for (var i = 1; i <= 30; i++) {
    ellipse(0, y, i * ellipseWidthMultiplier, i * ellipseHeightMultiplier);
  }
  y += 2;

  if (x > width) {
    x = -width;
  }
  if (y > 2 * height) {
    //timing of vertically moving circle is offset
    y = -height;
  }
}
