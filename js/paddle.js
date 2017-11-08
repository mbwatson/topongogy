let defaults = {
	'paddleVelocity': 5,
	'paddleWidth': 4,
	'paddleHeight': 100
};

class Paddle {
	constructor(x,y) {
		this.x = x;
		this.y = y;
		this.width = defaults['paddleWidth'];
		this.height = defaults['paddleHeight'];
		this.color = 0;
		this.dy = 0;
	}

	draw() {
		rectMode(CENTER);
		fill(this.color);
		rect(this.x, this.y, this.width, this.height);
	}

	update() {
		if (this.minY() <= this.y + this.dy && this.y + this.dy <= this.maxY()) {
			this.y += this.dy;
		} else {
			this.dy = 0;
		}
	}

	moveUp() {
    this.dy = -defaults['paddleVelocity'];
  }

	moveDown() {
    this.dy = defaults['paddleVelocity'];
  }

  movingUp() { return this.dy < 0; }
  movingDown() { return this.dy > 0; }
	minY() { return (this.height/2); }
	maxY() { return (height - this.height/2); }
	top() { return this.y - this.width/2 };
	bottom() { return this.y + this.width/2 };

}