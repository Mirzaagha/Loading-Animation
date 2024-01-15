function setup() {
  createCanvas(600, 600);
}
var s = 300;
var n = 150;
var a = 0;
function draw() {
  background(0);
  fill(256,256,256);
  circle(s,s,s);
  fill(0,0,0);
  circle(s,s,s-5);
  fill(256,0,0);
  for(var x = 0; x<n;x++){
    circle(
      s+(s/2 - 2.5)*sin(x*PI*2/n),
      s+(s/2 - 2.5)*cos(x*PI*2/n),
      8*(sin((x+a/10)*PI/5)+2)
    );
  }
  a++;
  if(a == 100) a = 0;
}
