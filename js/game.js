let paddle;
// 0 - Welcome Screen
// 1 - Playing
// 2 - Game Over (coming soon)

function setup() {
	var canvas = createCanvas(800,800);
	game = new Pong();
}

function draw() {
	switch(game.state) {
		case 0: // welcome screen
			game.field.decorate();
			game.welcomeScreen();
			break;
		case 1: // playing
			game.field.decorate();
			game.showScores();
			if (game.paused === true) {
				game.pauseScreen();
			} else {
				// update
				if (game.ball.collide(game.p1.paddle)) {
					game.ball.swat();
					game.hits += 1;
				}
				if (game.ball.collide(game.p2.paddle) ) {
					game.ball.swat();
					game.hits += 1;
				}
				game.update();
			}
			// draw
			if (game.hud) { game.showHUD(); }
			game.p1.paddle.draw();
			game.p2.paddle.draw();
			game.ball.draw();
			break;
		case 2:
			// game.gameOverScreen();
			break;
		default:
			break;
	}
}

function keyPressed() {
	if (key === ' ') {
		if (game.state == 0) {
			game.state = 1;
		} else {
			game.paused = !game.paused;
		}
	} else {
		if (!game.paused) {
			// players' controls
		  if (keyCode === UP_ARROW) { game.p1.paddle.moveUp(); }
		  if (keyCode === DOWN_ARROW) { game.p1.paddle.moveDown(); }
		  if (key == 'A') { game.p2.paddle.moveUp(); }
		  if (key == 'Z') { game.p2.paddle.moveDown(); }
		}
	  // game control
	  if (key == 'B') {
	  	game.ball.kill();
	  	game.ball = new Ball(width/2, height/2);
	  	game.ballCount += 1;
	  	game.hits = 0;
	  }
	  if (key == 'H') { game.hud = !game.hud; }
	  if (key == 'R') { game.resetScores(); }
	  // surface change
	  if (key == 'C') { game.field = new Cylinder(0, 0, width, height); }
	  if (key == 'T') { game.field = new Torus(0, 0, width, height); }
	  if (key == 'S') { game.field = new Sphere(0, 0, width, height); }
	  if (key == 'M') { game.field = new MobiusStrip(0, 0, width, height); }
	  if (key == 'P') { game.field = new ProjectivePlane(0, 0, width, height); }
	}
}

function approx(val, n) {
	return val.toFixed(n);
}
