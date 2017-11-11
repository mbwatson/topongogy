class Field {
	constructor(x1, y1, x2, y2) {
		this.top = y1;
		this.bottom = y2;
		this.left = x1;
		this.right = x2;
		this.bgColor = color(255, 255, 255)
		this.borderColor = color(0, 0, 0);
	}

	decorate() {
		background(game.field.bgColor);
	  noFill();
	  stroke(200);
	  line(width / 2, 0, width / 2, height);
	  rectMode(CORNER);
	  rect(0,0,width-1,height-1);
	}
}

function arrow(a, b, dir) {
	let h = 8;
	let w = 8;
	let vertices = [];
	switch(dir) {
		case "up":
			vertices.push({ 'x': a, 'y': b - h/2 })
			vertices.push({ 'x': a + w/2, 'y': b + h/2 })
			vertices.push({ 'x': a - w/2, 'y': b + h/2 })
			break;
		case "down":
			vertices.push({ 'x': a, 'y': b + h/2 })
			vertices.push({ 'x': a + w/2, 'y': b - h/2 })
			vertices.push({ 'x': a - w/2, 'y': b - h/2 })
			break;
		case "left":
			vertices.push({ 'x': a - h/2, 'y': b })
			vertices.push({ 'x': a + h/2, 'y': b - w/2 })
			vertices.push({ 'x': a + h/2, 'y': b + w/2 })
			break;
		case "right":
			vertices.push({ 'x': a + h/2, 'y': b })
			vertices.push({ 'x': a - h/2, 'y': b - w/2 })
			vertices.push({ 'x': a - h/2, 'y': b + w/2 })
			break;
		default:
			break;
	}

	fill(0);
	beginShape();
	for (let i = 0; i < vertices.length; i++) {
		vertex(vertices[i].x, vertices[i].y);
	}
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
		arrow(x - s/2, y, 'up');
		arrow(x + s/2, y, 'up');
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
		arrow(x-s/2, y, 'up');
		arrow(x+s/2, y, 'up');
		arrow(x-4, y-s/2, 'right');
		arrow(x+4, y-s/2, 'right');
		arrow(x-4, y+s/2, 'right');
		arrow(x+4, y+s/2, 'right');
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
		arrow(x-s/2, y, 'up');
		arrow(x+s/2, y, 'down');
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
		arrow(x-s/2, y, 'up');
		arrow(x+s/2, y, 'down');
		arrow(x-4, y-s/2, 'right');
		arrow(x+4, y-s/2, 'right');
		arrow(x-4, y+s/2, 'left');
		arrow(x+4, y+s/2, 'left');
	}
}

class Sphere extends Field {
	constructor(x1, y1, x2, y2) {
		super(x1, y1, x2, y2);
	}
	topEdge(ball) {
		ball.x = ball.maxX;
		ball.y = ball.maxY - ball.x;
		ball.dy = [ball.dx, ball.dx = ball.dy][0];
		return(ball);
	}
	rightEdge(ball) {
		ball.y = ball.minY;
		ball.x = ball.maxX - ball.y;
		ball.dy = [ball.dx, ball.dx = ball.dy][0];
		return(ball);
	}
	bottomEdge(ball) {
		ball.x = ball.maxX;
		ball.y = ball.maxY - ball.x;
		ball.dy = [ball.dx, ball.dx = ball.dy][0];
		return(ball);
	}
	leftEdge(ball) {
		ball.x = ball.maxX;
		ball.y = ball.maxY - ball.y;
		ball.dy *= -1;
		return(ball);
	}
	draw(x, y, s = 80) {
		noStroke();
		textAlign(CENTER);
		rectMode(CENTER);
		text("Sphere", x, y - s/2 - 10);
		noFill();
		stroke(0);
		rect(x, y, s, s);
		arrow(x, y-s/2, 'right');
		arrow(x+s/2, y, 'up');
		arrow(x-s/2, y-4, 'up');
		arrow(x-s/2, y+4, 'up');
		arrow(x-4, y+s/2, 'right');
		arrow(x+4, y+s/2, 'right');
	}
}