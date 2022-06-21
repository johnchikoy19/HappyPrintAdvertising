import React from 'react'

export default function AdvertisingDetailsBreadCrumb() {
    return (
        <>
            {/* <!-- breadcrumb section start --> */}
            <section className=" pt-180 pb-180 bg_img" style={{"background":"url(/images/services/fabrication.jpg)","backgroundRepeat":"no-repeat","backgroundSize":"100%","backgroundSize":'cover', "objectFit": "cover"}}
                data-overlay="dark" data-opacity="3">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 d-flex pr-0">
                            <div className="breadcrumb-text">
                                <h2 className="breadcrumb-text__title">
                               Advertising / Fabrication
                                </h2>
                                {/* <ul className="breadcrumb-text__nav">
                                    <li><a href="index.html">Home</a></li>
                                    <li>-</li>
                                    <li>project details</li>
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
