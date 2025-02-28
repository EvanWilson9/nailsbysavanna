import React from 'react'
import Navbar from '../components/Navbar'
import GalleryImages from '../components/GalleryImages'

export default function Gallery() {
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
