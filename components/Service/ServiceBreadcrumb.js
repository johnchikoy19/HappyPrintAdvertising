import React from 'react'

export default function ServiceBreadcrumb() {
    return (
        <>
            {/* <!-- breadcrumb section start --> */}
            <section className=" pt-180 pb-180 bg_img" style={{"backgroundImage":"url(/images/services/printservice2.png)","backgroundSize":"100%"}} data-overlay="dark" data-opacity="3">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 d-flex pr-0">
                            <div className="breadcrumb-text">
                                <h2 className="breadcrumb-text__title">
                                    our service
                                </h2>
                                {/* <ul className="breadcrumb-text__nav">
                                    <li><a href="index.html">Home</a></li>
                                    <li>-</li>
                                    <li>services</li>
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
