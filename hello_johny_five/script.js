// Your variables go here
let led;
let light;

function preload() {
    // Load ressources before setup

    // we want to load the arduino board
    loadBoard();
}

function setup() {
    // Code that runs once here
    createCanvas(500, 500).parent("sketch-container");

    //instance of the class + on which pin
    led = new five.Led(3);
    light = new five.Sensor({
        pin: "A0",
        //amount of request to get new data - detection rate
        freq: 250,
        threshold: 5
    });
    light.on("change", function(){
        // scaleTo allows us to change the default scale - if we do not know the whole range of the value
        let newValue = this.scaleTo(0,255);
        background(newValue);

    })

}

function draw() {
    // Code that runs repeatedly code here
    // background(200);

    //if mouse is on the left side of the canvas then the led is off
    if (mouseX <width/2){
        led.brightness(50);
    }else if(mouseX >= width/2 && mouseX <= 400){
        led.brightness(150);
    }else{
        led.brightness(255);
    }

}