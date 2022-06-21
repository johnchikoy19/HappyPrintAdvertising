/* eslint-disable */
import React from 'react'

export default function AboutSection() {
    return (
        <>
            {/* <!-- about section start --> */}
            <section className="about-area pt-125 pb-125">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-5">
                            <div className="about__bg about__bg--2 mt-75">
                                <div className="big-thumb">
                                    <img src="/images/about/aboutdetails.png" alt="" />
                                </div>
                                {/* <div className="mid-thumb position-absulate">
                                <img src="/images/etc/ab1.jpg" alt="" />
                                </div> */}
                                {/* <div className="small-thumb position-absulate">
                                <img src="/images/etc/ab3.jpg" alt="" />
                                </div> */}
                                <span className="circle-shape position-absulate"><img src="/images/shape/border-shape-2.png" alt="" /></span>
                                <span className="patternt-shape position-absulate"><img src="/images/shape/about-shape-1.png" alt="" /></span>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="section-header section-header__2 mb-40">
                                <h4 className="sub-heading sub-heading__2 mb-10">About Us <span><img
                                    src="/images/shape/heading-shape-4.png" className="ml-10" alt="" /></span></h4>
                                <h2 className="section-title section-title__2 mb-30">Happy Print Advertising</h2>
                                <p>Happy Print Advertising Inc. also known as Happy Print Enterprises was established on July 16, 2007, although relatively young and new in printing and advertising industry. Happyprint has already acquired large number of regular clients, as a confirmation of company's commitments to high quality outputs, delivered On Time.</p>
                                <br></br>
                                <p>We are growing company, strongly devoted to maintain good quality and on-time services. It is always in our hearts to give full satisfaction to our valued clients.</p>
                            </div>
                            <div className="row mt-none-40">
                                <div className="col-xl-6 mt-40">
                                    <div className="ab__box">
                                        <div className="ab__box--head">
                                            <div className="icon">
                                                <img src="/images/icons/ab-1.png" alt="" />
                                            </div>
                                            <h4 className="title">Get the <br />
                                                Most Definitely</h4>
                                        </div>
                                        {/* <p>Pulvinar primis to velit dolo sociise aptent varius acuise maner platea dames pura
                                            suspen
                                        </p> */}
                                    </div>
                                </div>
                                <div className="col-xl-6 mt-40">
                                    <div className="ab__box">
                                        <div className="ab__box--head">
                                            <div className="icon icon__2">
                                                <img src="/images/icons/ab-2.png" alt="" />
                                            </div>
                                            <h4 className="title">Fast and <br />
                                                quality service</h4>
                                        </div>
                                        {/* <p>Pulvinar primis to velit dolo sociise aptent varius acuise maner platea dames pura
                                            suspen
                                        </p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="ab-author-signature mt-55" hidden>
                                <div className="author__box">
                                    <div className="author__box--thumb">
                                        <img src="/images/employees/Mam Juwela2.jpg" alt="" />
                                    </div>
                                    <div className="author__box--text">
                                        <h4 className="name">Juwella Ann A. Samaco</h4>
                                        <span className="designation">CEO of Happy Print Advertising</span>
                                    </div>
                                </div>
                                {/* <div className="signature">
                                    <img src="/images/shape/signature.png" alt="" />
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:'60px'}}>
                    <section className=" pt-180 pb-180 bg_img" style={{"backgroundImage":"url(/images/about/mivision.png)"}} data-overlay="dark" data-opacity="3">
           
                    <div className="row" >
                    <div className="col-xl-12 col-lg-12 col-md-12" style={{display:'flex'}}  >
                    <div className="col-xl-3"  >
                            <h2 className="breadcrumb-text__title" style={{marginTop:'-20px'}}>
                                Mission
                                </h2>
                               
                            </div>
                            <div className="col-xl-5" style={{marginLeft:'80px'}} >
                            <h4 className="">
                            Creating a world of possibilities in printing and advertising as well as to impart a positive impact to our clients, shareholders, and employees.
                                </h4>
                               
                            </div>
                                </div>
                      
                                <div className="col-xl-12 col-lg-12 col-md-12" style={{display:'flex',marginTop:'40px'}}  >
                    <div className="col-xl-3"  >
                            <h2 className="breadcrumb-text__title" style={{marginTop:'-20px'}}>
                                Vision
                                </h2>
                               
                            </div>
                            <div className="col-xl-5" style={{marginLeft:'80px'}} >
                            <h4 className="">
                            To become the go-to-printing and advertising services company that offers not only higher-quality printing, but also the fastest turn-around for your corporate as well as everyday printing needs. 
                                </h4>
                               
                            </div>
                                </div>
                              
                     
                           
                     
                    
                          
                    </div>
               
                
            </section>
            </div>
                </div>

            </section>

            {/* <!-- about section end --> */}
        </>
    )
}
