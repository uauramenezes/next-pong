export default class Player {
	#canvasWidth: number;
	#canvasHeight: number
	#x: number;
	#y: number;
	#width: number;
	#height: number;
	#speed = 1;
	#up = false;
	#down = false;

	constructor(player: number, canvasWidth: number, canvasHeight: number) {
		this.#canvasWidth = canvasWidth;
		this.#canvasHeight = canvasHeight;
		this.#width = this.#canvasWidth / 75;
		this.#height = this.#canvasHeight / 5;
		this.#x = player == 1 ? 11 : this.#canvasWidth - this.#width - 11;
		this.#y = this.#canvasHeight / 2 - (this.#canvasHeight / 10) / 2;
	}

  keyDown(e: KeyboardEvent, upKey: string, downKey: string) {
    switch (e.key) {
      case upKey: 
        this.#up = true;
        break;
      case downKey:
        this.#down = true;
        break;
    }
  }

  keyUp(e: KeyboardEvent, upKey: string, downKey: string) {
    switch (e.key) {
      case upKey: 
        this.#up = false;
        break
      case downKey:
        this.#down = false;
        break
    }
  }

  #wallDetection = () => {
    if (this.#y <= 0) this.#y = 0;
    if (this.#y + this.#height >= this.#canvasHeight) {
      this.#y = this.#canvasHeight - this.#height
    }
  }

  move(dt: number) {
    if (this.#up) this.#y -= this.#speed * dt;
    if (this.#down) this.#y += this.#speed * dt;
    this.#wallDetection()
  }

	draw(canvasContext: CanvasRenderingContext2D, color: string) {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(this.#x, this.#y, this.#width, this.#height);
	}
}
