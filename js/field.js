class Field {
	constructor(x1, y1, x2, y2) {
		this.top = y1;
		this.bottom = y2;
		this.left = x1;
		this.right = x2;
		this.bgColor = color(255, 255, 255)
		this.borderColor = color(0, 0, 0);
	}
}

function arrow(x, y, dir) {
	fill(0);
	beginShape();
	vertex(x, y);
	vertex(x+4, y+10);
	vertex(x-4, y+10);
	endShape();
}

class Cylinder extends Field {
	constructor(x1, y1, x2, y2) {
		super(x1, y1, x2, y2);
	}
	topEdge(ball) {
		ball.dy *= -1;
		return(ball);
	}
	bottomEdge(ball) {
		ball.dy *= -1;
		return(ball);
	}
	leftEdge(ball) {
		ball.x = ball.maxX;
		return(ball);
	}
	rightEdge(ball) {
		ball.x = ball.minX;
		return(ball);
	}
	draw(x, y, s = 80) {
		noStroke();
		textAlign(CENTER);
		rectMode(CENTER);
		text("Cylinder", x, y - s/2 - 10);
		noFill();
		stroke(0);
		rect(x, y, s, s);
		arrow(x-s/2, y-5);
		arrow(x+s/2, y-5);
	}
}

class Torus extends Field {
	constructor(x1, y1, x2, y2) {
		super(x1, y1, x2, y2);
	}
	topEdge(ball) {
		ball.y = ball.maxY; 
		return(ball);
	}
	bottomEdge(ball) {
		ball.y = ball.minY; 
		return(ball);
	}
	leftEdge(ball) {
		ball.x = ball.maxX;
		return(ball);
	}
	rightEdge(ball) {
		ball.x = ball.minX; 
		return(ball);
	}
	draw(x, y, s = 80) {
		noStroke();
		textAlign(CENTER);
		rectMode(CENTER);
		text("Torus", x, y - s/2 - 10);
		noFill();
		stroke(0);
		rect(x, y, s, s);
		arrow(x-s/2, y-5);
		arrow(x+s/2, y-5);
	}
}

class MobiusStrip extends Field {
	constructor(x1, y1, x2, y2) {
		super(x1, y1, x2, y2);
	}
	topEdge(ball) {
		ball.dy *= -1;
		return(ball);
	}
	bottomEdge(ball) {
		ball.dy *= -1;
		return(ball);
	}
	leftEdge(ball) {
		ball.x = ball.maxX;
		ball.y = ball.maxY - ball.y;
		ball.dy *= -1;
		return(ball);
	}
	rightEdge(ball) {
		ball.x = ball.minX;
		ball.y = ball.maxY - ball.y;
		ball.dy *= -1;
		return(ball);
	}
	draw(x, y, s = 80) {
		noStroke();
		textAlign(CENTER);
		rectMode(CENTER);
		text("Mobius Strip", x, y - s/2 - 10);
		noFill();
		stroke(0);
		rect(x, y, s, s);
		arrow(x-s/2, y-5);
		arrow(x+s/2, y-5);
	}
}

class ProjectivePlane extends Field {
	constructor(x1, y1, x2, y2) {
		super(x1, y1, x2, y2);
	}
	topEdge(ball) {
		ball.x = ball.maxX - ball.x;
		ball.y = ball.maxY;
		ball.dx *= -1;
		return(ball);
	}
	bottomEdge(ball) {
		ball.x = ball.maxX - ball.x;
		ball.y = ball.minY;
		ball.dx *= -1;
		return(ball);
	}
	leftEdge(ball) {
		ball.x = ball.maxX;
		ball.y = ball.maxY - ball.y;
		ball.dy *= -1;
		return(ball);
	}
	rightEdge(ball) {
		ball.x = ball.minX;
		ball.y = ball.maxY - ball.y;
		ball.dy *= -1;
		return(ball);
	}
	draw(x, y, s = 80) {
		noStroke();
		textAlign(CENTER);
		rectMode(CENTER);
		text("Projective Plane", x, y - s/2 - 10);
		noFill();
		stroke(0);
		rect(x, y, s, s);
		arrow(x-s/2, y-5);
		arrow(x+s/2, y-5);
	}
}