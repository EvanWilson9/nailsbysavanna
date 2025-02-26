import React from 'react'

export default function HomeServices() {

  const Service = (props) => {
    return(
      <div className='service'>
        <img className='service-img' src={props.img}></img>
        <h3 className='service-title'>{props.title}</h3>
        <div className='service-desc'>{props.desc}</div>
      </div>
    )
  }

  return (
    <section className='hs-section first'>
        <div className='hs-wrapper'>
          <h1 className='section-title center'>Services</h1>
          <div className='services-container'>
            <Service
              img="/images/hero-background.png"
              title="Gel Extension"
              desc="Gel extensions add length and strength to nails using builder gel, cured under UV/LED light."
            />
            <Service
              img="/images/hero-background.png"
              title="Structured Gel Manicure"
              desc="A Structured Gel Manicure reinforces natural nails with builder gel, providing added strength, durability, and a smooth, even shape."
            />
            <Service
              img="/images/hero-background.png"
              title="Gel Manicure"
              desc="A Gel Manicure uses gel polish cured under UV/LED light for a long-lasting, glossy finish."
            />
          </div>
            <div className='tiers-container'>
              <div>Tier 1</div>
              $35
              <>Solid Color | Full Hand Chrome | Aura/Ombre</>
              <div>Tier 2</div>
              $40
              <>French Tips | Basic Line Work | Charms</>
              <div>Tier 3</div>
              $45
              <>3D Art | Detailed Line Work | Layered Art</>
            </div>
        </div>
    </section>
  )
}
