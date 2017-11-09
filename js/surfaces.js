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
}