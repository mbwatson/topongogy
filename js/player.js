class Player {
	constructor(a,b) {
		this.paddle = new Paddle(a,b);
		this.points = 0;
	}

	score() {
		this.points += 1;
	}
}