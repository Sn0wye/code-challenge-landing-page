import React from 'react'

import attImg from '../Assets/img/AT&T.svg'
import linkedinImg from '../Assets/img/Linkedin.svg'
import redditImg from '../Assets/img/Reddit.svg'
import zendeskImg from '../Assets/img/Zendesk.svg'

export default function Partners() {
  return (
    <section id="parners">
      <h1 className="flex w-full items-center justify-center text-4xl font-bold">
        Partners we&apos;ve work with
      </h1>
      <ul className="mt-16 flex items-center justify-around px-52">
        <li>
          <a href="https://reddit.com/">
            <img src={redditImg} alt="Reddit Logo" />
          </a>
        </li>
        <li>
          <a href="https://att.com/">
            <img src={attImg} alt="AT&T Logo" />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/">
            <img src={linkedinImg} alt="Linkedin Logo" />
          </a>
        </li>
        <li>
          <a href="https://zendesk.com/">
            <img src={zendeskImg} alt="Zendesk Logo" />
          </a>
        </li>
      </ul>
    </section>
  )
}
