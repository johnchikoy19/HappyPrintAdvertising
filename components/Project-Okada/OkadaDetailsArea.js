/* eslint-disable */
import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 
const images = [
    '/images/projectdetails/Okada/okada1.jpg',
    '/images/projectdetails/Okada/okada2.jpg',
    '/images/projectdetails/Okada/okada3.jpg',
    '/images/projectdetails/Okada/okada4.jpg'
   

  ];
  export default class  ProjectDetailsArea extends Component{
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
            {/* <!-- details content start --> */}
            <div className="details-content-area pt-125 pb-125">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="project-thumb d-flex align-self-stretch">
                                <img src="/images/projectdetails/Okada/okada1.1.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <ul className="project-details blue-bg">
                                <li>Project Name<span>Table Cladder</span></li>
                                <li>Client Name<span>Okada</span></li>
                                <li>Feedback<span>Happy Client</span></li>
                                <li>Project Date<span>29 Nov 2020</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row mt-40">
                        <div className="col-xl-12">
                            <div className="details-content details-content__project">
                                <h2 className="details-content__title mb-20">Project Description</h2>
                                <p>Turn an ordinary display table into a custom marketing tool that can be printed the same day with a full color printed table cladding.</p>
                                <div className="content mt-20">
                                    {/* <p>Duis porttitor sem sit ullamcorper massa lorem platea ultricies sollicitudin. Habitant
                                        cubilia varius platea nam lorem
                                        cum aenean sociosqu and per bibendum Arcu accumsan eleifend. Ipsum nam condimentum
                                        lobortis eu morbi a quis ipsum est
                                        bibendum mine vulputate hymenaeos taciti odio nullam ligula ultrices tristique viverra
                                        laoreet sapien curae;.
                                        Sollicitudin etiam elit torquent. Purus nascetur dis augue non iaculis ullamcorper lacus
                                        met quam commodo hendrerit
                                        lobortis vel. Sagittis felis iaculis mauris luctus</p> */}
                                    <h2 className="details-content__title mt-30 mb-35">Working Process</h2>
                                </div>
                                <div className="row mt-none-30">
                                    <div className="col-xl-3 col-lg-6 col-md-6 mt-30">
                                        <div className="wp-box">
                                            <div className="wp-box__icon wp-box__icon--1 mb-25">
                                                <img src="/images/icons/w-p-1.png" alt=""/>
                                            </div>
                                            <div className="wp-box__content">
                                                <h4 className="wp-box__title wp-box__title--2">Service Inquiry</h4>
                                                {/* <p>God They moving an firmament seed over herb gathering multis ply morning
                                                    fruitful</p> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-6 col-md-6 mt-30">
                                        <div className="wp-box">
                                            <div className="wp-box__icon wp-box__icon--2 mb-25">
                                                <img src="/images/icons/w-p-2.png" alt=""/>
                                            </div>
                                            <div className="wp-box__content">
                                                <h4 className="wp-box__title wp-box__title--2">Received Work</h4>
                                                {/* <p>God They moving an firmament seed over herb gathering multis ply morning
                                                    fruitful</p> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-6 col-md-6 mt-30">
                                        <div className="wp-box">
                                            <div className="wp-box__icon wp-box__icon--3 mb-25">
                                                <img src="/images/icons/w-p-3.png" alt=""/>
                                            </div>
                                            <div className="wp-box__content">
                                                <h4 className="wp-box__title wp-box__title--2">Satisfied Design</h4>
                                                {/* <p>God They moving an firmament seed over herb gathering multis ply morning
                                                    fruitful</p> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-6 col-md-6 mt-30">
                                        <div className="wp-box">
                                            <div className="wp-box__icon wp-box__icon--4 mb-25">
                                                <img src="/images/icons/w-p-4.png" alt=""/>
                                            </div>
                                            <div className="wp-box__content">
                                                <h4 className="wp-box__title wp-box__title--2">Start Printing</h4>
                                                {/* <p>God They moving an firmament seed over herb gathering multis ply morning
                                                    fruitful</p> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-10">
                                    <div className="col-xl-6 col-lg-6 col-md-6 d-flex mt-30">
                                        <div className="project-item" onClick={() => this.setState({ isOpen: true })} style={{cursor:'pointer'}}>
                                            <div className="project-item__thumb project-item__thumb--big">
                                                <img src="/images/projectdetails/Okada/okada1.jpg" alt=""/>
                                            </div>
                                            <div className="project-item__hover" data-overlay="dark" data-opacity="9" hidden>
                                                <a href="project-details.html" className="project-item__link">
                                                    <i className="far fa-arrow-right"></i>
                                                </a>
                                                <div className="project-item__content">
                                                    <h5 className="project-item__subtitle"><span> </span> Book Print</h5>
                                                    <h4 className="project-item__title">Megazine Cover</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 d-flex mt-30">
                                        <div className="project-item" onClick={() => this.setState({ isOpen: true })} style={{cursor:'pointer'}}>
                                            <div className="project-item__thumb project-item__thumb--big">
                                                <img src="/images/projectdetails/Okada/okada2.jpg" alt=""/>
                                            </div>
                                            <div className="project-item__hover" data-overlay="dark" data-opacity="9" hidden>
                                                <a href="project-details.html" className="project-item__link">
                                                    <i className="far fa-arrow-right"></i>
                                                </a>
                                                <div className="project-item__content">
                                                    <h5 className="project-item__subtitle"><span> </span> Book Print</h5>
                                                    <h4 className="project-item__title">Megazine Cover</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 d-flex mt-30">
                                        <div className="project-item" onClick={() => this.setState({ isOpen: true })} style={{cursor:'pointer'}}>
                                            <div className="project-item__thumb project-item__thumb--big">
                                                <img src="/images/projectdetails/Okada/okada3.jpg" alt=""/>
                                            </div>
                                            <div className="project-item__hover" data-overlay="dark" data-opacity="9" hidden>
                                                <a href="project-details.html" className="project-item__link">
                                                    <i className="far fa-arrow-right"></i>
                                                </a>
                                                <div className="project-item__content">
                                                    <h5 className="project-item__subtitle"><span> </span> Book Print</h5>
                                                    <h4 className="project-item__title">Megazine Cover</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 d-flex mt-30">
                                        <div className="project-item" onClick={() => this.setState({ isOpen: true })} style={{cursor:'pointer'}}>
                                            <div className="project-item__thumb project-item__thumb--big">
                                                <img src="/images/projectdetails/Okada/okada4.jpg" alt=""/>
                                            </div>
                                            <div className="project-item__hover" data-overlay="dark" data-opacity="9" hidden>
                                                <a href="project-details.html" className="project-item__link">
                                                    <i className="far fa-arrow-right"></i>
                                                </a>
                                                <div className="project-item__content">
                                                    <h5 className="project-item__subtitle"><span> </span> Book Print</h5>
                                                    <h4 className="project-item__title">Megazine Cover</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- details content end -->    */}
        </>
    )
}
  }