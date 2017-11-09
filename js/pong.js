class Pong {
	constructor() {
		this.field = new ProjectivePlane(0, 0, width, height);
		this.p1 = new Player(width - 30, height/2);
		this.p2 = new Player(30, height/2);
		this.ball = new Ball(width/2, height/2);
		this.hud = true;
		this.paused = false;
		this.hits = 0;
		this.maxScore = 5; // unimplemented
	}

	update() {
		this.p1.paddle.update();
		this.p2.paddle.update();
		if (this.ball.y + this.ball.dy <= this.ball.minY && this.ball.dy < 0) {
			this.ball = this.field.topEdge(this.ball);
		}
		if (this.ball.y + this.ball.dy >= this.ball.maxY && this.ball.dy > 0) {
			this.ball = this.field.bottomEdge(this.ball);
		}
		if (this.ball.x + this.ball.dx < this.ball.minX && this.ball.dx < 0) {
			this.ball = this.field.leftEdge(this.ball);
			this.p1.score();
		}
		if (this.ball.x + this.ball.dx >= this.ball.maxX && this.ball.dx > 0) {
			this.ball = this.field.rightEdge(this.ball);
			this.p2.score();
		}
		// if (this.ball.y + this.ball.dy <= this.ball.minY ||
		// 		this.ball.y + this.ball.dy >= this.ball.maxY) {
		// 	this.ball.dy *= -1;
		// }
		// if (this.ball.x + this.ball.dx < this.ball.minX &&
		// 		this.ball.dx < 0) {
		// 	this.ball.x = this.ball.maxX;
		// 	this.p1.score();
		// }
		// if (this.ball.x + this.ball.dx >= this.ball.maxX &&
		// 		this.ball.dx > 0) {
		// 	this.ball.x = this.ball.minX;
		// 	this.p2.score();
		// }
		this.ball.update();
	}

	showHUD() {
		textSize(12);
		fill(0);
		noStroke();
		textAlign(LEFT);
		let p1Info = `PLAYER 1
Paddle @ (${this.p1.paddle.x},${this.p1.paddle.y}) with dy = ${this.p1.paddle.dy}`
		let p2Info = `PLAYER 2
Paddle @ (${this.p2.paddle.x},${this.p2.paddle.y}) with dy = ${this.p2.paddle.dy}`
	 	textAlign(CENTER);
		let ballInfo = `Ball @ (${approx(this.ball.x)},${approx(this.ball.y)}) with velocity (${approx(this.ball.dx,2)},${approx(this.ball.dy,2)})`;
		text(ballInfo, width/2, height - 10);
	 	textAlign(RIGHT);
		text(p1Info, width-40, height - 25);
	 	textAlign(LEFT);
		text(p2Info, 40, height - 25);
	}
	
	pauseScreen() {
		textSize(96);
		stroke(0);
		fill(255);
		textAlign(CENTER);
		text("PAUSED", width/2, height/2+30);
	}

	unpause() {
		this.paused = false;
	}

}