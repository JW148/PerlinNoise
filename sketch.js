p5.disableFriendlyErrors = true; // disables FES

let walkers = [];
let imgs = [];
let scalers = [];
let scaleX, scaleY;
let i = 0;
let arrIndex = 0;

let interval;

function preload() {
    imgs.push(loadImage("trippy.jpg"));
   imgs.push(loadImage("/images/trippy (2).jpg"));
   imgs.push(loadImage("/images/trippy (3).jpg"));
   imgs.push(loadImage("/images/trippy (4).jpg"));
   imgs.push(loadImage("/images/trippy (5).jpg"));
   imgs.push(loadImage("/images/trippy (6).jpg"));
   imgs.push(loadImage("/images/trippy (7).jpg"));
   imgs.push(loadImage("/images/trippy (8).jpg"));
   imgs.push(loadImage("/images/trippy (9).jpg"));
   imgs.push(loadImage("/images/trippy (10).jpg"));
   imgs.push(loadImage("/images/trippy (11).jpg"));
   imgs.push(loadImage("/images/trippy (12).jpg"));
   imgs.push(loadImage("/images/trippy (13).jpg"));
   imgs.push(loadImage("/images/trippy (14).jpg"));
   imgs.push(loadImage("/images/trippy (15).jpg"));
   imgs.push(loadImage("/images/trippy (16).jpg"));
   imgs.push(loadImage("/images/trippy (17).jpg"));
   imgs.push(loadImage("/images/trippy (18).jpg"));
}

function setup() {
  createCanvas(windowWidth, windowHeight, P2D);

  interval = setInterval(timer, 1000);

  for (let i = 0; i < 2000; i++) {
    walkers.push(new Walker(0 + int(random(0, 2000)), 1000 + int(random(0, 2000))));
    // walkers.push(new Walker(0 + i, 10000 + i));
  }

  for (let i of imgs) {
    scalers.push(createVector(width / i.width, height / i.height));
  }

}

function draw() {
  // image(img, 0,0);
  for (let w of walkers) {
    w.step();
  }
}

function timer() {
  i++;
  print(i);
  if (i == 30) {
    i = 0;
    // clear();
    if(arrIndex == imgs.length){
     arriIndex = 0; 
    }
    if(arrIndex < imgs.length){
      arrIndex++
    }
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