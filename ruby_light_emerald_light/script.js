let video;
let bodyPose;
let poses = [];
let previousPoses = [];

let previousX = 0;
let previousY = 0;

let led;
let isGreen = true;


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
    led = new five.Led.RGB({
        pins: {
        red: 11,
        green: 10,
        blue: 9
        }
    });

    
    led.on();
    led.color("#0CFF00");
}


function draw() {

    image(video, 0, 0);
    if (random()< 0.0033) {
        isGreen = !isGreen;
        if (isGreen) {
            led.color('#0CFF00');
        } else {
            led.color('#FF0000');

            let currentX = poses[0].nose.x;
            let currentY = poses[0].nose.y;

            let distance = dist(currentX, currentY, previousX, previousY);
            
            if(distance > 2){
                background(255,0,0, 200);
            }

            previousX = currentX;
            previousY = currentY;

        }
    }

}

function mousePressed(){
    console.log(poses);
}


