var angle = 4;
function setup() {
    createCanvas(640, 480);
    background(41);
    stroke(255);
    translate(width / 2, height);
}

function draw() {
    angle+=0.01;
    branch(100);
    translate(width / 2, height);
}

function branch(len) {
    line(0, 0, 0, -len);
    translate(0, -len);
    if(len > 1) {
        push();
        rotate(angle);
        branch(len * .67);
        pop();
        push();
        rotate(-angle);
        branch(len * .67);
        pop();
    }
}
