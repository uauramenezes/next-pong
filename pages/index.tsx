import Head from 'next/head';
import Menu from '../menu/Menu';

export default function Home() {
  return (
    <main id='main'>
      <Head>
        <title>Pong</title>
        <meta name="description" content="A simple Pong game built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu text='Click here to Start'/>
      <canvas id="canvas" width='800' height='500'></canvas>
    </main>
  )
}
