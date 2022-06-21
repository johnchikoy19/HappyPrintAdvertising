/* eslint-disable */
import React, { useState, useRef  } from 'react'
import VideoPopUp from '../Plugins/VideoPopup'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import SwiperCore, {Navigation, EffectFade} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import axios from 'axios'
import Swal from 'sweetalert2'
SwiperCore.use([Navigation, EffectFade]);

export default function CareerArea() {
    const [isPopUp, setPopUp] = useState(false)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [position, setPosition] = useState('');
    const [message, setMessage] = useState('');

 const [imageUpload, setImageUpload]  = useState(null);

 const ref = useRef();

    const fileSelectHandler  = (e) => {
        // console.log(e.target.files)

  }
    const handleClick = (e) => {
        e.preventDefault();
        
        if(e.target.id == "name"){
            setName(e.target.value)
        }

        if(e.target.id == "mail"){
            setEmail(e.target.value)
        }
        if(e.target.id == "phone"){
            setPhone(e.target.value)
        }
        if(e.target.id == "position"){
            setPosition(e.target.value)
        }
        if(e.target.id == "message"){
            setMessage(e.target.value)
        }
    };


    const createImage = (file) => {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.setState({
            image: e.target.result
          });
        };
        reader.readAsDataURL(file);
      };

    const   submitApply = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('position', position);
        formData.append('message', message);
		formData.append('imageUpload', imageUpload);
// try {
    if(imageUpload==null)  return;

console.log(imageUpload)
fetch(
    'https://v3-api.hips-md.com/api/happyprint/jobemail',
    {
        method: 'POST',
        body: formData,
    }
)
    .then((response) => response.json())
    .then((result) => {
        Swal.fire('', 'Application Successfully Sent','success');
          
     setName('')
     setEmail('')
     setPhone('')
     setPosition('')
     setMessage('')
     setImageUpload('');
     ref.current.value = "";
  
    })
    .catch((error) => {
        Swal.fire('Error', error);
    });
    }
// );
    return (
        <>
            {/* <!-- news area start --> */}
            <div className="blog__area blog__area--2 pt-125 pb-125">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <article className="blog__box blog__box--3 blog__box--image mb-40">
                            <div className="col-xl-8 col-lg-8">
                            <div className="thumb">
                                    {/* <a href="news-details.html"> */}
                                        <img src="/images/career/careers.png" alt="blog image" style={{borderRadius:'20px'}} />
                                    {/* </a> */}
                                </div>
                            </div>
                               
                                <div className="content pt-50">
                                  
                                    <h3 className="title">
                                    Together, all the way for each other
                                    </h3>
                                    {/* <div className="meta mt-20 mb-20">
                                        <span><i className="far fa-eye"></i> 232 Views </span>
                                        <span><a href="#0"><i className="far fa-comments"></i> 35 Comments</a></span>
                                        <span><a href="#0"><i className="far fa-calendar-alt"></i> 24th March 2019</a></span>
                                    </div> */}
                                    <div className="post-text mb-35">
                                        <p>Diversity inspires us, our culture connects us.Our modern, inclusive workplaces are filled with amazing individuals who share our values and vision to go all the way. All the way for our customers, our company and each other.</p>
                                    </div>
                                    {/* <div className="post-bottom mt-30">
                                        <div className="authore">
                                            <img src="/images/news/news-list-authore.png" alt="" />
                                            <span>by Hetmayar</span>
                                        </div>
                                        <a href="news-details.html" className="inline-btn"><span className="icon"><i
                                            className="fal fa-arrow-right"></i></span> Read
                                            More</a>
                                    </div> */}
                                </div>
                            </article>
                            <article className="blog__box blog__box--3 blog__box--video mb-40">
                                {/* <div className="thumb">
                                    <a onClick={setPopUp} href="news-details.html">
                                        <img src="/images/news/news-list-2.jpeg" alt="blog image" />
                                    </a>
                                    <a onClick={setPopUp} href="//www.youtube.com/embed/4xe72U7mXNg?rel=0&amp;controls=0&amp;showinfo=0"
                                        data-rel="lightcase:myCollection" data-animation="fadeInLeft" data-delay=".1s"
                                        className="video-link">
                                        <div className="video-play-wrap">
                                            <div className="video-mark">
                                                <div className="wave-pulse wave-pulse-1"></div>
                                                <div className="wave-pulse wave-pulse-2"></div>
                                            </div>
                                            <div className="video-play">
                                                <i className="fa fa-play"></i>
                                            </div>
                                        </div>
                                    </a>
                                    {isPopUp && <VideoPopUp setShow={() => setPopUp(false)} src={"https://www.youtube.com/embed/4xe72U7mXNg"} />}
                                </div> */}
                                      <div className="col-xl-8 col-lg-8">
                                      <div className='thumb'>
                                <a href="news-details.html">
                                        <img src="/images/career/teams.png" alt="blog image"  style={{borderRadius:'20px'}}/>
                                    </a>
                                </div>
                                      </div>
                               
                                <div className="content pt-50">
                                   
                                    <h3 className="title">
                                  Our Teams
                                    </h3>
                                   
                                    <div className="post-text mb-35">
                                        <p>Discover opportunities for graduates or experienced professionals. Explore our programmes, departments and much more. At Happy Print, we encourage new challenges and want everyone to build an exciting future. Unleash your potential in a place where everyone strives to be at their best.</p>
                                    </div>
                                  
                                </div>
                            </article>
                            <article className="blog__box blog__box--3 blog__box--video mb-40">
                                {/* <div className="thumb">
                                    <a onClick={setPopUp} href="news-details.html">
                                        <img src="/images/news/news-list-2.jpeg" alt="blog image" />
                                    </a>
                                    <a onClick={setPopUp} href="//www.youtube.com/embed/4xe72U7mXNg?rel=0&amp;controls=0&amp;showinfo=0"
                                        data-rel="lightcase:myCollection" data-animation="fadeInLeft" data-delay=".1s"
                                        className="video-link">
                                        <div className="video-play-wrap">
                                            <div className="video-mark">
                                                <div className="wave-pulse wave-pulse-1"></div>
                                                <div className="wave-pulse wave-pulse-2"></div>
                                            </div>
                                            <div className="video-play">
                                                <i className="fa fa-play"></i>
                                            </div>
                                        </div>
                                    </a>
                                    {isPopUp && <VideoPopUp setShow={() => setPopUp(false)} src={"https://www.youtube.com/embed/4xe72U7mXNg"} />}
                                </div> */}
                                      <div className="col-xl-8 col-lg-8">
                                      <div className='thumb'>
                                <a href="news-details.html">
                                        <img src="/images/career/careers2.png" alt="blog image"  style={{borderRadius:'20px'}}/>
                                    </a>
                                </div>
                                      </div>
                               
                                <div className="content pt-50">
                                   
                                    <h3 className="title">
                                   Apply with us
                                    </h3>
                                   
                                    <div className="post-text mb-35">
                                        <p>If you share our excitement for the journey ahead, we can't wait to hear from you. Explore our guide to applying, who we're looking for and useful hints and tips for interviews..</p>
                                    </div>
                                  
                                </div>
                            </article>
                          
                            <article className="blog__box blog__box--3 blog__box--video mb-40">
                                    
                            <div className="content pt-50">
                                   
                                   <h3 className="title">
                                Job Openings
                                   </h3>
                                  
                                   <div className="post-text mb-35">
                                    <Accordion >
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                   Sales Representative
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p style={{textAlign:'justify'}}>
                                                        
                                                <h3 className="title">
                                                    Role
                                                </h3>
                                                Sales representatives are responsible for communicating the benefits of a company's products in order to drive sales. Sales reps serve as the point of contact between a business and its prospects or clients and have a range of responsibilities including identifying and educating prospective customers while supporting existing clients with information and assistance that relates to products and services. Qualifications often include strong interpersonal and communication skills as well as a Bachelor's degree in business or related fields.
                                                </p><br></br>

                                                <p style={{textAlign:'justify'}}>
                                                        
                                                        <h3 className="title">
                                                            Responsibilities
                                                        </h3>
                                                        <ul>
                                                        <li>&#8226; Present, promote and sell products/services using solid arguments to existing and prospective customers.</li>
                                                        <li>&#8226; Perform cost-benefit and needs analysis of existing/potential customers to meet their needs.</li>
                                                        <li>&#8226; Establish, develop and maintain positive business and customer relationships.</li>
                                                        <li>&#8226; Reach out to customer leads through cold calling.</li>
                                                        <li>&#8226; Expedite the resolution of customer problems and complaints to maximize satisfaction.</li>
                                                        <li>&#8226; Achieve agreed upon sales targets and outcomes within schedule.</li>
                                                        <li>&#8226; Coordinate sales effort with team members and other departments.</li>
                                                        <li>&#8226; Keep abreast of best practices and promotional trends.</li>
                                                        </ul>  
                                                        </p>
                                                        <br></br>
                                                        <p style={{textAlign:'justify'}}>
                                                        
                                                        <h3 className="title">
                                                        Requirements and Skills
                                                        </h3>
                                                        <ul>
                                                        <li>&#8226; Proven work experience as a Sales Representative</li>
                                                        <li>&#8226; Excellent knowledge of MS Office.</li>
                                                        <li>&#8226; Highly motivated and target driven with a proven track record in sales.</li>
                                                        <li>&#8226; Reach out to customer leads through cold calling.</li>
                                                        <li>&#8226; Excellent selling, negotiation and communication skills.</li>
                                                        <li>&#8226; Ability to create and deliver presentations tailored to the audience needs.</li>
                                                        <li>&#8226; Bachelor’s degree in business or a related field.</li>
                                                    
                                                        </ul>  
                                                        </p>
                                                
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                

                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                   Signage Installer
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p style={{textAlign:'justify'}}>
                                                        
                                                <h3 className="title">
                                                    Role
                                                </h3>
                                                We are seeking a detail-oriented sign installer to transport and install a variety of signs. In this role, you will be required to ensure that the designs meet clients' specifications, prepare the signs for mounting, and manage the placement and installation of the signs, among other duties.

                                                To ensure success as a sign installer, you will need to be highly organized, have good knowledge about the types of signs, and be comfortable working at heights. An outstanding sign installer will demonstrate precision and possess a sound understanding of the applicable construction and installation techniques.
                                                </p><br></br>

                                                <p style={{textAlign:'justify'}}>
                                                        
                                                        <h3 className="title">
                                                            Responsibilities
                                                        </h3>
                                                        <ul>
                                                        <li>&#8226; Ensuring that signs meet clients' specifications in terms of spelling, font, size, and medium.</li>
                                                        <li>&#8226; Loading and transporting signs, tools, and materials to the location safely.</li>
                                                        <li>&#8226; Preparing the site for installation by removing old signage, preparing the surface or structure, and securing the electrical connections.</li>
                                                        <li>&#8226; Ensuring the effective measurement, placement, connection, and installation of the sign.</li>
                                                        <li>&#8226; Mounting and installing the signs in accordance with all safety protocols.</li>
                                                        <li>&#8226; Clearing debris and materials from the site after each installation.</li>
                                                        <li>&#8226; Performing maintenance and repairs to signs, as needed.</li>
                                                        <li>&#8226; Operating and maintaining the tools and equipment in accordance with safety protocols..</li>
                                                        </ul>  
                                                        </p>
                                                        <br></br>
                                                        <p style={{textAlign:'justify'}}>
                                                        
                                                        <h3 className="title">
                                                        Requirements and Skills
                                                        </h3>
                                                        <ul>
                                                        <li>&#8226; High school diploma or GED.</li>
                                                        <li>&#8226; Journeyman electrician license.</li>
                                                        <li>&#8226; At least two years' experience as a sign installer or similar.</li>
                                                        <li>&#8226; Valid commercial driver's license and a clean driving record.</li>
                                                        <li>&#8226; Good knowledge of various types of signs including vinyl, channel letters, electrical signs, and road signs.</li>
                                                        <li>&#8226; A sound understanding of the applicable installation methods, materials, and safety measures.</li>
                                                        <li>&#8226; The ability to operate hand and power tools.</li>
                                                        <li>&#8226; TPhysically fit and able to perform strenuous labor including lifting, climbing, and working at heights.</li>
                                                        <li>&#8226; Willingness to work during evenings and on weekends, as needed.</li>
                                                    
                                                        </ul>  
                                                        </p>
                                                
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                   </div>
                                 
                            
                                   
                                    <h3 className="title">
                                 Join us!
                                    </h3>
                                   
                                    <div className="post-text mb-35">
                                        <p>We are always on the lookout for talented individuals to join our growing team.</p>
                                    </div>

                 
                 
                        <div className="col-xl-8 pl-50">
                            <div className="section-header mb-50">
                              
                                <h2 className="section-title section-title__2" style={{color:'#FD4A36'}}>Job Application</h2>
                            </div>
                            <div className="contact-form">
                                <form action="#" method="POST" id="contact-form" onSubmit={submitApply}>
                                    <div className="form-group mt-25">
                                        <input type="text" name="name" id="name" value={name} onChange={handleClick}     placeholder="Your Name" required/>
                                    </div>
                                    <div className="form-group mt-25">
                                        <input type="email" name="email" id="mail" value={email} onChange={handleClick}   placeholder="Email Address" required/>
                                    </div>
                                    <div className="form-group mt-25">
                                        <input type="text" name="phone" id="phone" value={phone} onChange={handleClick}   placeholder="Mobile Number" required />
                                    </div>
                                    <div className="form-group mt-25">
                                        <input type="text" name="position" id="position" value={position} onChange={handleClick}   placeholder="Job Position" required/>
                                    </div>
                                  
                                    <div className="form-group mt-25">
                                        <textarea name="message" id="message" value={message}  onChange={handleClick}    placeholder="Your Message" required></textarea>
                                    </div>
                                    <div className="form-group mt-25">
                                        <h3>Attachment</h3>
                                        <input type="file"  ref={ref} name="jobfile" id="jobfile"   onChange={(event) =>setImageUpload(event.target.files[0])} />
                                    </div>
                                    <button type="submit" className="site-btn site-btn__2 mt-15"><span className="icon icon__black"><i
                                        className="far fa-arrow-right"></i></span> Apply</button>
                                    <p className="ajax-response"></p>
                                </form>
                            </div>
                        </div>
              
                                  
                                </div>
                            </article>
                            <article className="blog__box blog__box--3 blog__box--gallery mb-40" hidden>
                                <div className="post_gallery owl-carousel position-relative">
                                    <Swiper
                                        spaceBetween={2}
                                        slidesPerView={1}
                                        autoplaydisableoninteraction={"false"}
                                        autoplay={{
                                            "delay": 3000,
                                            "disableOnInteraction": false
                                          }}
                                         loop={true}
                                         effect={"fade"}
                                         fadeEffect= {{
                                            crossFade: true
                                          }}
                                        className="custom-class"
                                        navigation={{
                                            prevEl: ".custom-prev",
                                            nextEl: ".custom-next",
                                        }}
                                    >

                                        <SwiperSlide>
                                            <div className="single-postbox-gallery">
                                                <img src="/images/news/news-list-3.jpeg" alt="blog image" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="single-postbox-gallery">
                                                <img src="/images/news/news-list-2.jpeg" alt="blog image" />
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                    <div className="pixen-nav">
                                        <div className="pixen-prev custom-prev"><i className="fal fa-arrow-left"></i></div>
                                        <div className="pixen-next custom-next"><i className="fal fa-arrow-right"></i></div>
                                    </div>
                                </div>
                                <div className="content pt-50">
                                    <div className="cat">
                                        <span>Businese</span>
                                    </div>
                                    <h3 className="title">
                                        <a href="news-details.html">Magna aliqua.Ut enim ad minim venia
                                            m, quis nostrud exercitation ullamco</a>
                                    </h3>
                                    <div className="meta mt-20 mb-20">
                                        <span><i className="far fa-eye"></i> 232 Views </span>
                                        <span><a href="#0"><i className="far fa-comments"></i> 35 Comments</a></span>
                                        <span><a href="#0"><i className="far fa-calendar-alt"></i> 24th March 2019</a></span>
                                    </div>
                                    <div className="post-text mb-35">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                            incididunt ut labore et
                                            dolore magna
                                            aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo
                                            consequat.Duis
                                            aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore.</p>
                                    </div>
                                    <div className="post-bottom mt-30">
                                        <div className="authore">
                                            <img src="/images/news/news-list-authore.png" alt="" />
                                            <span>by Hetmayar</span>
                                        </div>
                                        <a href="news-details.html" className="inline-btn"><span className="icon"><i
                                            className="fal fa-arrow-right"></i></span> Read
                                            More</a>
                                    </div>


                                </div>
                            </article>
                            <article className="blog__box blog__box--3 blog__box--audio mb-40" hidden>
                                <div className="postbox_audio embed-responsive embed-responsive-16by9">
                                    <iframe style={{ "height": "450px" }} className="w-100"
                                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/469608615&color=%23ff0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">

                                    </iframe>
                                </div>
                                <div className="content pt-50">
                                    <div className="cat">
                                        <span>Businese</span>
                                    </div>
                                    <h3 className="title">
                                        <a href="news-details.html">Laboris nisi ut aliquip ex ea commodo
                                            consequat.Duis aute irure dolor.</a>
                                    </h3>
                                    <div className="meta mt-20 mb-20">
                                        <span><i className="far fa-eye"></i> 232 Views </span>
                                        <span><a href="#0"><i className="far fa-comments"></i> 35 Comments</a></span>
                                        <span><a href="#0"><i className="far fa-calendar-alt"></i> 24th March 2019</a></span>
                                    </div>
                                    <div className="post-text mb-35">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                            incididunt ut labore et
                                            dolore magna
                                            aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo
                                            consequat.Duis
                                            aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore.</p>
                                    </div>
                                    <div className="post-bottom mt-30">
                                        <div className="authore">
                                            <img src="/images/news/news-list-authore.png" alt="" />
                                            <span>by Hetmayar</span>
                                        </div>
                                        <a href="news-details.html" className="inline-btn"><span className="icon"><i
                                            className="fal fa-arrow-right"></i></span> Read
                                            More</a>
                                    </div>
                                </div>
                            </article>
                            <article className="blog__box blog__box--3 blog__box--text mb-40" hidden>
                                <div className="content pt-50">
                                    <div className="cat">
                                        <span>Businese</span>
                                    </div>
                                    <h3 className="title">
                                        <a href="news-details.html">In reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur.</a>
                                    </h3>
                                    <div className="meta mt-20 mb-20">
                                        <span><i className="far fa-eye"></i> 232 Views </span>
                                        <span><a href="#0"><i className="far fa-comments"></i> 35 Comments</a></span>
                                        <span><a href="#0"><i className="far fa-calendar-alt"></i> 24th March 2019</a></span>
                                    </div>
                                    <div className="post-text mb-35">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                            incididunt ut labore et
                                            dolore magna
                                            aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo
                                            consequat.Duis
                                            aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore.</p>
                                    </div>
                                    <div className="post-bottom">
                                        <div className="authore">
                                            <img src="/images/news/news-list-authore.png" alt="" />
                                            <span>by Hetmayar</span>
                                        </div>
                                        <a href="news-details.html" className="inline-btn"><span className="icon"><i
                                            className="fal fa-arrow-right"></i></span> Read
                                            More</a>
                                    </div>
                                </div>
                            </article>
                            <article className="blog__box blog__box--3 blog__box--quote mb-40" hidden>
                                <blockquote>
                                    <h3 className="title">
                                        <a href="news-details.html">Excepteur sint occaecat cupida
                                            tat non proident, sunt in.</a>
                                    </h3>
                                    <div className="meta mt-20">
                                        <span><i className="far fa-eye"></i> 232 Views </span>
                                        <span><a href="#0"><i className="far fa-comments"></i> 23 Comments</a></span>
                                        <span><a href="#0"><i className="far fa-calendar-alt"></i> 24th March 2019</a></span>
                                    </div>
                                    <div className="quote-icon">
                                        <img src="/images/icons/quote-icon.png" alt="" />
                                    </div>
                                </blockquote>
                            </article>
                            <article className="blog__box blog__box--3 blog__box--transparent bg_img"
                                data-background="/images/news/news-list-4.jpeg" data-overlay="light" data-opacity="7" hidden>
                                <div className="content pt-50">
                                    <div className="cat">
                                        <span>Businese</span>
                                    </div>
                                    <h3 className="title">
                                        <a href="news-details.html">Culpa qui officia deserunt mollit anim
                                            id est laborum.Sed ut perspiciatis</a>
                                    </h3>
                                    <div className="meta mt-20 mb-20">
                                        <span><i className="far fa-eye"></i> 232 Views </span>
                                        <span><a href="#0"><i className="far fa-comments"></i> 35 Comments</a></span>
                                        <span><a href="#0"><i className="far fa-calendar-alt"></i> 24th March 2019</a></span>
                                    </div>
                                </div>
                            </article>
                            <div className="blog__pagination mt-40" hidden>
                                <ul>
                                    <li><a href="#0"><i className="fas fa-angle-double-left"></i></a></li>
                                    <li><a href="#0">01</a></li>
                                    <li className="active"><a href="#0">02</a></li>
                                    <li><a href="#0">03</a></li>
                                    <li><a href="#0"><i className="fas fa-ellipsis-h"></i></a></li>
                                    <li><a href="#0"><i className="fas fa-angle-double-right"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-12" hidden>
                            <div className="sidebar-wrap">
                                <div className="widget sidebar grey-bg mb-40">
                                    <h1  className="sidebar__title">
                                        <span><img src="/images/shape/heading-shape-3.png" className="mr-5" alt="" /></span>
                                     Together, all the way for each other
                                    </h1>
                                    <div className="aboutme text-center">
                                        {/* <img src="/images/news/news-author-2.jpeg" alt="" />
                                        <h4>Rosalina D.Willaimson</h4> */}
                                        <div>Diversity inspires us, our culture connects us. </div>
                                        <div>Our modern, inclusive workplaces are filled with amazing individuals who share our values and vision to go all the way.</div>

                                        <p>All the way for our customers, our company and each other.</p>
                                        {/* <div className="aboutme__icon mt-30">
                                            <a href="#0"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#0"><i className="fab fa-twitter"></i></a>
                                            <a href="#0"><i className="fab fa-behance"></i></a>
                                            <a href="#0"><i className="fab fa-linkedin-in"></i></a>
                                            <a href="#0"><i className="fab fa-youtube"></i></a>
                                        </div> */}
                                    </div>
                                </div>
                                {/* <div className="widget sidebar grey-bg mb-40">
                                    <h4 className="sidebar__title mb-30">
                                        <span><img src="/images/shape/heading-shape-3.png" className="mr-5" alt="" /></span>
                                        Search Objects
                                    </h4>
                                    <form className="sidebar-search-form">
                                        <input type="text" placeholder="Search your keyword..." />
                                        <button type="submit"><i className="fas fa-search"></i></button>
                                    </form>
                                </div> */}
                                <div className="widget sidebar grey-bg mb-40">
                                    <h4 className="sidebar__title mb-30">
                                        <span><img src="/images/shape/heading-shape-3.png" className="mr-5" alt="" /></span>
                                        Popular Feeds
                                    </h4>
                                    <ul className="recent-posts">
                                        <li>
                                            <div className="thumb">
                                                <a href="blog-details.html"><img
                                                    src="/images/news/news-releted-post-1.jpeg" alt="" /></a>
                                            </div>
                                            <div className="content">
                                                <h6 className="title"><a href="news-details.html">Lorem ipsum dolor sit
                                                    cing elit, sed do.</a></h6>
                                                <div className="meta"> 24th March 2019</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="thumb">
                                                <a href="blog-details.html"><img
                                                    src="/images/news/news-releted-post-2.jpeg" alt="" /></a>
                                            </div>
                                            <div className="content">
                                                <h6 className="title"><a href="news-details.html">Lorem ipsum dolor sit
                                                    cing elit, sed do.</a></h6>
                                                <div className="meta"> 24th March 2019</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="thumb">
                                                <a href="blog-details.html"><img
                                                    src="/images/news/news-releted-post-3.jpeg" alt="" /></a>
                                            </div>
                                            <div className="content">
                                                <h6 className="title"><a href="news-details.html">Lorem ipsum dolor sit
                                                    cing elit, sed do.</a></h6>
                                                <div className="meta"> 24th March 2019</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="thumb">
                                                <a href="blog-details.html"><img
                                                    src="/images/news/news-releted-post-4.jpeg" alt="" /></a>
                                            </div>
                                            <div className="content">
                                                <h6 className="title"><a href="news-details.html">Lorem ipsum dolor sit
                                                    cing elit, sed do.</a></h6>
                                                <div className="meta"> 24th March 2019</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="widget sidebar grey-bg mb-40">
                                    <h4 className="sidebar__title mb-30">
                                        <span><img src="/images/shape/heading-shape-3.png" className="mr-5" alt="" /></span>
                                        Categories
                                    </h4>
                                    <ul className="sidebar__list">
                                        <li>
                                            <a href="service-details.html">Banner Printing
                                                <span className="icon"><i className="far fa-arrow-right"></i></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="service-details.html">Billboard Printing
                                                <span className="icon"><i className="far fa-arrow-right"></i></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="service-details.html">Business Card
                                                <span className="icon"><i className="far fa-arrow-right"></i></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="service-details.html">Poster Printing
                                                <span className="icon"><i className="far fa-arrow-right"></i></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="service-details.html">Poster Printing
                                                <span className="icon"><i className="far fa-arrow-right"></i></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="service-details.html">T-Shirt Printing
                                                <span className="icon"><i className="far fa-arrow-right"></i></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="widget sidebar grey-bg mb-40">
                                    <h4 className="sidebar__title mb-30">
                                        <span><img src="/images/shape/heading-shape-3.png" className="mr-5" alt="" /></span>
                                        Never Miss News
                                    </h4>
                                    <div className="social__links">
                                        <a href="#0"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#0"><i className="fab fa-twitter"></i></a>
                                        <a href="#0"><i className="fab fa-pinterest-p"></i></a>
                                        <a href="#0"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                                <div className="widget sidebar grey-bg mb-40">
                                    <h4 className="sidebar__title mb-30">
                                        <span><img src="/images/shape/heading-shape-3.png" className="mr-5" alt="" /></span>
                                        Twitter Feeds
                                    </h4>
                                    <ul className="twitter__feeds">
                                        <li>
                                            <div className="t-feed-icon">
                                                <i className="fab fa-twitter"></i>
                                            </div>
                                            <div className="t-feed-body">
                                                <p>Rescue - #Gutenberg ready @wordpress
                                                    Theme for Creative Bloggers available on
                                                    @ThemeForest https://t.co/2r1POjOjgV
                                                    C… https://t.co/rDAnPyClu1</p>
                                                <div className="t-feed-meta"> November 25, 2018</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="t-feed-icon">
                                                <i className="fab fa-twitter"></i>
                                            </div>
                                            <div className="t-feed-body">
                                                <p>Rescue - #Gutenberg ready @wordpress
                                                    Theme for Creative Bloggers available on
                                                    @ThemeForest https://t.co/2r1POjOjgV
                                                    C… https://t.co/rDAnPyClu1</p>
                                                <div className="t-feed-meta"> November 25, 2018</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="t-feed-icon">
                                                <i className="fab fa-twitter"></i>
                                            </div>
                                            <div className="t-feed-body">
                                                <p>Rescue - #Gutenberg ready @wordpress
                                                    Theme for Creative Bloggers available on
                                                    @ThemeForest https://t.co/2r1POjOjgV
                                                    C… https://t.co/rDAnPyClu1</p>
                                                <div className="t-feed-meta"> November 25, 2018</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="widget sidebar grey-bg mb-40">
                                    <h4 className="sidebar__title mb-30">
                                        <span><img src="/images/shape/heading-shape-3.png" className="mr-5" alt="" /></span>
                                        Instagram Feeds
                                    </h4>
                                    <ul id="Instafeed">
                                        <li><a href="#0"><img src="/images/news/instafeed/insta-feed-1.jpeg" alt="" /></a>
                                        </li>
                                        <li><a href="#0"><img src="/images/news/instafeed/insta-feed-2.jpeg" alt="" /></a>
                                        </li>
                                        <li><a href="#0"><img src="/images/news/instafeed/insta-feed-3.jpeg" alt="" /></a>
                                        </li>
                                        <li><a href="#0"><img src="/images/news/instafeed/insta-feed-4.jpeg" alt="" /></a>
                                        </li>
                                        <li><a href="#0"><img src="/images/news/instafeed/insta-feed-5.jpeg" alt="" /></a>
                                        </li>
                                        <li><a href="#0"><img src="/images/news/instafeed/insta-feed-6.jpeg" alt="" /></a>
                                        </li>
                                        <li><a href="#0"><img src="/images/news/instafeed/insta-feed-7.jpeg" alt="" /></a>
                                        </li>
                                        <li><a href="#0"><img src="/images/news/instafeed/insta-feed-8.jpeg" alt="" /></a>
                                        </li>
                                        <li><a href="#0"><img src="/images/news/instafeed/insta-feed-9.jpeg" alt="" /></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="widget sidebar grey-bg mb-40">
                                    <h4 className="sidebar__title mb-30">
                                        <span><img src="/images/shape/heading-shape-3.png" className="mr-5" alt="" /></span>
                                        Popular Tags
                                    </h4>
                                    <div className="tag">
                                        <a href="#0" className="site-btn">Popular</a>
                                        <a href="#0" className="site-btn">desgin</a>
                                        <a href="#0" className="site-btn">ux</a>
                                        <a href="#0" className="site-btn">usability</a>
                                        <a href="#0" className="site-btn">develop</a>
                                        <a href="#0" className="site-btn">icon</a>
                                        <a href="#0" className="site-btn">business</a>
                                        <a href="#0" className="site-btn">consult</a>
                                        <a href="#0" className="site-btn">kit</a>
                                        <a href="#0" className="site-btn">keyboard</a>
                                        <a href="#0" className="site-btn">mouse</a>
                                        <a href="#0" className="site-btn">tech</a>
                                    </div>
                                </div>
                                <div className="widget sidebar grey-bg ad__widget">
                                    <img src="/images/bg/news-ad-banner.jpeg" alt="" />
                                    <div className="ad-text">
                                        <h3><span>350x600</span>Add Banner</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- news area end -->    */}
        </>
    )
}
