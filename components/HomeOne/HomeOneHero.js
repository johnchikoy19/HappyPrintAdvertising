/* eslint-disable */
import React from 'react'
import Image from 'next/image'
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([Navigation, Pagination]);

export default function HomeOneHero() {
    SwiperCore.use([Autoplay]);
    const team = [
        {
            title: [<span style={{color:"#ffffff",fontSize:'30px'}}>Your Total<br></br> Branding Partner</span>],
            // desc: "Magnificence in the realistic interchanges",
            // img: (
            //     <img
            //     src="/images/shape/hero-shape.png"
            //     layout="responsive"
            //     width={1174}
            //     height={899}
            //     />
            //     ),
            //     src: "/images/banner/hp-slide-1.jpeg"
            // },
            src: "/images/Homepage/branding.jpg"
        },
        {
            title: ["Fabrication"],
            // desc: "Magnificence in the realistic interchanges",
            // img: (
            //     <img
            //         src="/images/shape/hero-shape.png"
            //         layout="responsive"
            //         width={1174}
            //         height={899}
            //     />
            // ),
            src: "/images/Homepage/fabrication.jpg"
        },
        {
            title: [<span style={{color:"white"}}>We Pesonalize</span>],
            // desc: "Magnificence in the realistic interchanges",
            // img: (
            //     <img
            //         src="/images/shape/hero-shape.png"
            //         layout="responsive"
            //         width={1174}
            //         height={899}
            //     />
            // ),
            src: "/images/Homepage/personalize.jpg"
        },
        {
            title: [<span style={{color:"white"}}>Highest Quality Printing, Fastest Turn Around</span>],
            // desc: "Magnificence in the realistic interchanges",
            // img: (
            //     <img
            //         src="/images/shape/hero-shape.png"
            //         layout="responsive"
            //         width={1174}
            //         height={899}
            //     />
            // ),
            src: "/images/Homepage/turnaround.jpg"
        }
    ];

    return (
        <>
            {/* <!-- hero start --> */}
            <section className="hero position-relative">
                <Swiper
                    // install Swiper modules
                    // modules={[Navigation, Scrollbar]}
                    spaceBetween={20}
                    slidesPerView={1}
                    autoplaydisableoninteraction={"false"}
                    loop={true}
                    autoplay={true}
                    className=""
                    // modules={[Autoplay, Pagination, Navigation]}
                    navigation={{
                        prevEl: ".custom-prev",
                        nextEl: ".custom-next",
                    }}
                // pagination={{ clickable: true }}
                // breakpoints={{

                //     // when window width is >= 768px
                //     768: {
                //         slidesPerView: 2,
                //     },
                //     992: {
                //         // when window width is >= 992px
                //         slidesPerView: 3,
                //     }
                // }}
                // scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
                >
                    {team.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className="hero__item" style={{backgroundImage:"url('/images/banner/bg2.jpg')"}}>
                                <div className="container-fluid p-0">
                                    <div className="row no-gutters">
                                        <div className="col-xl-5 col-lg-7">
                                            <div className="hero__content">
                                        <h4 className="hero__title" style={{fontSize: '50px'}} data-animation="fadeIn" data-delay=".2s" data-duration=".5s">{item.title[0]} <br />
                                                    {item.title[1]}</h4>
                                                {/* <p data-animation="fadeInUp" data-delay=".5s" data-duration=".7s">Magnificence in the
                                                    realistic interchanges</p> */}
                                                <a data-animation="fadeInUp" data-delay=".7s" data-duration=".9s" href="/about"
                                                    className="site-btn"><span className="icon"><i className="far fa-arrow-right"></i></span> Read
                                                    More</a>
                                                <div className="shape">
                                                    <img src="/images/shape/hero-shape.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hero__image d-flex align-self-stretch">
                                    <img src={item.src} alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
                <div className="owl-nav">
                    <div className="custom-prev owl-prev"><i className="fal fa-angle-left"></i></div>
                    <div className="custom-next owl-next"><i className="fal fa-angle-right"></i></div>
                </div>

            </section>
            {/* <!-- hero end --> */}
        </>
    )
}
