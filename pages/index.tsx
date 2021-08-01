import Head from 'next/head'

export default function Pong() {
  return (
    <main className='main'>
      <Head>
        <title>Pong</title>
        <meta name="description" content="A simple Pong game built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <canvas id="canvas" width='700' height='400'></canvas>
    </main>
  )
}
