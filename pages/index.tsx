import Head from 'next/head';
import Pong from '../game/Pong';

export default function Home() {
  function startGame() {
    const btn = document.getElementById('btn') as HTMLButtonElement;
    btn.hidden = true;
    Pong()
  }
  
  return (
    <main id='main'>
      <Head>
        <title>Pong</title>
        <meta name="description" content="A simple Pong game built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button id="btn" onClick={() => startGame()}>Start</button>
      <canvas id="canvas" width='800' height='500' hidden={true}></canvas>
    </main>
  )
}
