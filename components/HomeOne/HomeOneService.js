/* eslint-disable */
import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 
const panaflex = [
    '/images/featured/panaflex/panaflex1.jpg',
    '/images/featured/panaflex/panaflex2.jpg',

   

  ];

    export default class  HomeOneService extends Component{
        constructor(props) {
            super(props);
        
            this.state = {
              photoIndex: 0,
              isOpen: false,
            };
            
          };
          render(){
            const { photoIndex, isOpen } = this.state;
        
  
    return (
        <>
         {/* <!-- service section start --> */}
    <section className="service-area pt-125 pb-125">
        <div className="container">
            
            <div className="row justify-content-center">
                <div className="col-xl-8 text-center">
                    <div className="section-header mb-75">
                        <h4 className="sub-heading mb-25">
                            <span><img src="/images/shape/heading-shape-1.png" className="mr-10" alt=""/></span>
                            Our Services
                            <span><img src="/images/shape/heading-shape-2.png" className="ml-10" alt=""/></span>
                        </h4>
                        <h2 className="section-title">Flawless Printing</h2>
                    </div>
                </div>
            </div>
            <div className="row mt-none-50">
                <div className="col-xl-6 col-lg-6 mt-50 " >
                    <div className="service-item d-flex">
                        <div className="service-item__icon service-item__icon--1">
                            <img src="/images/icons/panaflex.png" alt=""/>
                        </div>
                        <div className="service-item__content">
                            <h4 className="service-item__title">Panaflex Signage</h4>
                            <p>Cost-effective solution both for your interior and exterior advertising needs.</p>
                        </div>
                    </div>
                </div>

            {isOpen && (
          <Lightbox
            mainSrc={panaflex[photoIndex]}
            nextSrc={panaflex[(photoIndex + 1) % panaflex.length]}
            prevSrc={panaflex[(photoIndex + panaflex.length - 1) % panaflex.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + panaflex.length - 1) % panaflex.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % panaflex.length,
              })
            }
          />
        )}
                <div className="col-xl-6 col-lg-6 mt-50">
                    <div className="service-item d-flex">
                        <div className="service-item__icon service-item__icon--2">
                            <img src="/images/icons/diecut.png" alt=""/>
                        </div>
                        <div className="service-item__content">
                            <h4 className="service-item__title">Die Cut Stickers</h4>
                            <p>Make an exceptional way to get your brand, band or products noticed.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 mt-50">
                    <div className="service-item d-flex">
                        <div className="service-item__icon service-item__icon--3">
                            <img src="/images/icons/banner.png" alt=""/>
                        </div>
                        <div className="service-item__content">
                            <h4 className="service-item__title">Pull Up Banner</h4>
                            <p>A great option for displaying signage at tradeshows, conferences, exhibitions, retail stores, and markets. .</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 mt-50">
                    <div className="service-item d-flex">
                        <div className="service-item__icon service-item__icon--4">
                            <img src="/images/icons/frosted.png" alt=""/>
                        </div>
                        <div className="service-item__content">
                            <h4 className="service-item__title">Frosted Stickers</h4>
                            <p> On top of giving a privacy to other employees in the office, it gives also a classy look in the workplace.</p>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-6 mt-50">
                    <div className="service-item d-flex">
                        <div className="service-item__icon service-item__icon--4">
                            <img src="/images/icons/lighted.png" alt=""/>
                        </div>
                        <div className="service-item__content">
                            <h4 className="service-item__title">Lighted Signages</h4>
                            <p>Make your business hard to ignore and can significantly improve the visibility of a business that can make stand out.</p>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-6 mt-50">
                    <div className="service-item d-flex">
                        <div className="service-item__icon service-item__icon--4">
                            <img src="/images/icons/safety.png" alt=""/>
                        </div>
                        <div className="service-item__content">
                            <h4 className="service-item__title">Safety Signages</h4>
                            <p>Offering customise safety solutions to meet your individual requirements whilst complying with local safety standards.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-xl-8 text-center">
                    <div className="view-all mt-55">
                        <p>We help take your small business to the next level. <a href="/service">All Services</a></p>
                    </div>
                </div>
            </div>

            
        </div>
    </section>
    {/* <!-- service section end -->    */}
        </>
    )
}
    }