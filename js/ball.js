function sign(n) {
	return (n > 0 ? 1 : n < 0 ? -1 : null);
}

function coinFlip() {
	return 2*floor(random(0,2) ) - 1;
}

function randomIn(set)
{
    var randomKey = floor(random() * set.length);
    return set[randomKey];
}

class Ball {
	constructor(x,y) {
		this.x = x;
		this.y = y;
		this.vel = 5;
		this.maxDx = 5;
		this.direction = randomIn([0,1,2,3,4,5,6,7,9,10,11,12,13,14,15]) * PI/16 * coinFlip();
		this.dx = this.vel * cos(this.direction);
		this.dy = this.vel * sin(this.direction);
		this.d = 10	;
		this.r = this.d/2;
		this.dr = 0;
		this.minY = this.r;
		this.maxY = height - this.r;
		this.minX = this.r;
		this.maxX = width - this.r;
		this.color = 0;
	}

	kill() {
		for (var property in this) delete this[property];
	}

	stop() {
		this.dx = 0;
		this.dy = 0;
	}

	update() {
		this.x += this.dx;
		this.y += this.dy;
		this.r += this.dr;
	}

	draw() {
		fill(this.color);
		ellipse(this.x, this.y, this.d, this.d);
	}

	collide(paddle) {
		if (abs(this.x - paddle.x) < paddle.width/2 + this.r) {
			if (paddle.y - paddle.height/2 < this.y && this.y < paddle.y + paddle.height/2) {
				this.dy += sign(paddle.dy);
				return true;
			}
		}
		return false;
	}

	swat() {
		this.dx *= -1;
		this.dx = (abs(this.dx) - this.maxDx < 0) ? this.dx + sign(this.dx) : sign(this.dx) * this.maxDx;
	}

}