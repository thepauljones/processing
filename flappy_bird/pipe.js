function Pipe() {

    const velocity = 2;
    const GAP = 200;
    const MIN_HEIGHT = 200;
    const W = 20;
    const top = Math.random() * ((height / 2 + MIN_HEIGHT) - GAP);
    let pipeX = width - W;
    let colours = [100, 170, 80];

    this.draw = () => {
        fill(...colours);
        rect(pipeX, 0, W, top);
        rect(pipeX, top + GAP, W, height - (top + GAP));
    }

    this.update = () => {
        pipeX -= velocity;
    }

    this.hit = (bird) => {
        if(bird.x < pipeX + W && bird.x > pipeX)
            if(bird.y < top || bird.y > top + GAP)
                colours = [255, 0, 0];
    }
}
