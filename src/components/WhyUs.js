import React from 'react'
import quality from '../assets/img/whyus/quality.svg'
import creativity from '../assets/img/whyus/creativity.svg'
import experience from '../assets/img/whyus/experience.svg'

const WhyUs = () => {
    return (
        <section className='why-us' id='why-us'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>
                            Why Satoshi Edits?
                        </h2>

                    </div>
                </div>
                <div className="row why-us-container">
                    <div className="col-md-6 col-lg-4 why-us-card">
                        <img src={quality} alt="Outstanding Quality" />
                        <h3>Outstanding Quality</h3>
                        <p>Whether it's for business or personal needs, Satoshi Edits strives to provide the best possible experience for our clients. We work closely with our clients to define and understand project requirements all with the goal of producing exceptional content that is sure to convince your target audiences.</p>
                    </div>
                    <div className="col-md-6 col-lg-4 why-us-card">
                        <img src={experience} alt="Extensive Experience" />
                        <h3>Extensive Experience</h3>
                        <p>Whether it's for business or personal needs, Satoshi Edits strives to provide the best possible experience for our clients. We work closely with our clients to define and understand project requirements all with the goal of producing exceptional content that is sure to convince your target audiences.</p>
                    </div>
                    <div className="col-md-6 col-lg-4 why-us-card">
                        <img src={creativity} alt="Incredible Creativity" />
                        <h3>Incredible Creativity</h3>
                        <p>We combine the latest technology and our creative skills to personalize your videos, giving them personality and purpose. From online marketing to product introductions, we can make any video reflect your unique brand and voice. So why wait? Contact us today to get started!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUs