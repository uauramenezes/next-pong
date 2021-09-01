import IPlayer from './IPlayer';

export default class Ball {
	#canvasHeight: number;
	#canvasWidth: number;
	#xDirection = 1;
	#yDirection = 1;
	#speed = 250;
	#radius = 8;
	#x: number;
	#y: number;

	constructor(canvasWidth: number, canvasHeight: number) {
		this.#canvasWidth = canvasWidth;
		this.#canvasHeight = canvasHeight;
		this.#x = canvasWidth / 2;
		this.#y = canvasHeight / 2;
	}

	#getRandomDirection = () => {
		let random = Math.floor(Math.random() * 2 + 1);
		return random == 1 ? 1 : -1;
	}

	#wallCollision = (): string => {
		if ((this.#y <= 0 && this.#yDirection === -1)
		|| (this.#y >= this.#canvasHeight
		&& this.#yDirection === 1)) {
			this.#yDirection *= -1
		}
		if (this.#x <= 0) {
			this.#reset();
			return 'left';
		}
		if (this.#x >= this.#canvasWidth) {
			this.#reset();
			return 'right';
		}
		return 'none';
	}

	#reset = () => {
		this.#y = this.#canvasHeight / 2;
		this.#x = this.#canvasWidth / 2;
		this.#yDirection = this.#getRandomDirection();
		this.#xDirection *= -1;
	}

	move(deltaTime: number): string {
		this.#x += this.#speed * deltaTime * this.#xDirection;
		this.#y += this.#speed * deltaTime * this.#yDirection;
		return this.#wallCollision();
	}

	leftPlayerCollision(player: IPlayer) {
		if (
			((this.#y - this.#radius <= player.y + player.height &&
			this.#y >= player.y + player.height) || 
			(this.#y + this.#radius >= player.y &&
			this.#y <= player.y)) && 
			this.#x < player.x + player.width &&
			this.#xDirection === -1
		) {
				this.#yDirection *= -1;
			}
		else if (
			this.#y > player.y && this.#y < player.y + player.height &&
			this.#x - this.#radius < player.x + player.width &&
			this.#x > player.x + player.width &&
			this.#xDirection === -1
		) {
				this.#xDirection *= -1;
		}
	}

	rightPlayerCollision(player: IPlayer) {
		if (
			((this.#y - this.#radius <= player.y + player.height &&
			this.#y >= player.y + player.height) || 
			(this.#y + this.#radius >= player.y &&
			this.#y <= player.y)) && 
			this.#x + this.#radius > player.x && this.#xDirection === 1
		) {
			this.#yDirection *= -1;
		}
		else if (
			this.#y > player.y && this.#y < player.y + player.height &&
			this.#x + this.#radius > player.x && this.#x < player.x &&
			this.#xDirection === 1
		) {
			this.#xDirection *= -1;
		}
	}

	draw(canvasContext: CanvasRenderingContext2D) {
		canvasContext.fillStyle = 'white';
		canvasContext.beginPath();
		canvasContext.arc(this.#x, this.#y, this.#radius, 0, 2 * Math.PI);
		canvasContext.fill();
	}
}