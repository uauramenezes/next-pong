export default function Pong() {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

  canvas.hidden = false;

  let player1 = {
    w: canvas.width / 75,
    h: canvas.height / 5,
    x: 11,
    y: canvas.height / 2 - (canvas.height / 10) / 2,
    speed: 10,
    dx: 0,
    dy: 0,
    up: false,
    down: false,
  }

  document.addEventListener('keydown', keyDown);
  document.addEventListener('keyup', keyUp);

  function keyDown(e: KeyboardEvent) {
    switch (e.key) {
      case 'w': 
      case 'ArrowUp':
        player1.up = true;
        break;
      case 's':
      case 'ArrowDown':
        player1.down = true;
        break;
    }
  }

  function keyUp(e: KeyboardEvent) {
    switch (e.key) {
      case 'w': 
      case 'ArrowUp':
        player1.up = false;
        break
      case 's':
      case 'ArrowDown':
        player1.down = false;
        break
    }
  }

  function wallDetection() {
    if (player1.y <= 0) player1.y = 0;
    if (player1.y + player1.h >= canvas.height) {
      player1.y = canvas.height - player1.h
    }
  }

  function movePlayer() {
    if (player1.up) player1.y -= player1.speed;
    if (player1.down) player1.y += player1.speed;
    wallDetection()
  }

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    ctx.fillRect(player1.x, player1.y, player1.w, player1.h);
    movePlayer();
    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}