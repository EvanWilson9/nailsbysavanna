import React from 'react'
import Hero from '../components/Hero'
import HomeServices from '../components/HomeServices'
import HomePolicies from '../components/HomePolicies'
import HomeGallery from '../components/HomeGallery'
import HomeContact from '../components/HomeContact'
import HomePricing from '../components/HomePricing'

export default function Home() {
  return (
    <>
        <Hero />
        <HomeServices />
        <HomePricing />
        <HomePolicies />
        <HomeGallery />
        <HomeContact />
    </>
  )
}
