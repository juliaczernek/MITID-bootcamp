// Your variables go here

// a variable to store the video
let video;
// a variable to store the model 
let bodyPose;
// a variable to store the results
let poses = [];


function preload() {
    // Load ressources before setup

    // load the bodyPose model
    bodyPose = ml5.bodyPose();

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

}

function draw() {
    // Code that runs repeatedly code here
    // background(200);
    image(video, 0, 0);

    // make sure that we have at least on pose detected
    if(poses.length > 0){
        // create a variable to store the wrist pose on the x axis only
        let nose1 = poses[0].nose;
        fill(255,0,0);
        circle(nose1.x, nose1.y, 20)
        

        let nose2 = poses[1].nose;
        fill(0,255,0);
        circle(nose2.x, nose2.y, 20);
        
        


    }
}