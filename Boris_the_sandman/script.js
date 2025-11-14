let light;

function preload() {
    loadBoard();
}

function setup() {
    createCanvas(500, 500).parent("sketch-container");

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
}