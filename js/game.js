let paddle;

function setup() {
	var canvas = createCanvas(800,600);
	game = new Pong();
	showGameControls();
}

function draw() {
	game.field.decorate();
	// game.welcomeScreen();
	game.showScores();
	if (!game.paused) {
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
	} else {
		game.pauseScreen();
	}
	// draw
	if (game.hud) { game.showHUD(); }
	game.p1.paddle.draw();
	game.p2.paddle.draw();
	game.ball.draw();
}

function showGameControls() {
	let titleDiv = createDiv(`Topological Surface Pong`).class('title');
	let paddleControls = createDiv(`
<h4>Paddle Controls</h4>
<p>Player 1: &#8593; and &#8595;</p>
<p>Player 2: A and Z;</p>
	`).class('paddleControls');
	let surfaceControls = createDiv(`
<h4>Change Surfaces</h4>
<ul>
	<li>C - Cylinder</li>
	<li>T - Torus</li>
	<li>S - Sphere</li>
	<li>M - M&#246;bius Strip</li>
	<li>P - Projetive Plane</li>
</ul>
	`).class('surfaceControls');
	let gameControls = createDiv(`
<h4>Game Control</h4>
<p>Spacebar - Pause</p>
<p>S - Serve new ball</p>
<p>H - Toggle HUD</p>
	`).class('gameControls');
	let instructionsDiv = createDiv('').class('instructions');
	instructionsDiv.child(paddleControls);
	instructionsDiv.child(surfaceControls);
	instructionsDiv.child(gameControls);
}

function keyPressed() {
	if (key === ' ') {
		game.paused = !game.paused;
	} else {
		if (!game.paused) {
			// players' controls
		  if (keyCode === UP_ARROW) { game.p1.paddle.moveUp(); }
		  if (keyCode === DOWN_ARROW) { game.p1.paddle.moveDown(); }
		  if (key == 'A') { game.p2.paddle.moveUp(); }
		  if (key == 'Z') { game.p2.paddle.moveDown(); }
		}
	  // game control
	  if (key == 'R') {
	  	game.ball.kill();
	  	game.ball = new Ball(width/2, height/2);
	  	game.ballCount += 1;
	  	game.hits = 0;
	  }
	  if (key == 'H') { game.hud = !game.hud; }
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
