import React from 'react'

import adventureIllustrationImg from '../Assets/img/adventureIllustration.svg'
import playIcon from '../Assets/img/play.svg'

export default function Home() {
  return (
    <section id="home" className="flex h-screen w-full px-40 pt-5">
      <main className="mt-40">
        <h1 className="text-bold text-6xl">
          Designed and build
          <br />
          to keep you selling
        </h1>
        <p className="pt-6">
          When you need to stay focused and alert on the right
          <br />
          deals, our CRM is here to support you.
        </p>
        <div className="mt-20 flex h-20 w-full">
          <button className="w- rounded-3xl bg-purple-500 py-6 px-10 text-white transition-all hover:bg-purple-400">
            Try it for free
          </button>
          <button className="ml-4 flex h-20 w-20 items-center justify-center rounded-full bg-zinc-100 shadow-2xl">
            <img src={playIcon} alt="Play" />
          </button>
        </div>
      </main>
      <aside className="ml-auto">
        <img src={adventureIllustrationImg} alt="Adventure Illustration" />
      </aside>
    </section>
  )
}
