p5.disableFriendlyErrors = true; // disables FES

let walkers = [];
let imgs = [];
let scalers = [];
let scaleX, scaleY;
let i = 0;
let arrIndex = 0;

let interval;

function preload() {
  // imgs.push(loadImage("image "));
  // imgs.push(loadImage("trippy (2).jpg"));
  // imgs.push(loadImage("trippy (3).jpg"));
  // imgs.push(loadImage("trippy (4).jpg"));
  // imgs.push(loadImage("trippy (5).jpg"));
  // imgs.push(loadImage("trippy (6).jpg"));
  // imgs.push(loadImage("trippy (7).jpg"));
  // imgs.push(loadImage("trippy (8).jpg"));
  // imgs.push(loadImage("trippy (9).jpg"));
  // imgs.push(loadImage("trippy (10).jpg"));
  // imgs.push(loadImage("trippy (11).jpg"));
  // imgs.push(loadImage("trippy (12).jpg"));
  // imgs.push(loadImage("trippy (13).jpg"));
  // imgs.push(loadImage("trippy (14).jpg"));
  // imgs.push(loadImage("trippy (15).jpg"));
  // imgs.push(loadImage("trippy (16).jpg"));
  // imgs.push(loadImage("trippy (17).jpg"));
  // imgs.push(loadImage("trippy (18).jpg"));
  for(i=1; i<19; i++){
    imgs.push(loadImage(`images\image ${i}.jpg`));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight, P2D);
  background(50);

  interval = setInterval(timer, 30000);

  for (let i = 0; i < 2000; i++) {
    walkers.push(new Walker(0 + int(random(0, 2000)), 1000 + int(random(0, 2000))));
    // walkers.push(new Walker(0 + i, 10000 + i));
  }

  for (let i of imgs) {
    scalers.push(createVector(width / i.width, height / i.height));
  }

}

function draw() {
  for (let w of walkers) {
    w.step();
  }
}

function timer() {
  if (arrIndex < imgs.length - 1) {
    arrIndex++
  } else {
    arrIndex = 0;
  }
}

class Walker {
  constructor(xoff, yoff) {

    this.x;
    this.y;

    this.xoff = xoff;
    this.yoff = yoff;
  }

  step() {
    noStroke();
    this.x = map(noise(this.xoff), 0, 1, 0, width);
    this.y = map(noise(this.yoff), 0, 1, 0, height);

    let px = floor(this.x / scalers[arrIndex].x);
    let py = floor(this.y / scalers[arrIndex].y);
    let col = imgs[arrIndex].get(px, py);
    fill(col[0], col[1], col[2], 255);
    ellipse(this.x, this.y, 1, 1);

    this.xoff += 0.0015;
    this.yoff += 0.0015;
  }

}