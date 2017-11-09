let paddle;

function setup() {
	var can = createCanvas(800,600);
	can.style("border", "1px solid #000");
	game = new Pong();
}

function draw() {
	background(game.field.bgColor);
	if (!game.paused) {
		// update
		if (game.ball.collide(game.p1.paddle) || game.ball.collide(game.p2.paddle) ) {
			game.ball.swat();
			game.hits += 1;
		}
		game.update();
	} else {
		game.pauseScreen();
	}
	// draw
	if (game.hud) { game.showHUD(); }
	game.p1.paddle.draw();
	game.p2.paddle.draw();
	game.ball.draw();
}

function keyPressed() {
	if (key === ' ') {
		game.paused = !game.paused;
	} else {
		// players' controls
	  if (keyCode === UP_ARROW) {
			game.unpause();
	  	game.p1.paddle.moveUp();
	  }
	  if (keyCode === DOWN_ARROW) {
			game.unpause();
	  	game.p1.paddle.moveDown();
	  }
	  if (key == 'A') {
			game.unpause();
	  	game.p2.paddle.moveUp();
	  }
	  if (key == 'Z') {
			game.unpause();
	  	game.p2.paddle.moveDown();
	  }
	  // game control
	  if (key == 'R') {
	  	game.ball.kill();
	  	game.ball = new Ball(width/2, height/2);
	  	game.ballCount += 1;
	  	game.hits = 0;
	  }
	  if (key == 'H') { game.hud = !game.hud; }
	}
}

function approx(val, n) {
	return val.toFixed(n);
}