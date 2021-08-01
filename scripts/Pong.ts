export default function Pong() {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;


  

  function changeSize() {
    let main = document.getElementById('main') as HTMLElement;
    main.addEventListener('click', () => {
      canvas.height = canvas.height == 400 ? 600 : 400;
    })
  }

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    ctx.fillRect(canvas.width / 2 - 25, canvas.height / 2 - 25, 50, 50);
    changeSize()
    requestAnimationFrame(render)
  }

  requestAnimationFrame(render);
}