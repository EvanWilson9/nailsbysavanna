import React from 'react'

import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className='hero-section'>
        <div className="hero-wrapper">
            <div className='hero-content'>
                <div className='hero-title'>Beautiful Nails,<br/>Beautiful You.</div>
                <Link><button className='hero-btn white'>contact me</button></Link>
            </div>
        </div>
    </section>
  )
}
