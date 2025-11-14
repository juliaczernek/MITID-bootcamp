// Your variables go here

let video; 
// variable to store the bodypose model
let bodyPose;
// a variable to store the results - in an array
let poses = [];

let led;


function preload() {
    // Load ressources before setup
    // we want to load the arduino board
    bodyPose = ml5.bodyPose();
    loadBoard();
}

function setup() {
    // Code that runs once here
    createCanvas(500, 500).parent("sketch-container");
    frameRate(15); 
    video = createCapture(VIDEO);
    video.hide();

    bodyPose.detectStart(video, function(results){
        // store the results in a global (poses) variable
        poses = results;
    })

    //instance of the class + on which pin
    led = new five.Led(3);
    
    // light.on("change", function(){
    //     // scaleTo allows us to change the default scale - if we do not know the whole range of the value
    //     let newValue = this.scaleTo(0,255);
    //     background(newValue);

    // })


}


// let distance = dist(leftEye.x, leftEye.y, rightEye.x, rightEye.y);


function draw() {

    image(video,0,0);

    if(poses.length>0){

        
        let leftEye = poses[0].left_eye;
        let rightEye = poses[0].right_eye;
        // get the distance between the eyes
        let distance = dist(leftEye.x, leftEye.y, rightEye.x, rightEye.y);

        console.log(distance);

        if (distance <= 20){
            led.brightness(50);
        }else if(distance >=41 && distance <= 60){
            led.brightness(150);
        }else{
            led.brightness(255);
        }

    }
}