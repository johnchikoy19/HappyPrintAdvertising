/* eslint-disable */
import React from 'react'

export default function HomeOneAbout() {
    return (
        <>
            {/* <!-- about section start --> */}
            <section className="about-area pt-130 pb-130">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-6 pr-0">
                            <div className="about__bg" data-tilt data-tilt-perspective="3000" >
                                <img src="/images/homepage/workplace.png" alt="" style={{borderRadius:'20px'}}/>
                            </div>
                        </div>
                        <div className="col-xl-6 pl-80">
                            <div className="section-header mb-40">
                                <h4 className="sub-heading mb-10">About Us</h4>
                                <h2 className="section-title mb-35">Happy Print Advertising</h2>
                                <p>Happy Print Advertising Inc. also known as Happy Print Enterprises was established on July 16, 2007, although relatively young and new in printing and advertising industry. Happyprint has already acquired large number of regular clients, as a confirmation of company's commitments to high quality outputs, delivered On Time.</p>
                            </div>
                            <div className="about-lists">
                                <ul>
                                    <li><i className="fa fa-check"></i> We  strongly devoted to maintain good quality and on-time services.
                                    </li>
                                    <li><i className="fa fa-check"></i> It is always in our hearts to give full satisfaction to our valued clients.</li>
                                </ul>
                            
                               <a href="/about" className="site-btn site-btn__s2 mt-55"><span className="icon icon__black"><i
                                    className="far fa-arrow-right"></i></span> Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- about section end -->    */}
        </>
    )
}
