import React from 'react'

export default function HomePricing() {

    const Tier = (props) => {
        return(
          <div className='tier'>
            <h3 className='tier-title'>{props.title}</h3>
            <div className='tier-price'>${props.price}</div>
            <div className='tier-desc-container'>
              <div className='tier-desc'><img className='check' src="/images/check-circle.svg"/>{props.item1}</div>
              <div className='tier-desc'><img className='check' src="/images/check-circle.svg"/>{props.item2}</div>
              <div className='tier-desc'><img className='check' src="/images/check-circle.svg"/>{props.item3}</div>
            </div>
          </div>
        )
      }

  return (
    <section className='hs-section'>
        <div className='hs-wrapper'>
            <h1 className='section-title'>Pricing</h1>
              <div className='tiers-container'>
                <Tier 
                title="Tier 1"
                price="35"
                item1="Solid Color"
                item2="Full Hand Chrome"
                item3="Aura/Ombre"
                />
                <Tier 
                title="Tier 2"
                price="40"
                item1="French Tips"
                item2="Basic Line Work"
                item3="Charms"
                />
                <Tier 
                title="Tier 3"
                price="45"
                item1="3D Art"
                item2="Detailed Lime Work"
                item3="Layered Art"
                />
              </div>
        </div>
    </section>
)
}
