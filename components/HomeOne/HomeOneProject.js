/* eslint-disable */
import React from 'react'
import Link from 'next/link'
export default function HomeOneProject() {
    const imageStyle = {
        borderRadius:'20px',
      
    }
    return (
        <>
            {/* <!-- project section start --> */}
            <div className="project-area">
                <div className="container-fluid">
                    <div className="row project-row mt-none-30">
                        <div className="col-xl-5 col-lg-6 col-md-6 d-flex align-self-stretch mt-30">
                            <div className="project-item" >
                                <div className="project-item__thumb project-item__thumb--big" >
                                    <img src="/images/projectpics/Putok Batok/putokbatok1.jpg" alt="" style={imageStyle}/>
                                </div>
                                <Link href="/project-yumboss">
                                <div className="project-item__hover" data-overlay="dark" data-opacity="9">
                                    <a href="project-details.html" className="project-item__link"><i className="far fa-arrow-right"></i></a>
                                    <div className="project-item__content">
                                        <h5 className="project-item__subtitle"><span> </span> Yumboss Putok Batok</h5>
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
                                        <img src="/images/projectpics/Concentix/trix6.jpg" alt=""  style={imageStyle}/>
                                        </div>
                                        <Link href="/project-concentrix">
                                        <div className="project-item__hover" data-overlay="dark" data-opacity="9">
                                            <a href="project-details.html" className="project-item__link"><i className="far fa-arrow-right"></i></a>
                                            <div className="project-item__content">
                                                <h5 className="project-item__subtitle"><span> </span> Concentrix</h5>
                                                {/* <h4 className="project-item__title">Megazine Cover</h4> */}
                                            </div>
                                        </div>
                                        </Link>
                                     
                                    </div>
                                </div>
                                <div className="col-xl-6 col-md-6 col-lg-6 mt-30">
                                    <div className="project-item">
                                        <div className="project-item__thumb">
                                            <img src="/images/projectpics/EXL/exl1.jpg" alt="" style={imageStyle}/>
                                        </div>
                                        <Link href="/project-exl">
                                        <div className="project-item__hover" data-overlay="dark" data-opacity="9">
                                            <a href="project-details.html" className="project-item__link"><i className="far fa-arrow-right"></i></a>
                                            <div className="project-item__content">
                                                <h5 className="project-item__subtitle"><span> </span>EXL</h5>
                                                {/* <h4 className="project-item__title">Megazine Cover</h4> */}
                                            </div>
                                        </div>
                                        </Link>
                                      
                                    </div>
                                </div>
                                <div className="col-xl-6 col-md-6 col-lg-6 mt-30">
                                    <div className="project-item">
                                        <div className="project-item__thumb">
                                            <img src="/images/projectpics/Okada/okada1.jpg" style={imageStyle} alt=""/>
                                        </div>
                                        <Link href="/project-okada">
                                        <div className="project-item__hover" data-overlay="dark" data-opacity="9">
                                            <a href="project-details.html" className="project-item__link"><i className="far fa-arrow-right"></i></a>
                                            <div className="project-item__content">
                                                <h5 className="project-item__subtitle"><span> </span>OKADA</h5>
                                                {/* <h4 className="project-item__title">Megazine Cover</h4> */}
                                            </div>
                                        </div>
                                        </Link>
                                       
                                    </div>
                                </div>
                                <div className="col-xl-6 col-md-6 col-lg-6 mt-30">
                                    <div className="project-item">
                                        <div className="project-item__thumb">
                                            <img src="/images/projectpics/C-sitel/sitel1.jpg" style={imageStyle} alt=""/>
                                        </div>
                                        <Link href="/project-sitel">
                                        <div className="project-item__hover" data-overlay="dark" data-opacity="9">
                                            <a href="project-details.html" className="project-item__link"><i className="far fa-arrow-right"></i></a>
                                            <div className="project-item__content">
                                                <h5 className="project-item__subtitle"><span> </span>C-Sitel</h5>
                                                {/* <h4 className="project-item__title">Megazine Cover</h4> */}
                                            </div>
                                        </div>
                                        </Link>
                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- project section end -->    */}
        </>
    )
}
