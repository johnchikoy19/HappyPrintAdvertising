/* eslint-disable */
import React, { useState } from 'react'

export default function HomeOneFAQ() {
    const [activeDefault, setActiveDefault] = useState(0);
    const FAQ = [
        {
            q: "Why do I choose HAPPYPRINT ADVERTISING INC.?",
            a:"We offer fast services and provide quality products."
        },
        {
            q: "Do you have shipping once we acquired the service?",
            a:"We ship nationwide inside and outside Metro Manila."
        },
        {
            q: "Can I request a different format of files?",
            a:"We only provide JPG, PNG, PDF and TIFF."
        },
        {
            q: "What are other options aside from bank transfer for payment?",
            a:"We also accept cash and cheque for payments."
        }
        
    ]
    return (
        <>
            {/* <!-- faq section start --> */}
            <section className="faq-area pt-80 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="section-header mb-25">
                                <h4 className="sub-heading mb-15">Common Question</h4>
                                <h2 className="section-title">Asked Questions</h2>
                            </div>
                            <div className="accordion faqs" id="accordionFaq">
                                {FAQ.map((d, i) => (
                                    <div className="card">
                                        <div onClick={() => setActiveDefault(activeDefault === i ? -1 : i)} className="card__header" id="heading1">
                                            <h5 className="mb-0 title">
                                                <button onClick={() => setActiveDefault(activeDefault === i ? -1 : i)} className={activeDefault === i ? "btn btn-link collapsed" : "btn btn-link"} type="button" data-toggle="collapse"
                                                    data-target="#collapse1" aria-expanded={activeDefault === i ?"true" :"false"} aria-controls="collapse1">
                                                   {d.q}
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse1" className={`collapse ${activeDefault === i ? "show" : ""}`} aria-labelledby="heading1" data-parent="#accordionFaq">
                                            <div className="card__body">
                                                <p>{d.a}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="faq-bg">
                                <img src="/images/icons/faq.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- faq section end -->    */}
        </>
    )
}
