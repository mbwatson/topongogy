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
		this.state = 0;
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
		text(this.p2.points, width/2-20, 50);
		textAlign(LEFT);
		text(this.p1.points, width/2+20, 50);
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
		text(ballInfo, width/2+10, height - 40);
		game.field.draw(width/2-40, height-40, 60);
	}

	resetScores() {
		game.p1.score(0);
		game.p2.score(0);
	}
	
	showGameControls() {
		textAlign(CENTER);
		noStroke();
		fill(0);
		textSize(12);
		textStyle(BOLD);
		text('PADDLE CONTROLS', width/2 - 200, height/2 + 50);
		textStyle(NORMAL);
		text(`
Player 1 - UP and DOWN
Player 2 - A and Z
`, width/2-200, height/2 + 50);
		textStyle(BOLD);
		text('CHANGE SURFACES', width/2, height/2 + 50);
		textStyle(NORMAL);
		text(`
C - Cylinder
T - Torus
S - Sphere
M - Mobius Strip
P - Projetive Plane
`, width/2, height/2 + 50);
		textStyle(BOLD);
		text('GAME CONTROL', width/2 + 200, height/2 + 50);
		textStyle(NORMAL);
		text(`
Spacebar - Pause
B - New Ball
H - Toggle HUD
R - Reset Scores
`, width/2 + 200, height/2 + 50);
	}

	pauseScreen() {
		textSize(96);
		stroke(0);
		fill(255);
		textAlign(CENTER);
		text("PAUSED", width/2, height/2-100);
		this.showGameControls();
	}

	unpause() {
		this.paused = false;
	}

	welcomeScreen() {
		stroke(0);
		fill(255);
		textAlign(CENTER);
		textSize(38);
		text("TOPOLOGICAL", width/2, height/2-150);
		textSize(96);
		text("PONG", width/2, height/2-80);
		textSize(16);
		noStroke();
		fill(0);
		text("The classic game of Pong on the two-manifold of your choice!", width/2 - 140, height/2-60, 280, 100);
		this.showGameControls();
		textSize(20);
		fill( round(millis()/500) % 2 == 0 ? 0 : 200 );
		text("Press the spacebar to begin!", width/2 - 150, height/2 + 200, 300, 100);
	}
}
