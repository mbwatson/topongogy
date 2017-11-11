class Player {
	constructor(a,b) {
		this.paddle = new Paddle(a,b);
		this.points = 0;
	}

	score(val = this.points + 1) {
		this.points = val;
	}
}