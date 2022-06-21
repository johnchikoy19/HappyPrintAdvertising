/* eslint-disable */
import React from 'react'
import { Avatar, Grid } from "@nextui-org/react";
export default function AboutTeam() {
    const styleAvatar = {
        display:'flex', alignItems:"center", justifyContent:'center',
        position:'relative', zindex:'0!important'
    }
    const rowStyle = {
        "backgroundImage":"url(/images/about/10730.jpg)"
    }
    return (
        <>
            {/* <!-- team section start --> */}
            <div className="team-section team-section__2 pt-125 pb-125"  >
                <div className="container" style={rowStyle}>
                    <div className="row justify-content-center">
                        <div className="col-xl-8 text-center">
                            <div className="section-header mb-65">
                                <h4 className="sub-heading sub-heading__2 sub-heading__red  mb-15" hidden>
                                    <span><img src="/images/shape/heading-shape-3.png" className="mr-5" alt="" /></span>
                                    team member
                                    <span><img src="/images/shape/heading-shape-4.png" className="ml-5" alt="" /></span>
                                </h4>
                                <h2 className="section-title section-title__2" style={{marginTop:'160px'}}>Meet Our Team</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row " >
                    <div className="col-xl-3 col-lg-6 col-md-6" style={{marginBottom:'60px',marginTop: '68px'}}>
                            <div className="">
                                <div className="" style={styleAvatar}>
                                    {/* <img src="/images/employees/tagle.png" alt="" /> */}
                                    <Avatar
                                    src="/images/employees/tagle.png"
                                    css={{ size: "$20" }}
                                    style={{zIndex:'0', position:'relative!important',border:'9px solid white ',height:'90px',width:'90px',}}
                                    color="white"
                                //    bordered
                                    
                                    />
                                </div>
                                <div className="" >
                                    <h4 className="name" style={styleAvatar}>Nikko Tagle</h4>
        
                                    <span className="designation" style={styleAvatar}>Graphic Artist</span>
                                    {/* <div className="social-links social-links__2">
                                        <a href="#0"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#0"><i className="fab fa-twitter"></i></a>
                                        <a href="#0"><i className="fab fa-pinterest-p"></i></a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6" style={{marginBottom:'60px',marginTop: '68px'}}>
                            <div className="">
                                <div className="" style={styleAvatar}>
                                    {/* <img src="/images/employees/tagle.png" alt="" /> */}
                                    <Avatar
                                    src="/images/employees/SOLON.png"
                                    style={{zIndex:'0', position:'relative!important',border:'9px solid white ',height:'90px',width:'90px',}}
                                    css={{ size: "$20" }}
                                    color="primary"
                                    // bordered
                                    />
                                </div>
                                <div className="">
                                    <h4 className="name"style={styleAvatar}>Randolf Solon</h4>
                                    <span className="designation" style={styleAvatar}>Graphic Artist</span>
                                    {/* <div className="social-links social-links__2">
                                        <a href="#0"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#0"><i className="fab fa-twitter"></i></a>
                                        <a href="#0"><i className="fab fa-pinterest-p"></i></a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6" style={{marginBottom:'60px',marginTop: '68px'}}>
                            <div className="">
                                <div className="" style={styleAvatar}>
                                    {/* <img src="/images/employees/tagle.png" alt="" /> */}
                                    <Avatar
                                    src="/images/employees/rullan.png"
                                    style={{zIndex:'0', position:'relative!important',border:'9px solid white ',height:'90px',width:'90px',}}
                                    css={{ size: "$20" }}
                                    color="primary"
                                    // bordered
                                    />
                                </div>
                                <div className="">
                                    <h4 className="name" style={styleAvatar}>Ella Rullan</h4>
                                    <span className="designation" style={styleAvatar}>Admin / Accounting Assistant</span>
                                    {/* <div className="social-links social-links__2">
                                        <a href="#0"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#0"><i className="fab fa-twitter"></i></a>
                                        <a href="#0"><i className="fab fa-pinterest-p"></i></a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6" style={{marginBottom:'60px',marginTop: '68px'}}>
                            <div className="">
                                <div className="" style={styleAvatar}>
                                    {/* <img src="/images/employees/tagle.png" alt="" /> */}
                                    <Avatar
                                    src="/images/employees/cabudoc.png"
                                    style={{zIndex:'0', position:'relative!important',border:'9px solid white ',height:'90px',width:'90px',}}
                                    css={{ size: "$20" }}
                                    color="primary"
                                    // bordered
                                    />
                                </div>
                                <div className="">
                                    <h4 className="name" style={styleAvatar}>Albert Cabudoc</h4>
                                    <span className="designation" style={styleAvatar}>Production Supervisor</span>
                                    {/* <div className="social-links social-links__2">
                                        <a href="#0"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#0"><i className="fab fa-twitter"></i></a>
                                        <a href="#0"><i className="fab fa-pinterest-p"></i></a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6" style={{marginBottom:'60px'}}>
                            <div className="">
                                <div className="" style={styleAvatar}>
                                    {/* <img src="/images/employees/tagle.png" alt="" /> */}
                                    <Avatar
                                    src="/images/employees/EROL VILLEGAS.jpg"
                                    style={{zIndex:'0', position:'relative!important',border:'9px solid white ',height:'90px',width:'90px',}}
                                    css={{ size: "$20" }}
                                    color="primary"
                                    // bordered
                                    />
                                </div>
                                <div className="">
                                    <h4 className="name" style={styleAvatar}>Errol Villegas</h4>
                                    <span className="designation" style={styleAvatar}>Warehouse In-charge</span>
                                    {/* <div className="social-links social-links__2">
                                        <a href="#0"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#0"><i className="fab fa-twitter"></i></a>
                                        <a href="#0"><i className="fab fa-pinterest-p"></i></a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6" style={{marginBottom:'60px'}}>
                            <div className="">
                                <div className="" style={styleAvatar}>
                                    {/* <img src="/images/employees/tagle.png" alt="" /> */}
                                    <Avatar
                                    src="/images/employees/alberto.png"
                                    style={{zIndex:'0', position:'relative!important',border:'9px solid white ',height:'90px',width:'90px',}}
                                    css={{ size: "$20" }}
                                    color="primary"
                                    // bordered
                                    />
                                </div>
                                <div className="">
                                    <h4 className="name" style={styleAvatar}>Janine Pearl Alberto</h4>
                                    <span className="designation" style={styleAvatar}>Collection Specialist</span>
                                    {/* <div className="social-links social-links__2">
                                        <a href="#0"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#0"><i className="fab fa-twitter"></i></a>
                                        <a href="#0"><i className="fab fa-pinterest-p"></i></a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6" style={{marginBottom:'60px'}}>
                            <div className="">
                                <div className="" style={styleAvatar}>
                                    {/* <img src="/images/employees/tagle.png" alt="" /> */}
                                    <Avatar
                                    src="/images/employees/barrios.png"
                                    style={{zIndex:'0', position:'relative!important',border:'9px solid white ',height:'90px',width:'90px',}}
                                    css={{ size: "$20" }}
                                    color="primary"
                                    // bordered
                                    />
                                </div>
                                <div className="">
                                    <h4 className="name" style={styleAvatar}>Marijean Barrios</h4>
                                    <span className="designation" style={styleAvatar}>Custodian</span>
                                    {/* <div className="social-links social-links__2">
                                        <a href="#0"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#0"><i className="fab fa-twitter"></i></a>
                                        <a href="#0"><i className="fab fa-pinterest-p"></i></a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6"  style={{marginBottom:'60px'}}>
                            <div className="">
                                <div className="" style={styleAvatar}>
                                    {/* <img src="/images/employees/tagle.png" alt="" /> */}
                                    <Avatar
                               
                                     css={{ size: "$20" }}
                                     color="primary"
                                     src="/images/employees/decoloc.png"
                                     style={{zIndex:'0', position:'relative!important',border:'9px solid white ',height:'90px',width:'90px',}}
                        
                              
                                     // bordered
                                    />
                                </div>
                                <div className="">
                                    <h4 className="name" style={styleAvatar}>Mark Jay Decoloc</h4>
                                    <span className="designation" style={styleAvatar}>Installer</span>
                                    {/* <div className="social-links social-links__2">
                                        <a href="#0"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#0"><i className="fab fa-twitter"></i></a>
                                        <a href="#0"><i className="fab fa-pinterest-p"></i></a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6" style={{marginBottom:'60px'}}>
                            <div className="">
                                <div className="" style={styleAvatar}>
                                    {/* <img src="/images/employees/tagle.png" alt="" /> */}
                                    <Avatar
                                    src="/images/employees/abejero.png"
                                    style={{zIndex:'0', position:'relative!important',border:'9px solid white ',height:'90px',width:'90px',}}
                                    css={{ size: "$20" }}
                                    color="primary"
                                    // bordered
                                    />
                                </div>
                                <div className="">
                                    <h4 className="name" style={styleAvatar}>Wilfredo Abejero</h4>
                                    <span className="designation" style={styleAvatar}>Installer</span>
                                    {/* <div className="social-links social-links__2">
                                        <a href="#0"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#0"><i className="fab fa-twitter"></i></a>
                                        <a href="#0"><i className="fab fa-pinterest-p"></i></a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6" style={{marginBottom:'60px'}}>
                            <div className="">
                                <div className="" style={styleAvatar}>
                                    {/* <img src="/images/employees/tagle.png" alt="" /> */}
                                    <Avatar
                                    src="/images/employees/librero.png"
                                    style={{zIndex:'0', position:'relative!important',border:'9px solid white ',height:'90px',width:'90px',}}
                                    css={{ size: "$20" }}
                                    color="primary"
                                    // bordered
                                    />
                                </div>
                                <div className="">
                                    <h4 className="name" style={styleAvatar}>Rhonalyn Librero</h4>
                                    <span className="designation" style={styleAvatar}>Purchasing Specialist</span>
                                    {/* <div className="social-links social-links__2">
                                        <a href="#0"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#0"><i className="fab fa-twitter"></i></a>
                                        <a href="#0"><i className="fab fa-pinterest-p"></i></a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6" style={{marginBottom:'60px'}}>
                            <div className="">
                                <div className="" style={styleAvatar}>
                                    {/* <img src="/images/employees/tagle.png" alt="" /> */}
                                    <Avatar
                                    src="/images/employees/mercolita.png"
                                    style={{zIndex:'0', position:'relative!important',border:'9px solid white ',height:'90px',width:'90px',}}
                                    css={{ size: "$20" }}
                                    color="primary"
                                    // bordered
                                    />
                                </div>
                                <div className="">
                                    <h4 className="name" style={styleAvatar}>Rica Feye Mercolita</h4>
                                    <span className="designation" style={styleAvatar}>Sales Officer</span>
                                    {/* <div className="social-links social-links__2">
                                        <a href="#0"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#0"><i className="fab fa-twitter"></i></a>
                                        <a href="#0"><i className="fab fa-pinterest-p"></i></a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6" style={{marginBottom:'60px'}}>
                            <div className="">
                                <div className="" style={styleAvatar}>
                                    {/* <img src="/images/employees/tagle.png" alt="" /> */}
                                    <Avatar
                                    src="/images/employees/SAN LORENZO.png"
                                    style={{zIndex:'0', position:'relative!important',border:'9px solid white ',height:'90px',width:'90px',}}
                                    css={{ size: "$20" }}
                                    color="primary"
                                    // bordered
                                    />
                                </div>
                                <div className="">
                                    <h4 className="name" style={styleAvatar}>Alvin San Lorenzo</h4>
                                    <span className="designation" style={styleAvatar}>Liaison Officer / Collector</span>
                                    {/* <div className="social-links social-links__2">
                                        <a href="#0"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#0"><i className="fab fa-twitter"></i></a>
                                        <a href="#0"><i className="fab fa-pinterest-p"></i></a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                 
                        <div className="col-xl-3 col-lg-6 col-md-6" style={{marginBottom:'60px'}}>
                            <div className="">
                                <div className="" style={styleAvatar}>
                                    {/* <img src="/images/employees/tagle.png" alt="" /> */}
                                    <Avatar
                                    src="/images/employees/gonzales.png"
                                    style={{zIndex:'0', position:'relative!important',border:'9px solid white ',height:'90px',width:'90px',}}
                                    css={{ size: "$20" }}
                                    color="primary"
                                    // bordered
                                    />
                                </div>
                                <div className="">
                                    <h4 className="name" style={styleAvatar}>Aubrey Gonzales</h4>
                                    <span className="designation" style={styleAvatar}>Sales Coordinator</span>
                                    {/* <div className="social-links social-links__2">
                                        <a href="#0"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#0"><i className="fab fa-twitter"></i></a>
                                        <a href="#0"><i className="fab fa-pinterest-p"></i></a>
                                    </div> */}
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-6 col-md-6" style={{marginBottom:'60px'}}>
                            <div className="">
                                <div className="" style={styleAvatar}>
                                    {/* <img src="/images/employees/tagle.png" alt="" /> */}
                                    <Avatar
                                    src="/images/employees/clarito.png"
                                    style={{zIndex:'0', position:'relative!important',border:'9px solid white ',height:'90px',width:'90px',}}
                                    css={{ size: "$20" }}
                                    color="primary"
                                    // bordered
                                    />
                                </div>
                                <div className="">
                                    <h4 className="name" style={styleAvatar}>Sendy Clarito</h4>
                                    <span className="designation" style={styleAvatar}>Accounting Specialist</span>
                                    {/* <div className="social-links social-links__2">
                                        <a href="#0"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#0"><i className="fab fa-twitter"></i></a>
                                        <a href="#0"><i className="fab fa-pinterest-p"></i></a>
                                    </div> */}
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
            {/* <!-- team section end --> */}
        </>
    )
}
