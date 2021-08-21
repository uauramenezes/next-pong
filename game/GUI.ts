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

	#drawNet = (canvasContext: CanvasRenderingContext2D) => {
		let width = 6;
		let x = this.#canvasWidth / 2 - width / 2;
		canvasContext.fillRect(x, 0, width, this.#canvasHeight);

	}

	#drawScore = (canvasContext: CanvasRenderingContext2D) => {
		canvasContext.font = '35px serif';
		canvasContext.fillText(`${this.#leftScore}`, this.#left, 50);
		canvasContext.fillText(`${this.#rightScore}`, this.#right, 50);
	}

	draw(canvasContext: CanvasRenderingContext2D) {
		canvasContext.fillStyle = 'white';
		this.#drawNet(canvasContext);
		this.#drawScore(canvasContext);
	}

	raiseScore(side: string) {
		switch (side) {
			case 'left': 
				this.#rightScore++;
				break;
			case 'right': 
				this.#leftScore++;
				break;
		}
	}
}
