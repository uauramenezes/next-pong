import Ball from "./Ball";
import Player from "./Player";

export default function Pong() {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const canvasContext = canvas.getContext('2d') as CanvasRenderingContext2D;

  canvas.hidden = false;

  let leftPlayer = new Player(1, canvas.width, canvas.height);
  let rightPlayer = new Player(2, canvas.width, canvas.height);
  let ball = new Ball(canvas.width, canvas.height);

  document.addEventListener('keydown', (e) => {
    leftPlayer.keyDown(e.key, 'w', 's');
    rightPlayer.keyDown(e.key, 'ArrowUp', 'ArrowDown');
  });

  document.addEventListener('keyup', (e) => {
    leftPlayer.keyUp(e.key, 'w', 's');
    rightPlayer.keyUp(e.key, 'ArrowUp', 'ArrowDown');
  });

  let start = new Date().getTime();

  function render() {
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);

    let deltaTime = (new Date().getTime() - start) / 1000;

    leftPlayer.draw(canvasContext, 'white');
    leftPlayer.move(deltaTime);
    
    rightPlayer.draw(canvasContext, 'white');
    rightPlayer.move(deltaTime);

    ball.draw(canvasContext, 'white');
    ball.move(deltaTime);
    ball.leftPlayerCollision(leftPlayer.get())
    ball.rightPlayerCollision(rightPlayer.get())

    start = new Date().getTime();
    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}