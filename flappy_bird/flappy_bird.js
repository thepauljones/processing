var bird;
var pipes;

function setup() {
    createCanvas(640, 800);

    bird = new Bird();
    bird.x = 125;

    pipes = [];
    pipes.push(new Pipe());
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
