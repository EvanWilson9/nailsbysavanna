import React from 'react'

export default function GalleryImages() {

    const images = [
        {id: 1, src:"/images/image1.webp"},
        {id: 2, src:"/images/hero-background.png"},
        {id: 3, src:"/images/image2.jpg"},
        {id: 4, src:"/images/image3.jpg"},
        {id: 1, src:"/images/image1.webp"},
        {id: 2, src:"/images/hero-background.png"},
        {id: 3, src:"/images/image2.jpg"},
        {id: 4, src:"/images/image3.jpg"},
        {id: 1, src:"/images/image1.webp"},
        {id: 2, src:"/images/hero-background.png"},
        {id: 3, src:"/images/image2.jpg"},
        {id: 4, src:"/images/image3.jpg"},
      ]

  return (
    <div className='galleryp-container'>
        {
            images.map((item)=>{
            return(
                <img key={item.id} src={item.src} className='gallery-img'/>
            )
        })
        }
    </div> 
)
}
