var bird;

function setup() {
    createCanvas(640, 800);

    bird = new Bird();
    bird.x = 125;
}

function draw() {
    background(51);
    bird.show();
    bird.update();
}

function keyPressed() {
    if (key === " ") {
        bird.flap();
    }
}
