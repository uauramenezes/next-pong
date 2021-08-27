export class GUI {
	#left: number;
	#right: number;
	#leftScore = 0;
	#rightScore = 0;
	#canvasWidth: number;
	#canvasHeight: number;

	constructor(canvasWidth: number, canvasHeight: number) {
		this.#canvasHeight = canvasHeight;
		this.#canvasWidth = canvasWidth;
		this.#left = canvasWidth / 4;
		this.#right = canvasWidth * 3 / 4;
	}

	drawCountDown(canvasContext: CanvasRenderingContext2D, counter: number) {
		canvasContext.textAlign = 'center';
		canvasContext.fillStyle = 'white';
		canvasContext.font = '35px serif';
		canvasContext.fillText(`${counter}`, this.#canvasWidth / 2, this.#canvasHeight / 2);
	}

	#drawNet = (canvasContext: CanvasRenderingContext2D) => {
		let width = 5;
		let x = this.#canvasWidth / 2 - width / 2;
		canvasContext.fillRect(x, 0, width, this.#canvasHeight);
	}

	#drawScore = (canvasContext: CanvasRenderingContext2D) => {
		canvasContext.font = '35px serif';
		canvasContext.fillText(`${this.#leftScore}`, this.#left, 50);
		canvasContext.fillText(`${this.#rightScore}`, this.#right, 50);
		if (this.#leftScore === 5 || this.#rightScore === 5) {
			return 
		}
	}

	draw(canvasContext: CanvasRenderingContext2D) {
		canvasContext.fillStyle = 'white';
		this.#drawNet(canvasContext);
		this.#drawScore(canvasContext);
	}

	raiseScore(side: string) {
		if (side === 'left') this.#rightScore++;
		if (side === 'right') this.#leftScore++;
		if (this.#leftScore === 5 || this.#rightScore == 5) {
			return false;
		}
		return true;
	}
}
