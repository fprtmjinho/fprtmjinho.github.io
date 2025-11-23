let t = 0;

function setup() {
  createCanvas(300, 200);  // 전체 0.5배
  colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
  background(230, 30, 100);

  let pulse1 = 20 * sin(frameCount * 0.02) * 0.5;
  let pulse2 = 15 * sin(frameCount * 0.025 + 1) * 0.5;
  let pulse3 = 25 * sin(frameCount * 0.018 + 2) * 0.5;

  let col1 = color((frameCount % 360), 80, 80, 80);
  let col2 = color((frameCount * 1.5) % 360, 70, 90, 80);
  let col3 = color((frameCount * 2) % 360, 60, 90, 80);

  fill(col1);
  stroke(200, 70, 80);
  strokeWeight(3 * 0.5);
  ellipse(180 * 0.5, 200 * 0.5, (280 * 0.5) + pulse1, (280 * 0.5) + pulse1);

  fill(col2);
  stroke(220, 50, 80);
  ellipse(280 * 0.5, 180 * 0.5, (200 * 0.5) + pulse2, (200 * 0.5) + pulse2);

  fill(col3);
  stroke(120, 60, 60);
  ellipse(400 * 0.5, 250 * 0.5, (220 * 0.5) + pulse3, (220 * 0.5) + pulse3);

  // Rectangle
  push();
  translate(300 * 0.5, 200 * 0.5);
  rotate(PI / 6 + sin(frameCount * 0.01) * 0.3);
  fill(50, 20, 90, 80);
  stroke(40, 50, 80);
  rect(-100 * 0.5, -50 * 0.5, 200 * 0.5, 100 * 0.5);
  pop();

  let triShift = sin(frameCount * 0.02) * 10 * 0.5;

  // Left triangle
  fill(260, 60, 80, 70);
  stroke(250, 60, 60);
  triangle(
    100 * 0.5, (350 * 0.5) + triShift,
    200 * 0.5, (100 * 0.5) + triShift,
    300 * 0.5, (350 * 0.5) + triShift
  );

  // Right triangle
  fill(320, 60, 80, 60);
  stroke(300, 60, 60);
  triangle(
    250 * 0.5, (350 * 0.5) - triShift,
    400 * 0.5, (50 * 0.5) - triShift,
    500 * 0.5, (350 * 0.5) - triShift
  );

  drawSmallShapes();
}

function drawSmallShapes() {
  let shapes = [
    {type:"e", x:50, y:50},
    {type:"r", x:80, y:60},
    {type:"e", x:120, y:80},
    {type:"r", x:160, y:90},
    {type:"e", x:200, y:70},
    {type:"r", x:240, y:60},
    {type:"e", x:280, y:100},
    {type:"r", x:320, y:120},
    {type:"e", x:360, y:140},
    {type:"r", x:400, y:160},
    {type:"e", x:440, y:180},
    {type:"r", x:480, y:200},
    {type:"e", x:520, y:220},
    {type:"r", x:560, y:240},
    {type:"e", x:100, y:300},
    {type:"r", x:150, y:320},
    {type:"e", x:200, y:340},
    {type:"r", x:250, y:360},
    {type:"e", x:300, y:380},
    {type:"r", x:350, y:360}
  ];

  shapes.forEach((s, i) => {

    let x = s.x * 0.5;
    let y = s.y * 0.5;

    let dx = sin(frameCount * 0.05 + i) * 3 * 0.5;
    let dy = cos(frameCount * 0.05 + i) * 3 * 0.5;

    let c = color((frameCount * 2 + i * 15) % 360, 50 + i % 50, 80, 70);
    fill(c);
    stroke(0, 0, 30);

    let size = (20 + sin(frameCount * 0.03 + i) * 5) * 0.5;

    if (s.type === "e") {
      ellipse(x + dx, y + dy, size);
    } else {
      rect(x + dx, y + dy, size);
    }
  });
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveGif('myCharacter', 5, { fps: 10 });
  }
}


