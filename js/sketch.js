let data = [];
let mult = 0.005;
function setup() {
  createCanvas(windowWidth,windowHeight);
  let howMuch = 25;
  let space = width /howMuch;
  background(30)
  for(let x=0;x<width;x+=space){
    for(let y=0;y<height;y+=space){
      let p = createVector(x+random(-10,10),y+random(-10,10));
      data.push(p);
    }
  }
}

function draw() {
  noStroke();
  fill(255)
  for(let i=0;i<data.length;i++){
    let angle=map(noise(data[i].x*mult,data[i].y*mult),0,1,0,720);
    data[i].add(createVector(cos(angle),sin(angle)))

    ellipse(data[i].x,data[i].y,1)
  }
}