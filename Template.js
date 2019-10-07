new p5();


class floating_object {
  constructor(x,y) {
    
    this.height = random(50, 150);
    this.width = random(50, 150);
    this.radius = random(50,100);


    this.shape = random(["ellipse", "rect", "triangle"]);
    this.location = createVector(x,y);
    
    this.speed = random(0.5,1);



  }

  move(Direction, Dtime) {
    this.location.add(Direction * this.speed * Dtime);
    console.log(this.location);

  }

  display() {
    fill("#fff");
    ellipse(this.location.x, this.location.y, this.radius, this.radius);
  }

}







let colors = ["#fff6a5", "#fbc99d", "#ed1250", "#ff6464", "#f1f0cf", "#3c9d9b", "#132743"];
let texts = [
  "生",
  "日",
  "快",
  "乐"
];





let object = new floating_object();


function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  angleMode(DEGREES);

  background("black");

  gen_background();

  frameRate(20);

}

// Image Twisting Code adapted from https://www.openprocessing.org/sketch/437875
let img,s = 50,a = 1,b = 10;
function draw() {
  if(a == 1){
    s+=b;
  }else{
   s-=b; 
  }
  if(s > 2500){
    a = 0;
  }
  if(s < 50){
    a = 1;
  }
  
  //randomSeed(width);
  noStroke();
  
  for(let i = 0;i < 10;i++){
    textSize(random(10,80));
    fill(random(colors));
    text(random(texts),random(windowWidth/7, windowWidth * 5/7),random(windowHeight/5 + 50,windowHeight/2 + windowHeight/4));
  }
  img = get(width/2-(s/2),height/2-(s/2),s,s);
  //img = get(width/random(50)-(s/random(50)),height/random(5)-(s/random(50)),s*random(5),s*random(5));
  image(img,windowWidth * 1/7,windowHeight/5,windowWidth * 5/7,windowHeight*3/5);
 
 
  
  
}

function gen_background() {
  for (let i = 0; i <= 200; i += 2) {
    for (let j = 0; j <= 300; j += 2) {
      let radius_x = random(50, 200);
      let radius_y = random(50, 300);


      let x = i * random(50);
      let y = j * random(50);

      let c = random(colors);
      let t = random(texts);


      fill(c);
      noStroke();
      rect(x, y, radius_x, radius_y);

    }
  }
}

