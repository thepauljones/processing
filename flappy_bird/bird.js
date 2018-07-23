function Bird() {

    const radius = 30;
    const force = 1;
    var velocity = 2;
    var gravity = 4.6;

    this.y = height / 2;

    this.show = () => {
        fill(255);
        ellipse(this.x, this.y, radius, radius);
    }

    this.update = () => {
        this.y += velocity + gravity;
        velocity *= 0.9;
    }

    this.flap = () => {
        velocity += -(force * 20);
    }

}
