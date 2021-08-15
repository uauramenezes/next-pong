import Player from "./Player";

export default function Pong() {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

  canvas.hidden = false;

  let player1 = new Player(1, canvas.width, canvas.height)
  let player2 = new Player(2, canvas.width, canvas.height)

  document.addEventListener('keydown', (e) => {
    player1.keyDown(e, 'w', 's');
    player2.keyDown(e, 'ArrowUp', 'ArrowDown');
  });

  document.addEventListener('keyup', (e) => {
    player1.keyUp(e, 'w', 's');
    player2.keyUp(e, 'ArrowUp', 'ArrowDown');
  });

  let start = new Date().getTime();

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let deltaTime = new Date().getTime() - start;

    player1.draw(ctx, 'white');
    player1.move(deltaTime);
    
    player2.draw(ctx, 'white');
    player2.move(deltaTime);

    start = new Date().getTime()
    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}