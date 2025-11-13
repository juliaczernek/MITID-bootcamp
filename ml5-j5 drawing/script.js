// Your variables go here

// a variable to store the video
let video;
// a variable to store the model 
let bodyPose;
// a variable to store the results
let poses = [];

// a variable to store the led 
let servo1;

let servo2;

let servo3;


function preload() {
    // Load ressources before setup

    // load the bodyPose model
    bodyPose = ml5.bodyPose();

    // load the arduino board
    loadBoard();
}

function setup() {
    // Code that runs once here
    createCanvas(500, 500).parent("sketch-container");

    // start capturing video
    video = createCapture(VIDEO);
    // hide the video element
    video.hide();

    // start the bodyPose detection
    bodyPose.detectStart(video, function(results){
        // make the results from the model globally accessible in the poses variable
        poses = results;
    });

    // create the servo object on pin 3
    servo1 = new five.Servo(3);
    servo2 = new five.Servo(5);
    servo3 = new five.Servo(6);
}

function draw() {
    // Code that runs repeatedly code here
    // background(200);
    image(video, 0, 0);

    // make sure that we have at least on pose detected
    if(poses.length > 0){
        
        // create a variable to store the wrist pose on the x axis only
        let leftWrist = poses[0].left_wrist.x;
        let angle1 = map(leftWrist, 0, 500, 0, 180);
        servo1.to(angle1);

        let wristY = poses[0].right_wrist.y;
        let angle2 = map(wristY, 0, 500, 0, 20);
        servo2.to(angle2);

        let wristX = poses[0].right_wrist.x;
        let angle3 = map(wristX, 0, 500, 0, 180);
        servo3.to(angle3);

    }
}


function mousePressed(){
    console.log(poses);
}
