import Ball from "./Ball";
import { GUI } from "./GUI";
import Player from "./Player";

export default function Pong() {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

  canvas.hidden = false;

  let leftPlayer = new Player('left', canvas.width, canvas.height);
  let rightPlayer = new Player('right', canvas.width, canvas.height);
  let ball = new Ball(canvas.width, canvas.height);
  let gui = new GUI(canvas.width, canvas.height);

  document.addEventListener('keydown', (e) => {
    leftPlayer.keyDown(e.key, 'w', 's');
    rightPlayer.keyDown(e.key, 'ArrowUp', 'ArrowDown');
  });

  document.addEventListener('keyup', (e) => {
    leftPlayer.keyUp(e.key, 'w', 's');
    rightPlayer.keyUp(e.key, 'ArrowUp', 'ArrowDown');
  });

  let start = new Date().getTime();

  let counter = 3;
  let countDown = setInterval(() => {
    counter--
  }, 1000)
  let timeOut: NodeJS.Timer;

  let play = false;

  function render() {
    requestAnimationFrame(render);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let deltaTime = (new Date().getTime() - start) / 1000;
    
    if (counter > 0) {
      return gui.drawCountDown(ctx, counter)
    } 
    if (counter == 0) {
      clearInterval(countDown);
      timeOut = setTimeout(() => {
        play = true;
        counter = -1
      }, 1000)
    }

    gui.draw(ctx);
    ball.draw(ctx);
    
    leftPlayer.draw(ctx, 'white');
    rightPlayer.draw(ctx, 'white');

    if (play) {
      leftPlayer.move(deltaTime);
      rightPlayer.move(deltaTime);

      ball.leftPlayerCollision(leftPlayer.get());
      ball.rightPlayerCollision(rightPlayer.get());

      let score = ball.move(deltaTime)
      play = gui.raiseScore(score);
    }
    
    start = new Date().getTime();
  }

  requestAnimationFrame(render);

}
