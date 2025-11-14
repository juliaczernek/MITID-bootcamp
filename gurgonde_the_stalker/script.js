let video; 
let bodyPose;
let poses = [];

let lcd;

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
        
    lcd = new five.LCD()
}



function draw() {

    image(video,0,0);

    line(125, 0, 125, 500);
    line(250, 0, 250, 500);
    line(375, 0, 375, 500);
    

    if(poses.length>0){

        let noseX = poses[0].nose.x;
        let noseY = poses[0].nose.y;

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

        if (noseY>0 && noseY<250){

        }
}

// p5 funciton
function mousePressed(){
    console.log(poses);
}
}



// The starting position of the LCD display
lcd.cursor(0, 0).print("Bleep");

// The second line, first character of the LCD display
lcd.cursor(0, 1).print("Bloop");


            