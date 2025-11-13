// Your variables go here

// a variable to store the video elements
let video; 
// variable to store the bodypose model
let bodyPose;
// a variable to store the results - in an array
let poses = [];



function preload() {
    // Load ressources before setup
    bodyPose = ml5.bodyPose();

}

function setup() {
    // Code that runs once here
    createCanvas(500, 500).parent("sketch-container");

    // if laptop is dying it sets a lower framerame:
    // frameRate(15); 

    video = createCapture(VIDEO);
    video.hide();

    // start the model detection
    // it relays on an input-output base
    bodyPose.detectStart(video, function(results){
        // store the results in a global (poses) variable
        poses = results;
    })

    textAlign(CENTER, TOP);
}

function draw() {
    // Code that runs repeatedly code here
    // background(200);
    image(video, 0, 0);

    // make sure we detect at least one person
    if(poses.length>0){

        let leftEye = poses[0].left_eye;
        let rightEye = poses[0].right_eye;
        // get the distance between the eyes
        let distance = dist(leftEye.x, leftEye.y, rightEye.x, rightEye.y);
        console.log(distance);
        fill(240, 240, 240);
        stroke(142, 224, 0);
        strokeWeight(18);
        ellipse((leftEye.x+4), leftEye.y, 60, 80, distance);
        ellipse((rightEye.x-4), rightEye.y, 60, 80, distance);

        let leftIris = poses[0].left_eye;
        let rightIris = poses[0].right_eye;
        // get the distance between the eyes
        fill(76,76,76);
        noStroke();
        ellipse((leftIris.x+4), leftIris.y, 20, 30, distance);
        ellipse((rightIris.x-4), rightIris.y, 20, 30, distance);


        // target the nose position
        let nose = poses[0].nose;
        let noseDistance = dist(nose.x, nose.y);
        // console.log(nose);
        circle(nose.x, (nose.y+2), 20, noseDistance);
        noStroke();
        fill(250,169,24);

    
        // target the nose position
        let nose2 = poses[0].nose;
        // console.log(nose);
        ellipse(nose2.x, (nose2.y-2), 25, 15, noseDistance);
        noStroke();
        fill(255,199,21);


        let leftWrist = poses[0].left_wrist;
        if(leftWrist.y <= height/2){
            // if hand is raised
            // fourth parameter is opacity (from 0 to 255)
            background(122,199,12, 200);
            // rotateY(frameCount / 30);
            text('✨ SPANISH OR VANISH ✨', width/2, 20);
            textSize(35);

        }
        
    }
}

// p5 funciton
function mousePressed(){
    console.log(poses);
}
