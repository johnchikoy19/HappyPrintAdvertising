import React from 'react'
import Link from 'next/link'

export default function AboutBreadcrumb() {
    return (
        <>
            {/* <!-- breadcrumb section start --> */}
            <section className=" pt-180 pb-180 bg_img" style={{"backgroundImage":"url(/images/about/ceiling4.png)"}} data-overlay="dark" data-opacity="3">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 d-flex">
                            <div className="breadcrumb-text" >
                                <h2 className="breadcrumb-text__title"  style={{color:'transparent'}}> 
                                    About us
                                </h2>
                                <ul className="breadcrumb-text__nav">
                                    {/* <li><Link href="/"><a>Home</a></Link></li>
                                    <li>-</li> */}
                                    <li  style={{color:'transparent'}}>High Quality Printing, Fastest Turnaround</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
            {/* <!-- breadcrumb section end --> */}
        </>
    )
}
