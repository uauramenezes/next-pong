export default class Ball {
	#canvasHeight: number;
	#canvasWidth: number;
	#xDirection = -1;
	#yDirection = 1;
	#speed = 200;
	#radius = 8;
	#x: number;
	#y: number;

	constructor(canvasWidth: number, canvasHeight: number) {
		this.#canvasWidth = canvasWidth;
		this.#canvasHeight = canvasHeight;
		this.#x = canvasWidth / 2 - this.#radius;
		this.#y = canvasHeight / 2 - this.#radius;
	}

	#getRandomDirection = () => {
		let random = Math.floor(Math.random() * 2 + 1)
		return random == 1 ? 1 : -1
	}

	move(deltaTime: number) {
		this.#x += this.#speed * deltaTime * this.#xDirection;
		this.#y += this.#speed * deltaTime * this.#yDirection;
		this.wallCollision()
	}

	wallCollision() {
		if (this.#y <= 0 || this.#y >= this.#canvasHeight) 
			this.#yDirection *= -1
		if (this.#x <= 0 || this.#x >= this.#canvasWidth){
			this.#y = this.#canvasHeight / 2 - this.#radius;
			this.#x = this.#canvasWidth / 2 - this.#radius;
			this.#yDirection = this.#getRandomDirection();
			this.#xDirection *= -1;
		}
	}

	playerCollision(player: number, x: number, y: number, w: number, h: number) {
		let bool = player == 1 ? 
								(this.#x <= x + w && this.#y >= y && this.#y <= y + h) : 
								(this.#y >= y && this.#y <= y + h && this.#x >= x)
		if (bool) this.#xDirection *= -1
	}

	draw(canvasContext: CanvasRenderingContext2D, color: string) {
		canvasContext.fillStyle = color;
		canvasContext.beginPath();
		canvasContext.arc(this.#x, this.#y, this.#radius, 0, 2 * Math.PI)
		canvasContext.fill();
	}
}