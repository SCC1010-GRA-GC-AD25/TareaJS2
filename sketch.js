function preload() {
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(800,800)
}

function draw() {
  background(220);
    fill(255, 220, 180);
  ellipse(200, 120, 80, 80);

  fill(0);
  ellipse(185, 115, 8, 8);
  ellipse(215, 115, 8, 8);
  arc(200, 135, 30, 20, 0, PI);

  fill(255, 100, 150);
  triangle(200, 160, 160, 250, 240, 250);

  stroke(255, 220, 180);
  strokeWeight(6);
  line(160, 180, 120, 200); 
  line(240, 180, 280, 200); 

  stroke(255, 220, 180);
  strokeWeight(8);
  line(185, 250, 185, 300);
  line(215, 250, 215, 300);

  stroke(0);
  line(175, 300, 195, 300);
  line(205, 300, 225, 300);
}