let video; 
let bodyPose;
let poses = [];

let ledRed;
let ledGreen;
let ledWhite;
let ledBlue;
let ledYellow;


function preload() {
    bodyPose = ml5.bodyPose();
    loadBoard();
}

function setup() {
    createCanvas(500, 500).parent("sketch-container");
    frameRate(15); 
    video = createCapture(VIDEO);
    video.hide();

    bodyPose.detectStart(video, function(results){
        // store the results in a global (poses) variable
        poses = results;
    })
        
    ledRed = new five.Led(3);
    ledGreen = new five.Led(5);
    ledWhite = new five.Led(6);
    ledBlue = new five.Led(9);
    ledYellow = new five.Led(10);
}



function draw() {

    image(video,0,0);

    line(100, 0, 100, 500);
    line(200, 0, 200, 500);
    line(300, 0, 300, 500);
    line(400, 0, 400, 500);
    

    if(poses.length>0){

        let noseX = poses[0].nose.x;
        ledRed.off();
        ledGreen.off();
        ledWhite.off();
        ledBlue.off();
        ledYellow.off();

        if (noseX > 0 && noseX <100){
            ledRed.on();
        }else if(noseX > 100 && noseX <200){
            ledGreen.on();
        }else if(noseX > 200 && noseX <300){
            ledWhite.on();
        }else if(noseX > 300 && noseX <400){
            ledBlue.on();
        }else{
            ledYellow.on();
        }
    }else{
        ledRed.off();
        ledGreen.off();
        ledWhite.off();
        ledBlue.off();
        ledYellow.off();
    }
}

// p5 funciton
function mousePressed(){
    console.log(poses);
}



            // ledRed.off();
            // ledGreen.off();
            // ledWhite.off();
            // ledBlue.off();
            // ledYellow.off();


            