import React from 'react'

import Airplane from '../Assets/img/airplane.svg'
import Person1 from '../Assets/img/Person1.svg'
import Person2 from '../Assets/img/Person2.svg'
import Person3 from '../Assets/img/Person3.svg'

export default function Team() {
  return (
    <section id="team" className="relative mt-40 flex h-[70vh] w-full flex-col">
      <h1 className="flex items-center justify-center text-4xl font-bold">
        Team
      </h1>
      <main className="mt-12 flex w-full items-center justify-around">
        <div className="mt-12 flex w-80 flex-col">
          <img
            src={Person1}
            alt="Joana Smith"
            className="rounded-xl bg-orange-300"
          />
          <div className="pl-6">
            <h2 className="mt-6 text-xl font-bold">Joana Smith</h2>
            <p className="mt-1">Client</p>
          </div>
        </div>
        <div className="mt-12 flex w-80 flex-col">
          <img
            src={Person2}
            alt="John Locke"
            className="rounded-xl bg-purple-400"
          />
          <div className="pl-6">
            <h2 className="mt-6 text-xl font-bold">John Locke</h2>
            <p className="mt-1">Client</p>
          </div>
        </div>
        <div className="mt-12 flex w-80 flex-col">
          <img
            src={Person3}
            alt="Joana Smith"
            className="rounded-xl bg-indigo-500"
          />
          <div className="pl-6">
            <h2 className="mt-6 text-xl font-bold">Bill Gates</h2>
            <p className="mt-1">CEO</p>
          </div>
        </div>
      </main>
      <img
        className="absolute right-48 top-0 w-24"
        src={Airplane}
        alt="Paper airplane"
      />
      <img
        className="absolute top-20 -left-8 w-24"
        src={Airplane}
        alt="Paper airplane"
      />
    </section>
  )
}
