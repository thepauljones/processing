var scaleFactor = 20;

function setup() {
    createCanvas(800, 800);
    angleMode(DEGREES);
    background(3);
    translate(width / 2, height / 2);
    rotate(-90);
}

function draw() {

    var params = [0, 60, 0, 360];

    var secondAngle = map(second(), ...params);
    drawTime(secondAngle, [140, 200, 70], 1);

    var minuteAngle = map(minute(), ...params);
    drawTime(minuteAngle, [190, 100, 70], 2);

    var hourAngle = map(hour(), ...params);
    drawTime(hourAngle, [200, 70, 30], 3);

    fill(255);
    point(0, 0, 10);

}

function drawTime(angle, colour, position) {

    var scalar = position * scaleFactor;
    stroke(...colour);
    strokeWeight(8);
    noFill();
    arc(0, 0, 300 - scalar, 300 - scalar, 0, angle, OPEN);

    drawClockArm(angle, scalar);

}

function drawClockArm(angle, len) {

    push();
    noFill();
    rotate(angle);
    line(0, 0, 0, -len);
    pop();

}
