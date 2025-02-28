import React from 'react'

import { Link } from 'react-router-dom'
import Navbar from './Navbar'

export default function Hero() {
  return (
    <section className='hero-section'>
        <div className="hero-wrapper">
          <Navbar/>
            <div className='hero-content'>
                <div className='hero-title'>Beautiful Nails,<br/>Beautiful You.</div>
                <a href="#contact"><button className='hero-btn white'>contact me</button></a>
            </div>
        </div>
    </section>
  )
}
