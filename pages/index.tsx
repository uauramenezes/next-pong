import Head from 'next/head';
import Pong from '../game/Pong';
import Menu from '../menu/Menu';

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
      <Menu />
      <canvas id="canvas" width='800' height='500'></canvas>
    </main>
  )
}
