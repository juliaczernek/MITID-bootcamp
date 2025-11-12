// Your variables go here


function preload() {
    // Load ressources before setup
}

function setup() {
    // Code that runs once here
    createCanvas(500, 500).parent("sketch-container");
}

function draw() {
    // Code that runs repeatedly code here
    background(200);
      // Change the cursor's active spot
    // when the mouse is pressed.
    if (mouseIsPressed === true) {
      cursor('task/brush.png', 8, 8);
    } else {
      cursor('task/brush.png');
    }
}