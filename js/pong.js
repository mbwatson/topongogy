class Pong {
	constructor() {
		this.field = new Cylinder(0, 0, width, height);
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
		this.ball.update();
	}

	showScores() {
		textSize(48);
		fill(0)
		noStroke();
		textAlign(RIGHT);
		text(this.p2.points, width/2-50, 50);
		textAlign(LEFT);
		text(this.p1.points, width/2+50, 50);
	}

	showHUD() {
		textSize(12);
		fill(0);
		noStroke();
		textAlign(LEFT);
		let p1Info = `PLAYER 1
Position: (${this.p1.paddle.x},${this.p1.paddle.y})
Velocity: ${this.p1.paddle.dy}`
		let p2Info = `PLAYER 2
Position: (${this.p2.paddle.x},${this.p2.paddle.y})
velocity: ${this.p2.paddle.dy}`
	 	textAlign(RIGHT);
		text(p1Info, width-40, height - 40);
	 	textAlign(LEFT);
		text(p2Info, 40, height - 40);
		let ballInfo = `Ball
Position: (${approx(this.ball.x)},${approx(this.ball.y)})
Velocity: (${approx(this.ball.dx,2)},${approx(this.ball.dy,2)})`;
		text(ballInfo, width/2, height - 40);
		game.field.draw(width/2-40, height-40, 60);
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