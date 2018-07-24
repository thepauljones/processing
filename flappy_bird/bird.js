function Bird() {

    const radius = 30;
    const force = 1.6;
    var velocity = 2;
    var gravity = 7.6;
    var flaps = [];

    textSize(24);
    textFont('Helvetica');
    this.y = height / 2;

    this.show = () => {
        fill(180, 255, 100);
        // ellipse(this.x, this.y, radius, radius);
        textSize(24);
        text('Bird', this.x, this.y);
    }

    this.update = () => {
        this.y += velocity + gravity;
        velocity *= 0.9;

        if(this.y > height) {
            this.gameOver('dropped too low');
        }

        if (this.y < 0) {
            this.gameOver('flew too high');
        }

        for(var i = flaps.length - 1; i > 0; i--) {

            flaps[i].draw();
            flaps[i].update();

        }

    }

    this.flap = () => {
        velocity += -(force * 20);
        flaps.push(new Flap(this.x, this.y));
    }

    this.gameOver = (reason) => {
        this.y = height;
        console.log(reason, 'game over');
    }

}
