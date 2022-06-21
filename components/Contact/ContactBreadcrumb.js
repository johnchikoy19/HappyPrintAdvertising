import React from 'react'

export default function ContactBreadcrumb() {
    return (
        <>
            {/* <!-- breadcrumb section start --> */}
            <section className="breadcrumb-section pt-180 pb-180 bg_img" style={{ "background": "url(/images/contact/contactus2.jpg)","backgroundRepeat":"no-repeat","backgroundSize":"100%" }}
                data-overlay="dark" data-opacity="3">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 d-flex pr-0">
                            <div className="breadcrumb-text">
                                <h5 className="breadcrumb-text__title" style={{fontSize:'50px'}}>
                                    contact us
                                </h5>
                                {/* <ul className="breadcrumb-text__nav">
                                    <li><a href="index.html">Home</a></li>
                                    <li>-</li>
                                    <li>contact us</li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- breadcrumb section end -->    */}
        </>
    )
}
