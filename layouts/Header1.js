import React, { useState, useEffect  } from 'react'
import Link from 'next/link'
import MobileMenu from './MobileMenu';

export default function Header1() {
    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);
    const [isSelect, setSelect] = useState("Eng");

    const [isMobileMenu, setMobileMenu] = useState(false);
    const MobileMenuTrueFalse = () => setMobileMenu(!isMobileMenu)

    const [scroll, setScroll] = useState(false);
   useEffect(() => {
      window.addEventListener("scroll", () => {
         setScroll(window.scrollY > 100);
      });
   }, [scroll]);

    return (
        <>
            {/* <!-- header start --> */}
            <header className="header">
                <div className="header__top">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 p-0">
                                <ul className="header__info">
                                    <li><Link href="telto:2202588-6500"><a><i className="fa fa-phone-volume"></i> 632 8654 5029</a></Link>
                                    </li>
                                    <li><Link href="mailto:sales@happyprint.ph"><a><i className="fal fa-envelope-open"></i>
                                    sales@happyprint.ph</a></Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-6 col-md-12 my-auto p-0">
                                <div className="social__links">
                                    <Link href="https://www.facebook.com/HappyPrintPH/"><a><i className="fab fa-facebook-f"></i></a></Link>
                                    {/* <Link href="#"><a><i className="fab fa-twitter"></i></a></Link>
                                    <Link href="#"><a><i className="fab fa-pinterest-p"></i></a></Link>
                                    <Link href="#"><a><i className="fab fa-linkedin-in"></i></a></Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`header__bottom ${scroll ? "sticky-header animated fadeInDown" : ""}`}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-9 col-lg-12">
                                <div className="navarea">
                                    <Link href="/"><a className="site-logo">
                                        <img src="/images/logo/happyprintlogo.png" alt="LOGO" />
                                    </a></Link>
                                    <div className="mainmenu d-none d-lg-block">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li className="menu_has_children">
                                                    <Link href="/"><a>Home</a></Link>
                                                    {/* <ul className="sub-menu">
                                                        <li><Link href="/"><a>Home Style 01</a></Link></li>
                                                        <li><Link href="/index-02"><a>Home Style 02</a></Link></li>
                                                    </ul> */}
                                                </li>
                                                <li><Link href="/about"><a>About</a></Link></li>
                                                <li><Link href="/service"><a>Services</a></Link></li>
                                                {/* <li><Link href="#"><a>Pages</a></Link>
                                                    <ul className="sub-menu">
                                                        <li><Link href="/team"><a>Team</a></Link></li>
                                                        <li><Link href="/pricing"><a>Pricing</a></Link></li>
                                                        <li><Link href="/faq"><a>Faq</a></Link></li>
                                                        <li><Link href="/team-details"><a>Team Details</a></Link></li>
                                                        <li><Link href="/service-details"><a>Service Details</a></Link></li>
                                                        <li><Link href="/project-details"><a>Project Details</a></Link></li>
                                                        <li><Link href="/privacy-policy"><a>Privacy Policy</a></Link></li>
                                                    </ul>
                                                </li> */}
                                                {/* <li><Link href="/service"><a>Services</a></Link></li> */}
                                                <li><Link href="/project"><a>Projects & Testimonials</a></Link></li>
                                                <li><Link href="/careers"><a>Careers</a></Link></li>
                                                {/* <li><Link href="/news"><a>Article</a></Link>
                                                    <ul className="sub-menu">
                                                        <li><Link href="/news-details"><a>Article Details</a></Link></li>
                                                    </ul>
                                                </li> */}
                                                <li><Link href="/contact"><a>Contact</a></Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="mobile-menu mean-container d-block d-lg-none ">
                                        <div className="mean-bar">
                                            <a onClick={MobileMenuTrueFalse} href="#nav" className={isMobileMenu ? "meanmenu-reveal d-none" : "meanmenu-reveal"} >
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </a>
                                            <a onClick={MobileMenuTrueFalse} href="#nav" className={isMobileMenu ? "meanmenu-reveal" : "meanmenu-reveal d-none"} style={{ "right": "0px", "left": "auto", "textAlign": "center", "textIndent": "0px", "fontSize": "18px" }}>
                                                X
                                            </a>
                                        </div>
                                        {isMobileMenu &&
                                            <MobileMenu />
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 my-auto" >
                                <div className="lang-quote">
                                    {/* <div className="language">
                                        <i className="far fa-globe"></i>
                                        <div onClick={toggleTrueFalse} className={`nice-select ${isToggled ? "open" : ""}`}>
                                            <span className="current">{isSelect}</span>
                                            <ul className="list">
                                                <li onClick={() => setSelect("Eng")} className={`option ${isSelect == "Eng" && "selected focus"}`}>Eng</li>
                                                <li onClick={() => setSelect("Rus")} className={`option ${isSelect == "Rus" && "selected focus"}`}>Rus</li>
                                                <li onClick={() => setSelect("Bng")} className={`option ${isSelect == "Bng" && "selected focus"}`}>Bng</li>
                                                <li onClick={() => setSelect("Frn")} className={`option ${isSelect == "Frn" && "selected focus"}`}>Frn</li>
                                            </ul>
                                        </div>
                                        <select>
                                            <option>Eng</option>
                                            <option>Rus</option>
                                            <option>Bng</option>
                                            <option>Hp</option>
                                            <option>Frn</option>
                                        </select>
                                    </div> */}
                                    <Link href="/contact"><a className="quote-btn">Get a quote</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- header end --> */}
        </>
    )
}
