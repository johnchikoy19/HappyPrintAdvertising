import React, { useEffect } from 'react'
import MetisMenu from 'metismenujs'
import 'metismenujs/dist/metismenujs.css';
import Link from 'next/link'


export default function MobileMenu() {
    useEffect(() => {
        new MetisMenu("#metismenu");
    }, []);

    return (
        <>
            <nav className="mobile-nav">
                <ul className="metismenu" id="metismenu">
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
        </>
    )
};

<nav id="mobile-menu">
    <ul className="metismenu" id="metismenu">
        <li className="menu_has_children">
            <Link href="/"><a className="has-arrow">Home</a></Link>
            <ul>
                <li><Link href="/"><a>Home Style 01</a></Link></li>
                <li><Link href="/index-02"><a>Home Style 02</a></Link></li>
            </ul>
        </li>
        <li><Link href="/about"><a>About</a></Link></li>
        <li><Link href="#"><a className="has-arrow">Pages</a></Link>
            <ul>
                <li><Link href="/team"><a>Team</a></Link></li>
                <li><Link href="/pricing"><a>Pricing</a></Link></li>
                <li><Link href="/faq"><a>Faq</a></Link></li>
                <li><Link href="/team-details"><a>Team Details</a></Link></li>
                <li><Link href="/service-details"><a>Service Details</a></Link></li>
                <li><Link href="/project-details"><a>Project Details</a></Link></li>
                <li><Link href="/privacy-policy"><a>Privacy Policy</a></Link></li>
            </ul>
        </li>
        <li><Link href="/service"><a>Services</a></Link></li>
        <li><Link href="/project"><a>Project</a></Link></li>
        <li><Link href="/news"><a className="has-arrow">Article</a></Link>
            <ul>
                <li><Link href="/news-details"><a>Article Details</a></Link></li>
            </ul>
        </li>
        <li><Link href="/contact"><a>Contact</a></Link></li>
    </ul>
</nav>