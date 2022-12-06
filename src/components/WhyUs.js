import React from 'react'
import quality from '../assets/img/whyus/quality.svg'
import creativity from '../assets/img/whyus/creativity.svg'
import experience from '../assets/img/whyus/experience.svg'

const WhyUs = () => {
    return (
        <section className='why-us'>
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et rerum ducimus cum tempora magnam excepturi ab, aspernatur nobis sint cumque minus delectus totam.</p>
                    </div>
                    <div className="col-md-6 col-lg-4 why-us-card">
                        <img src={experience} alt="Extensive Experience" />
                        <h3>Extensive Experience</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et rerum ducimus cum tempora magnam excepturi ab, aspernatur nobis sint cumque minus delectus totam.</p>
                    </div>
                    <div className="col-md-6 col-lg-4 why-us-card">
                        <img src={creativity} alt="Incredible Creativity" />
                        <h3>Incredible Creativity</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et rerum ducimus cum tempora magnam excepturi ab, aspernatur nobis sint cumque minus delectus totam.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUs