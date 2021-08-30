


function setup() {
  createCanvas(800,400);
  

  angleMode(DEGREES)

}

function draw() {
  background("black");  
  translate(200, 200)
  rotate(-90)

  hr = hour();
  mn = minute();
  sc = second();

 console.log(sc)
  
  scAngle = map(sc, 0, 60, 0, 360)
  mnAngle = map(mn, 0, 60, 0, 360)
  hrAngle = map(hr % 12, 0, 12,0, 360)
  
  push();
  rotate(scAngle);
  stroke("red");
  strokeWeight(7);
  line(0, 0, 125, 0);
  pop();

  push();
  rotate(mnAngle);
  stroke("white");
  strokeWeight(7);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hrAngle);
  stroke("blue");
  strokeWeight(7);
  line(0, 0, 50, 0);
  pop();



  strokeWeight(7);
  noFill();
  stroke("red")
  arc(0, 0, 300, 300, 0, scAngle)
  stroke("white");
  arc(0, 0, 280, 280, 0, mnAngle)
  stroke("blue");
  arc(0, 0, 260, 260, 0, hrAngle);


  drawSprites();
}