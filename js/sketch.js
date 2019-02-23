// JavaScript Document
var canvas;
var x = width/3;
var y = width/2;

function windowResized() {
resizeCanvas(windowWidth,windowHeight);
}

function setup () {
canvas = createCanvas(windowWidth,windowHeight);
canvas.position(0,0);
canvas.style('z-index', '-1');
//background(255,244,244);    
}


function draw () {
stroke(255);
fill(220);
x = mouseX;
y = mouseY;    
ellipse(x,y,25,25);
} 

function windowResized() {
resizeCanvas(windowWidth,windowHeight);
}
