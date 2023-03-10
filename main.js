function preload() {

}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(425,200);
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotresult);
}

function draw() {
    image(video, 0, 0, 400, 400);
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
    }


}