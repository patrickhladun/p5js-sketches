function setup() {
  createCanvas(windowWidth, windowHeight);
  background(30);

  // ADD, DARKEST, LIGHTEST, DIFFERENCE, EXCLUSION, MULTIPLY, SCREEN, REMOVE, HARD_LIGHT, SOFT_LIGHT, DODGE, BURN, SUBTRACT
  blendMode(LIGHTEST);
}

function draw() {
  const red = random(0, 255);
  const green = random(0, 255);
  const blue = random(0, 255);

  const x = random(0, windowWidth);
  const y = random(0, windowHeight);

  noStroke();
  fill(red, green, blue);
  ellipse(x, y, 50, 50);
}
