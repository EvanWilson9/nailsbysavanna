import React from 'react'

export default function HomePolicies() {

const Policy = (props) => {
    return(
        <div className='policy'>
            <h3 className='policy-title'>{props.title}</h3>
            <div className='policy-desc'>{props.desc}</div>
        </div>
    )
}

  return (
    <section className='hs-section my-policies'>
        <div className='hs-wrapper'>
            <h2 className='section-title'>My Policies</h2>
            <div className='policies-container'>
                <Policy
                    title="Cancelation"
                    desc="Last-minute cancellation/No-show will result in a 50% deposit if you choose to book with me again."
                />
                <Policy
                    title="Late Arrivals"
                    desc="15-minute grace period until automatic appointment cancellation."
                />
                <Policy
                    title="Nail Removals"
                    desc="I do not remove or do fills on foreign work."
                />
                <Policy
                    title="Preparation"
                    desc="If possible, send me an inspo picture of what you are wanting a day before your appointment to ensure I am able to do what you are wanting."
                />
                <Policy
                    title="Payment"
                    desc="Forms of payment accepted: Cash, Cashapp, Venmo."
                />
                <Policy
                    title="Booking"
                    desc="Booking outside of my availability will result in a $10 upcharge."
                />
            </div>
        </div>
    </section>
  )
}
