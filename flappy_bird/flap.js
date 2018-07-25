function Flap(posX, posY) {

    var velocity = createVector(2, 3.9);
    var position = createVector(posX, posY);
    var te = random(20)+10;
    this.draw = () => {
        textSize(te);
        fill(100, 178, 220, 200);
        text('flap', position.x, position.y);
    }

    this.update = () => {
        position = position.sub(velocity);

        if(this.x < 0 || this.y < 0)
            this.remove();
    }

    this.remove = () => {
        console.log('kill flap');
    }

}
