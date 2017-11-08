class Field {
	constructor(x1, y1, x2, y2) {
		this.top = y1;
		this.bottom = y2;
		this.left = x1;
		this.right = x2;
		this.bgColor = color(255, 255, 255)
		this.borderColor = color(0, 0, 0);
		// this.surface = "cylinder";
		this.surface = "torus";
		this.surface = "mobius strip"
	}

	draw() {

	}

	rightEdge(ball) {
		switch(this.surface) {
			case "cylinder":
				ball.x = ball.minX; 
				break;
			case "torus":
				ball.x = ball.minX; 
				break;
			case "mobius strip":
				ball.x = ball.minX;
				ball.y = ball.maxY - ball.y;
				ball.dy *= -1;
				break;
			default:
				console.log('uhoh...');
				break;
		}
		return(ball);
	}

	leftEdge(ball) {
		switch(this.surface) {
			case "cylinder":
				ball.x = ball.maxX;
				break;
			case "torus":
				ball.x = ball.maxX; 
				break;
			case "mobius strip":
				ball.x = ball.maxX;
				ball.y = ball.maxY - ball.y;
				ball.dy *= -1;
				break;
			default:
				console.log('uhoh...');
				break;
		}
		return(ball);
	}

	topEdge(ball) {
		switch(this.surface) {
			case "cylinder":
				ball.dy *= -1;
				break;
			case "torus":
				ball.y = ball.maxY; 
				break;
			case "mobius strip":
				ball.dy *= -1;
				break;
			default:
				console.log('uhoh...');
				break;
		}
		return(ball);
	}

	bottomEdge(ball) {
		switch(this.surface) {
			case "cylinder":
				ball.dy *= -1;
				break;
			case "torus":
				ball.y = ball.minY;
				break;
			case "mobius strip":
				ball.dy *= -1;
				break;
			default:
				console.log('uhoh...');
				break;
		}
		return(ball);
	}

}