var position;
var direction;

var radius;
var slider;
function setup() {
    createCanvas(800, 800);
    background(51);
    translate(width / 2, height / 2);
    radius = 100;
    position = createVector(0, 0);
    direction = createVector(1, 0);
    slider = createSlider(0, 10, 0, 0.01);
}

function draw() {

    direction.y = slider.value();
    position = position.add(direction);

    noStroke();
    fill(100, 100, 255);
    ellipse(position.x, position.y, radius, radius, 10);

}
