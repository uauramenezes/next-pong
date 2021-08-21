import IPlayer from './IPlayer'

export default class Player {
	#canvasWidth: number;
	#canvasHeight: number
	#x: number;
	#y: number;
	#width: number;
	#height: number;
	#speed = 250;
	#up = false;
	#down = false;

	constructor(player: string, canvasWidth: number, canvasHeight: number) {
		this.#canvasWidth = canvasWidth;
		this.#canvasHeight = canvasHeight;
		this.#width = Math.floor(this.#canvasWidth / 75);
		this.#height = Math.floor(this.#canvasHeight / 5);
		this.#x = player == 'left' ? 11 : this.#canvasWidth - this.#width - 11;
		this.#y = Math.floor(this.#canvasHeight / 2 - (this.#canvasHeight / 10) / 2);
	}

  keyDown(key: string, upKey: string, downKey: string) {
    switch (key) {
      case upKey: 
        this.#up = true;
        break;
      case downKey:
        this.#down = true;
        break;
    }
  }

  keyUp(key: string, upKey: string, downKey: string) {
    switch (key) {
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

  get(): IPlayer {
    return {
      x: this.#x,
      y: this.#y,
      width: this.#width,
      height: this.#height,
    }
  }
}
