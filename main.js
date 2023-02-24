function preload(){

}
function setup(){
canvas= createCanvas(750,400);
canvas.position(250,300);
video=createCapture(VIDEO);
video.hide();
}
function draw(){
image(video,0,0,750,400)
}
function piclol(){
 save('picwithmustachelol');
}