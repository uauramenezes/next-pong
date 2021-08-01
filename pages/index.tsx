import Head from 'next/head';
import { useEffect } from 'react';
import Pong from '../scripts/Pong';

export default function Home() {
  useEffect(() => {
    Pong()
  }, [])
  return (
    <main id='main'>
      <Head>
        <title>Pong</title>
        <meta name="description" content="A simple Pong game built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <canvas id="canvas" width='700' height='400'></canvas>
    </main>
  )
}
