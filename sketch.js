function setup() {
createCanvas(710, 400);
  background(0);
  strokeWeight(10);
  colorMode(RGB);
  console.log("Drag on the canvas while clicking to draw");
}
  
function draw() {  
  
  fill(255); 
  textSize(32); 
  textAlign(LEFT); 
  text("Drag To Draw", width / 19, height/10); 
}


function mouseDragged() {
 
  let lineHue = mouseX - mouseY;
  stroke(lineHue, 190, 90);
  line(pmouseX, pmouseY, mouseX, mouseY);
}