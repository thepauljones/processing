function Pipe() {

    const velocity = 2;
    const GAP = 70;
    const W = 20;
    const top = Math.random() * (height / 2) - GAP;
    let t, b;

    this.draw = () => {
        fill(100, 100, 255);
        rect(width, 0, W, top);
        rect(width, top + GAP, W, height - (top + GAP));
    }

    this.update = () => {
        this.x -= velocity;
    }

}
