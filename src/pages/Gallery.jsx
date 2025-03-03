import React from 'react'
import Navbar from '../components/Navbar'
import GalleryImages from '../components/GalleryImages'

export default function Gallery() {

  window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <section className='galleryp-section'>
      <div className="galleryp-wrapper">
        <section className='gallery-hero-section'>
        <Navbar />
        <div className='title-container'>
          <h1 className='color-white gallery-title'>Gallery</h1>
        </div>
        </section>
        <section>
          <GalleryImages/>
        </section>
      </div>
    </section>
  )
}
