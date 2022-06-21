/* eslint-disable */
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css';

SwiperCore.use([Navigation, Pagination]);

export default function AboutBrand() {
    return (
        <>
            {/* <!-- brand section start --> */}
            <div className="brand-section pt-125 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="brand-carousel owl-carousel">
                                <Swiper
                                    spaceBetween={2}
                                    slidesPerView={2}
                                    autoplaydisableoninteraction={"false"}
                                    loop={true}
                                    breakpoints={{

                                    // when window width is >= 768px
                                    576: {
                                        slidesPerView: 2,
                                    },
                                    768: {
                                        // when window width is >= 992px
                                        slidesPerView: 3,
                                    },
                                    992: {
                                        // when window width is >= 992px
                                        slidesPerView: 4,
                                    },
                                    1024: {
                                        // when window width is >= 992px
                                        slidesPerView: 5,
                                    }
                                }}
                                    
                                >

<SwiperSlide>
                                        <div className="brand-carousel__item">
                                            <img className="default" src="/images/clients/cimb.png" alt="" />
                                            <img className="hover" src="/images/clients/cimb.png" alt="" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="brand-carousel__item">
                                            <img className="default" src="/images/clients/sitel.png" alt="" />
                                            <img className="hover" src="/images/clients/sitel.png" alt="" />
                                        </div>
                                    </SwiperSlide>
                                    {/* <SwiperSlide>
                                        <div className="brand-carousel__item">
                                            <img className="default" src="/images/clients/teletech.png" alt="" />
                                            <img className="hover" src="/images/clients/teletech.png" alt="" />
                                        </div>
                                    </SwiperSlide> */}
                                    <SwiperSlide>
                                        <div className="brand-carousel__item">
                                            <img className="default" src="/images/clients/okada2.png" alt="" />
                                            <img className="hover" src="/images/clients/okada2.png" alt="" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="brand-carousel__item">
                                            <img className="default" src="/images/clients/yumboss_logo.jpg" alt="" />
                                            <img className="hover" src="/images/clients/yumboss_logo.jpg" alt="" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="brand-carousel__item">
                                            <img className="default" src="/images/clients/PIFS.png" alt="" />
                                            <img className="hover" src="/images/clients/PIFS.png" alt="" />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- brand section end -->    */}
        </>
    )
}
