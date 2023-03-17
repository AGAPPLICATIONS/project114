x=0;
y=0;
function preload() {
 mustache=loadImage('https://i.postimg.cc/wjmYtCfv/mustache-removebg-preview.png');
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(425,200);
    video = createCapture(VIDEO);
    video.size(400,400)
    video.hide();
    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotresult);
}

function draw() {
    image(video, 0, 0, 400, 400);
    image(mustache,x,y,100,100);
}

function piclol() {
    save('picwithmustachelol');
}

function modelloaded() {
    console.log("model is loaded");
}

function gotresult(result) {
    if (result.length > 0) {
        console.log(result);
        console.log("x="+result[0].pose.nose.x);
        console.log("y="+result[0].pose.nose.y);
        x=result[0].pose.nose.x - 50;
        y=result[0].pose.nose.y - 35;
    }


}