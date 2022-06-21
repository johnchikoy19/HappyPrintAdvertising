import React from 'react'

export default function Footer() {
    return (
        <>

            {/* <!-- footer start --> */}
            <footer className="footer footer__2 pt-120">
                <div className="container">
                    <div className="row mt-none-50 justify-content-center">
                        <div className="col-xl-2 col-lg-3 mt-50">
                            <a href="index.html" className="footer__logo">
                                <img src="/images/logo/happyprintlogo.png" alt="" />
                            </a>
                        </div>
                        <div className="col-xl-2 col-lg-4 mt-50 pl-45 pr-0">
                            <div className="footer-widget footer-widget__2">
                                <h4 className="widget-title">Our Service</h4>
                                <ul>
                                    <li><a href="/service"><i className="fa fa-angle-right"></i> Branding / Custom Design</a></li>
                                    <li><a href="/service"><i className="fa fa-angle-right"></i> Advertising / Fabrication</a></li>
                                    <li><a href="/service"><i className="fa fa-angle-right"></i> Graphic Design</a>
                                    </li>
                                    <li><a href="/service"><i className="fa fa-angle-right"></i> Cutting Solutions</a></li>
                                    <li><a href="/service"><i className="fa fa-angle-right"></i> Large Format Printing</a>
                                    </li>
                                    <li><a href="/service"><i className="fa fa-angle-right"></i> Offset Printing</a>
                                    </li>
                                    <li><a href="/service"><i className="fa fa-angle-right"></i> Textile Printing</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-5 mt-50 pl-70 pr-0" hidden>
                            <div className="footer-widget footer-widget__2">
                                <h4 className="widget-title">Recent News</h4>
                                <div className="recent-news mt-none-20">
                                    <div className="recent-news__content mt-20">
                                        <a href="news-details.html" className="recent-news__title">Rutrum felis facilisi lorem com
                                            modo habitasse
                                            portam</a>
                                        <a href="news-details.html" className="recent-news__date">Sep 20. 2020</a>
                                    </div>
                                    <div className="recent-news__content mt-20">
                                        <a href="news-details.html" className="recent-news__title">Montes conubia alique vel nisl
                                            cras maecenas
                                            enim hac.</a>
                                        <a href="news-details.html" className="recent-news__date">Sep 21. 2020</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 offset-xl-1 col-lg-6 mt-50" hidden>
                            <div className="footer-widget footer-widget__2">
                                <div className="newslater">
                                    <h4 className="newslater__title">Subscribe to our
                                        Newsletter</h4>
                                    <div className="newslater__form">
                                        <form action="index.html">
                                            <input type="email" name="email" id="email" placeholder="Enter Email" />
                                            <button type="submit"><i className="far fa-paper-plane"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom footer__bottom--2 mt-115">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 my-auto">
                                <div className="copyright-text">
                                    <p>Copyright 2022 &copy; <a href="#">Happy Print Advertising.</a> All
                                        Rights Reserved.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="social__links social__links--2">
                                    <a href="https://www.facebook.com/HappyPrintPH/?ref=page_internal"><i className="fab fa-facebook-f"></i></a>
                                    {/* <a href="#0"><i className="fab fa-twitter"></i></a>
                                    <a href="#0"><i className="fab fa-pinterest-p"></i></a>
                                    <a href="#0"><i className="fab fa-linkedin-in"></i></a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <!-- footer end --> */}
        </>
    )
}
