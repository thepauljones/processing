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

    if (frameCount % 120 === 0) {
        console.log('adding pipes');
        pipes.push(new Pipe());
    }

    for(var i = pipes.length -1; i > 0; i--) {
        pipes[i].draw();
        pipes[i].update();
        pipes[i].hit(bird);
    }
}

function keyPressed() {
    if (key === " ") {
        bird.flap();
    }
}
