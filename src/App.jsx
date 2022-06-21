import React from 'react'

import Navbar from './Components/Navbar'
import CallToAction from './Sections/CallToAction'
import Home from './Sections/Home'
import Partners from './Sections/Partners'
import Team from './Sections/Team'

export function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Partners />
      <Team />
      <CallToAction />
    </>
  )
}
