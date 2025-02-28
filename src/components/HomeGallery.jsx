import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeGallery() {
  return (
    <section className='hs-section gallery-section'>
        <div className='hs-wrapper gallery-wrapper'>
          <div className="gallery-container">
            <h2>Check out my work </h2>
            <Link to="/gallery"><button className='hero-btn white'>gallery</button></Link>
          </div>
        </div>
    </section>
  )
}
