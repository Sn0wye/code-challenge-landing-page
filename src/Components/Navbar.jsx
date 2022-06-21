import React from 'react'

import logoImg from '../Assets/img/logo.svg'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 flex w-full items-center justify-between bg-white px-32 pt-10 text-base">
      <img src={logoImg} alt="MasmasHub logo" />
      <ul className="flex items-center gap-16">
        <li className="font-bold text-purple-500">
          <a href="#home">Home</a>
        </li>
        <li className="text-zinc-700">
          <a href="#about">About</a>
        </li>
        <li className="text-zinc-700">
          <a href="#pricing">Pricing</a>
        </li>
        <button className="mb-2 rounded-2xl bg-purple-500 px-10 py-4 text-white transition-all hover:bg-purple-400">
          Sign up
        </button>
      </ul>
    </nav>
  )
}
