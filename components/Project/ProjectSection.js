/* eslint-disable */
import React from 'react'
import Link from 'next/link'
export default function ProjectSection() {
    const imageStyle = {
        borderRadius:'20px',
      
    }
    return (
        <>
            {/* <!-- project section start --> */}
            <div className="project-area project-area__2 pt-125">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 text-center">
                            <div className="section-header mb-65">
                                <h4 className="sub-heading sub-heading__2 mb-15" hidden>
                                    <span><img src="/images/shape/heading-shape-3.png" className="mr-5" alt="" /></span>
                                    Project showcase
                                    <span><img src="/images/shape/heading-shape-4.png" className="ml-5" alt="" /></span>
                                </h4>
                                <h2 className="section-title section-title__2"> projects</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row project-row mt-none-30">
                        <div className="col-xl-5 col-lg-6 col-md-6 d-flex align-self-stretch mt-30">
                            <div className="project-item">
                                <div className="project-item__thumb project-item__thumb--big">
                                    <img src="/images/projectpics/Putok Batok/putokbatok1.jpg" alt=""  style={imageStyle}/>
                                </div>
                                <Link href="/project-yumboss">
                                <div className="project-item__hover" data-overlay="dark" data-opacity="9">
                                    <a href="project-details.html" className="project-item__link"><i
                                        className="far fa-arrow-right"></i></a>
                                    <div className="project-item__content">
                                        <h5 className="project-item__subtitle"><span> </span>Yumboss Putok Batok</h5>
                                        {/* <h4 className="project-item__title">Megazine Cover</h4> */}
                                    </div>
                                </div>
                                </Link>
                             
                            </div>
                        </div>
                        <div className="col-xl-7 mt-30">
                            <div className="row mt-none-30">
                                <div className="col-xl-6 col-md-6 col-lg-6 mt-30">
                                    <div className="project-item">
                                        <div className="project-item__thumb">
                                            <img src="/images/projectpics/Concentix/trix6.jpg" alt="" style={imageStyle}/>
                                        </div>
                                        <Link href="/project-concentrix">
                                        <div className="project-item__hover" data-overlay="dark" data-opacity="9">
                                            <a href="project-details.html" className="project-item__link"><i
                                                className="far fa-arrow-right"></i></a>
                                            <div className="project-item__content">
                                                <h5 className="project-item__subtitle"><span> </span>Concentrix</h5>
                                                {/* <h4 className="project-item__title">Megazine Cover</h4> */}
                                            </div>
                                        </div>
                                        </Link>
                                       
                                    </div>
                                </div>
                                <div className="col-xl-6 col-md-6 col-lg-6 mt-30">
                                    <div className="project-item">
                                        <div className="project-item__thumb">
                                            <img src="/images/projectpics/Concentix/trix4.jpg" alt="" style={imageStyle}/>
                                        </div>
                                        <Link href="/project-concentrix">
                                        <div className="project-item__hover" data-overlay="dark" data-opacity="9">
                                            <a href="project-details.html" className="project-item__link"><i
                                                className="far fa-arrow-right"></i></a>
                                            <div className="project-item__content">
                                            <h5 className="project-item__subtitle"><span> </span>Concentrix</h5>
                                                {/* <h4 className="project-item__title">Megazine Cover</h4> */}
                                            </div>
                                        </div>
                                        </Link>
                                        
                                    </div>
                                </div>
                                <div className="col-xl-12 col-md-6 col-lg-12 col-md-12 mt-30">
                                    <div className="project-item">
                                        <div className="project-item__thumb">
                                            <img src="/images/projectpics/Okada/okada2.jpg" alt=""  style={imageStyle}/>
                                        </div>
                                        <Link href="/project-okada">
                                        <div className="project-item__hover" data-overlay="dark" data-opacity="9">
                                            <a href="project-details.html" className="project-item__link"><i
                                                className="far fa-arrow-right"></i></a>
                                            <div className="project-item__content">
                                                <h5 className="project-item__subtitle"><span> </span>OKADA</h5>
                                                {/* <h4 className="project-item__title">Megazine Cover</h4> */}
                                            </div>
                                        </div>
                                        </Link>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 d-flex mt-30">
                            <div className="project-item">
                                <div className="project-item__thumb project-item__thumb--big">
                                    <img src="/images/projectpics/Primesearch/primesearch1.jpg" alt="" style={imageStyle}/>
                                </div>
                                <Link href="/project-prime">
                                <div className="project-item__hover" data-overlay="dark" data-opacity="9">
                                    <a href="project-details.html" className="project-item__link"><i
                                        className="far fa-arrow-right"></i></a>
                                    <div className="project-item__content">
                                        <h5 className="project-item__subtitle"><span> </span>Primesearch</h5>
                                        {/* <h4 className="project-item__title">Megazine Cover</h4> */}
                                    </div>
                                </div>
                                </Link>
                              
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 d-flex mt-30">
                            <div className="project-item">
                                <div className="project-item__thumb project-item__thumb--big">
                                    <img src="/images/projectpics/CIMB Bank/cimb1.jpg" alt="" style={imageStyle}/>
                                </div>
                                <Link href="/project-cimb">
                                <div className="project-item__hover" data-overlay="dark" data-opacity="9">
                                    <a href="project-details.html" className="project-item__link"><i
                                        className="far fa-arrow-right"></i></a>
                                    <div className="project-item__content">
                                        <h5 className="project-item__subtitle"><span> </span>CIMB</h5>
                                        {/* <h4 className="project-item__title">Megazine Cover</h4> */}
                                    </div>
                                </div>
                                </Link>
                              
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 d-flex mt-30">
                            <div className="project-item">
                                <div className="project-item__thumb project-item__thumb--big">
                                    <img src="/images/projectpics/signages/sign1.jpg" alt="" style={imageStyle}/>
                                </div>
                                <Link href="/project-ictsi">
                                <div className="project-item__hover" data-overlay="dark" data-opacity="9">
                                    <a href="project-details.html" className="project-item__link"><i
                                        className="far fa-arrow-right"></i></a>
                                    <div className="project-item__content">
                                        <h5 className="project-item__subtitle"><span> </span>ICTSI</h5>
                                        {/* <h4 className="project-item__title">Megazine Cover</h4> */}
                                    </div>
                                </div>
                                </Link>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- project section end -->    */}
        </>
    )
}
