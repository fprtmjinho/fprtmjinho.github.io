let headX = 0;
let faceExpression = "normal";
let blink = false;

function setup() {
  createCanvas(600, 400);
  frameRate(30);
}

function draw() {
  background(230);

  fill(20);
  noStroke();
  beginShape();
  vertex(210 + headX, 130);
  bezierVertex(210 + headX, 60, 390 + headX, 60, 390 + headX, 130);
  bezierVertex(390 + headX, 190, 210 + headX, 190, 210 + headX, 130);
  endShape(CLOSE);

  fill(255, 224, 189);
  stroke(200, 170, 150);
  strokeWeight(2);
  beginShape();
  vertex(240 + headX, 130);
  bezierVertex(230 + headX, 180, 240 + headX, 260, 280 + headX, 280);
  bezierVertex(320 + headX, 300, 370 + headX, 240, 360 + headX, 130);
  endShape(CLOSE);

  fill(255, 224, 189);
  noStroke();
  ellipse(225 + headX, 200, 25, 40);
  ellipse(375 + headX, 200, 25, 40);

  noFill();
  stroke(0);
  strokeWeight(2);
  ellipse(260 + headX, 180, 50, 50);
  ellipse(340 + headX, 180, 50, 50);
  line(285 + headX, 180, 315 + headX, 180);

  fill(0);
  noStroke();
  if (frameCount % 60 < 5) blink = true;
  else blink = false;

  if (blink) {
    rect(255 + headX, 180, 10, 2);
    rect(335 + headX, 180, 10, 2);
  } else {
    ellipse(260 + headX, 180, 10, 10);
    ellipse(340 + headX, 180, 10, 10);
  }

  stroke(120, 80, 60);
  strokeWeight(2);
  line(300 + headX, 180, 295 + headX, 210);

  noFill();
  stroke(100, 50, 50);
  strokeWeight(2);
  if (faceExpression === "smile") {
    arc(300 + headX, 240, 40, 20, 0, PI);
  } else if (faceExpression === "surprise") {
    ellipse(300 + headX, 245, 15, 20);
  } else {
    arc(300 + headX, 235, 35, 15, 0, PI);
  }

  noStroke();
  fill(255, 224, 189);
  rect(280 + headX, 260, 40, 40, 10);

  fill(40);
  rect(220 + headX, 300, 160, 120, 30);
  fill(180, 190, 255);
  rect(240 + headX, 300, 120, 120, 20);
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveGif('myCharacter', 10);
  } else if (keyCode === LEFT_ARROW) {
    headX -= 10;
  } else if (keyCode === RIGHT_ARROW) {
    headX += 10;
  }
}

function mousePressed() {
  if (faceExpression === "normal") {
    faceExpression = "smile";
  } else if (faceExpression === "smile") {
    faceExpression = "surprise";
  } else {
    faceExpression = "normal";
  }
}


