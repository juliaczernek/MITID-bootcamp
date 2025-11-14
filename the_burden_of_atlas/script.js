let video; 
let bodyPose;
let poses = [];

let led;


function preload() {
    bodyPose = ml5.bodyPose();
    loadBoard();
}

function setup() {
    createCanvas(500, 500, WEBGL).parent("sketch-container");
    frameRate(15); 
    video = createCapture(VIDEO);
    video.size(500,500);
    video.hide();

    bodyPose.detectStart(video, function(results){
        // store the results in a global (poses) variable
        poses = results;
    })
        
    led = new five.Led(3);
}


function draw() {
   // image(video,width/2,width/2);
      push();
    noStroke();
    texture(video);
    plane(500, 500);
    pop();

    if(poses.length>0){

        let leftWrist = poses[0].left_wrist;
        let rightWrist = poses[0].right_wrist;
        let leftEar = poses[0].left_ear;
        let rightEar = poses[0].right_ear;


        let distance = dist(leftWrist.x, leftWrist.y, rightWrist.x, rightWrist.y);

        sphere(distance);


        let headSize = leftEar.x - rightEar.x;
        if(headSize<distance){
            led.on();
        }else{
            led.off();
        }
    }
}

// p5 funciton
function mousePressed(){
    console.log(poses);
}
