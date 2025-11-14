let video;
let bodyPose;
let poses = [];

let servo1;
let servo2;



function preload() {
    bodyPose = ml5.bodyPose();
    loadBoard();
}

function setup() {
    createCanvas(500, 500).parent("sketch-container");
    video = createCapture(VIDEO);
    video.hide();
    bodyPose.detectStart(video, function(results){
        poses = results;
    });

    servo1 = new five.Servo(3);
    servo2 = new five.Servo(5);
}

function draw() {
    image(video, 0, 0);
    if(poses.length > 0){
        let leftWrist = poses[0].left_wrist.x;
        let angle1 = map(leftWrist, 0, 500, 0, 180);
        servo1.to(angle1);

        let rightWrist = poses[1].right_wrist.x;
        let angle2 = map(rightWrist, 0, 500, 0, 180);
        servo2.to(angle2);

    }
}


function mousePressed(){
    console.log(poses);
}
