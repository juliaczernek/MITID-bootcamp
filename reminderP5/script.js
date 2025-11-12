// Your variables go here
let synth;

function preload() {
    // Load ressources before setup
}

function setup() {
    // Code that runs once here
    createCanvas(500, 500).parent("sketch-container");

    // create a synthesizer
    synth = new p5.MonoSynth();
}

function draw() {
    // Code that runs repeatedly code here
    //background(200);
    synth.play(mouseY, 0.5, 0, 0.2);
    circle(mouseX, mouseY, 100);
    
}

function mousePressed(){
    let red = random(0,255);
    let green = random(0,255);
    let blue = random(0,255);
    fill(red, green, blue);

    // play a note when the mouse is pressed
    // 1 - frequency in Hz
    // 2 - volume
    // 3 - time for now
    // 4 - duration
    // synth.play(300,0.5, 0, 0.2);
}
