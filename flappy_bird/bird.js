function Bird() {

    const radius = 30;
    const force = 1.6;
    var velocity = 2;
    var gravity = 7.6;

    this.y = height / 2;

    this.show = () => {
        fill(255);
        ellipse(this.x, this.y, radius, radius);
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
    }

    this.flap = () => {
        velocity += -(force * 20);
    }

    this.gameOver = (reason) => {
        this.y = height;
        console.log(reason, 'game over');
    }

}
