import React from 'react'

import calltoaction from '../Assets/img/calltoaction.svg'

export default function CallToAction() {
  return (
    <section className="mt-24 flex w-full items-center justify-center">
      <main className="max-w-1/2 flex w-3/4 rounded-3xl bg-purple-500 p-12 text-white">
        <div className="p-12">
          <h1 className="text-5xl">Call to action section</h1>
          <p className="mt-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
            cupiditate harum veritatis reiciendis repudiandae iusto, esse
            reprehenderit recusandae veniam sint.
          </p>
          <button className="mt-6 rounded-2xl bg-white px-10 py-4 text-purple-500 transition-all hover:bg-zinc-100">
            Know more
          </button>
        </div>
        <aside className="flex  w-full items-center justify-center">
          <img
            src={calltoaction}
            alt="Girl and dog looking to a sword in a rock"
          />
        </aside>
      </main>
    </section>
  )
}
