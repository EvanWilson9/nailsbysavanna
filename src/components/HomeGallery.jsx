import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeGallery() {
  return (
    <section className='hs-section'>
        <div className='hs-wrapper'>
            <h2>Check out my work </h2>
            <Link><button className='hero-btn black'>gallery</button></Link>
        </div>
    </section>
  )
}
