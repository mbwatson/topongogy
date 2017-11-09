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