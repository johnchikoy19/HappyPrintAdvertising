/* eslint-disable */
import React from 'react'
import { Container, Card, Row, Text, Col, Spacer, Image } from "@nextui-org/react";
import Flippy, { FrontSide, BackSide } from 'react-flippy';

export default function AdvertisingDetailsArea() {
    
    return (
        <>
            {/* <!-- details content start --> */}
            <div className="details-content-area pt-125 pb-125">
                <div className="container">
                    <div className="row">

                  
                    <div className="cat" style={{  textAlign: 'center', marginBottom:'50px'}}>
                                        <h1 >Tarpaulin Printing</h1>
                                    </div>
                               
                        <div className="col-xl-4">
                        <Flippy
                        flipOnHover={true} // default false
                        flipOnClick={true} // default false
                        flipDirection="horizontal" // horizontal or vertical
                        // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                        // if you pass isFlipped prop component will be controlled component.
                        // and other props, which will go to div
                        // style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
                        >
                        <FrontSide
                          style={{
                            backgroundColor: '#0072f5',borderRadius:'25px'
                          }}
                        >
                          <Card css={{ $$cardColor: '$colors$primary' }}>
                            <Card.Body style={{textAlign:"center"}}>
                            <Text h6 size={30} color="white" css={{ m: 0 }}>
                          Pull Up Banner
                            </Text>
                            <Image src="/images/subservices/largeformat/pullup.png" alt="blog image"  width={300}
                        height={400} />
                            </Card.Body>
                        </Card>
                     
                        </FrontSide>
                        <BackSide
                        style={{
                            backgroundColor: '#0072f5',borderRadius:'25px'
                          }}>
                        <Text h6 size={32} color="white" css={{ m: 0 }} style={{margin:'auto', width:'80%',textAlign:'center',marginTop:'40px'}}>
                        Indispensable presentation tool at any event, trade show or in the store, if you really want to stand out.
                                                    </Text>
                        </BackSide>
                    </Flippy>
                     
                    
                        </div>
                        <div className="col-xl-4">

                                <Flippy
                        flipOnHover={true} // default false
                        flipOnClick={true} // default false
                        flipDirection="horizontal" // horizontal or vertical
                        // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                        // if you pass isFlipped prop component will be controlled component.
                        // and other props, which will go to div
                        // style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
                        >
                        <FrontSide
                          style={{
                            backgroundColor: '#f5a524',borderRadius:'25px'
                          }}
                        >
                           <Card css={{ $$cardColor: '$colors$warning' }}>
                            <Card.Body style={{textAlign:"center"}}>
                            <Text h6 size={30} color="white" css={{ m: 0 }}>
                            Tarpaulins with Frame
                            </Text>
                            <Image src="/images/subservices/largeformat/tarp.png" alt="blog image"  width={300}
                        height={400} />
                            </Card.Body>
                        </Card>
                     
                     
                        </FrontSide>
                        <BackSide
                        style={{  backgroundColor: '#f5a524',borderRadius:'25px'}}>
                       <Text h6 size={32} color="white" css={{ m: 0 }} style={{margin:'auto', width:'80%',textAlign:'center',marginTop:'40px'}}>
                       Promote your brand in these every area without worrying about connectivity and electricity issues.
                                                    </Text>
                        </BackSide>
                    </Flippy>
                   
                    
                        </div>

                        <div className="col-xl-4">

                        <Flippy
                        flipOnHover={true} // default false
                        flipOnClick={true} // default false
                        flipDirection="horizontal" // horizontal or vertical
                        // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                        // if you pass isFlipped prop component will be controlled component.
                        // and other props, which will go to div
                        // style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
                        >
                        <FrontSide
                        style={{
                        backgroundColor: '#d56b60',borderRadius:'25px'
                        }}
                        >
                        <Card css={{ $$cardColor: '$colors$#d56b60' }}>
                        <Card.Body style={{textAlign:"center"}}>
                        <Text h6 size={30} color="white" css={{ m: 0 }}>
                      Portabooth
                        </Text>
                        <Image src="/images/subservices/largeformat/portabooth.jpg" alt="blog image"  width={300}
                        height={400} />
                        </Card.Body>
                        </Card>


                        </FrontSide>
                        <BackSide
                        style={{  backgroundColor: '#d56b60',borderRadius:'25px'}}>
                           <Text h6 size={32} color="white" css={{ m: 0 }} style={{margin:'auto', width:'80%',textAlign:'center',marginTop:'40px'}}>
                           Opportunity to demonstrate your new products or services to trade show visitors and answer their questions. 
                                                    </Text>
                        </BackSide>
                        </Flippy>


                        </div>
                 
                        <div className="cat" style={{  textAlign: 'center', marginTop:'50px',marginBottom:'50px'}}>
                                        <h1 >Wallpaper</h1>
                                    </div>
                                    <div className="col-xl-2">
                                        </div>
                                    <div className="col-xl-4">

                                    <Flippy
                                    flipOnHover={true} // default false
                                    flipOnClick={true} // default false
                                    flipDirection="horizontal" // horizontal or vertical
                                    // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                                    // if you pass isFlipped prop component will be controlled component.
                                    // and other props, which will go to div
                                    // style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
                                    >
                                    <FrontSide
                                    style={{
                                    backgroundColor: '#37b546',borderRadius:'25px'
                                    }}
                                    >
                                    <Card css={{ $$cardColor: '$colors$#37b546' }}>
                                    <Card.Body style={{textAlign:"center"}}>
                                    <Text h6 size={30} color="white" css={{ m: 0 }}>
                                     Wall Skins
                                    </Text>
                                    <Image src="/images/subservices/largeformat/wallskin.jpg" alt="blog image"  width={300}
                                    height={400} />
                                    </Card.Body>
                                    </Card>


                                    </FrontSide>
                                    <BackSide
                                    style={{  backgroundColor: '#37b546',borderRadius:'25px'}}>
                                      <Text h6 size={32} color="white" css={{ m: 0 }} style={{margin:'auto', width:'80%',textAlign:'center',marginTop:'40px'}}>
                                    Have a exquisite design for your wall decorations  and home improvement needs.
                                                    </Text>
                                    </BackSide>
                                    </Flippy>


                                    </div>
                                    <div className="col-xl-4">

                                    <Flippy
                                    flipOnHover={true} // default false
                                    flipOnClick={true} // default false
                                    flipDirection="horizontal" // horizontal or vertical
                                    // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                                    // if you pass isFlipped prop component will be controlled component.
                                    // and other props, which will go to div
                                    // style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
                                    >
                                    <FrontSide
                                    style={{
                                    backgroundColor: '#0dcaf0',borderRadius:'25px'
                                    }}
                                    >
                                    <Card css={{ $$cardColor: '$colors$#0dcaf0' }}>
                                    <Card.Body style={{textAlign:"center"}}>
                                    <Text h6 size={30} color="white" css={{ m: 0 }}>
                                  Canvas
                                    </Text>
                                      <Image src="/images/subservices/largeformat/canvas.png" alt="blog image"  width={300}
                                    height={400} />
                                    </Card.Body>
                                    </Card>


                                    </FrontSide>
                                    <BackSide
                                    style={{  backgroundColor: '#0dcaf0',borderRadius:'25px'}}>
                        
                                    <Text h6 size={32} color="white" css={{ m: 0 }} style={{margin:'auto', width:'80%',textAlign:'center',marginTop:'40px'}}>
                                    Have a exquisite design for your canvas needs.
                                                    </Text>
                             
                                    </BackSide>
                                    </Flippy>


                                    </div>
                                    <div className="col-xl-2">
                                        </div>
                                        <div className="cat" style={{  textAlign: 'center', marginTop:'50px',marginBottom:'50px'}}>
                                        <h1 >Stickers</h1>
                                    </div>
                                            
                        <div className="col-xl-4">
                        <Flippy
                        flipOnHover={true} // default false
                        flipOnClick={true} // default false
                        flipDirection="horizontal" // horizontal or vertical
                        // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                        // if you pass isFlipped prop component will be controlled component.
                        // and other props, which will go to div
                        // style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
                        >
                        <FrontSide
                          style={{
                            backgroundColor: '#f0d28a',borderRadius:'25px'
                          }}
                        >
                          <Card css={{ $$cardColor: '$colors$#f0d28a' }}>
                            <Card.Body style={{textAlign:"center"}}>
                            <Text h6 size={30} color="white" css={{ m: 0 }}>
                         Die Cut
                            </Text>
                            <Image src="/images/subservices/largeformat/diecut.png" alt="blog image"  width={300}
                        height={400} />
                            </Card.Body>
                        </Card>
                     
                        </FrontSide>
                        <BackSide
                        style={{
                            backgroundColor: '#f0d28a',borderRadius:'25px'
                          }}>
                       <Text h6 size={32} color="white" css={{ m: 0 }} style={{margin:'auto', width:'80%',textAlign:'center',marginTop:'40px'}}>
                       Perfect solution if you're looking for something new to give away as party favours.
                                                    </Text>
                        </BackSide>
                    </Flippy>
                     
                    
                        </div>
                        <div className="col-xl-4">

                                <Flippy
                        flipOnHover={true} // default false
                        flipOnClick={true} // default false
                        flipDirection="horizontal" // horizontal or vertical
                        // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                        // if you pass isFlipped prop component will be controlled component.
                        // and other props, which will go to div
                        // style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
                        >
                        <FrontSide
                          style={{
                            backgroundColor: '#e70e22',borderRadius:'25px'
                          }}
                        >
                           <Card css={{ $$cardColor: '$colors$#e70e22' }}>
                            <Card.Body style={{textAlign:"center"}}>
                            <Text h6 size={30} color="white" css={{ m: 0 }}>
                            Car Stickers
                            </Text>
                            <Image src="/images/subservices/largeformat/carstickers.png" alt="blog image"  width={300}
                        height={400} />
                            </Card.Body>
                        </Card>
                     
                     
                        </FrontSide>
                        <BackSide
                        style={{  backgroundColor: '#e70e22',borderRadius:'25px'}}>
                    <Text h6 size={32} color="white" css={{ m: 0 }} style={{margin:'auto', width:'80%',textAlign:'center',marginTop:'40px'}}>
                  Make  a fun form of advertising, they rarely become out of date or out of fashion. In fact, they’re always evolving with time.
                                                    </Text>
                        </BackSide>
                    </Flippy>
                   
                    
                        </div>

                        <div className="col-xl-4">

                        <Flippy
                        flipOnHover={true} // default false
                        flipOnClick={true} // default false
                        flipDirection="horizontal" // horizontal or vertical
                        // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                        // if you pass isFlipped prop component will be controlled component.
                        // and other props, which will go to div
                        // style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
                        >
                        <FrontSide
                        style={{
                        backgroundColor: '#0c55c8',borderRadius:'25px'
                        }}
                        >
                        <Card css={{ $$cardColor: '$colors$#0c55c8' }}>
                        <Card.Body style={{textAlign:"center"}}>
                        <Text h6 size={30} color="white" css={{ m: 0 }}>
                        Frosted 
                        </Text>
                        <Image src="/images/subservices/largeformat/frosted.jpg" alt="blog image"  width={300}
                        height={400} />
                        </Card.Body>
                        </Card>


                        </FrontSide>
                        <BackSide
                        style={{  backgroundColor: '#0c55c8',borderRadius:'25px'}}>
                                 <Text h6 size={32} color="white" css={{ m: 0 }} style={{margin:'auto', width:'80%',textAlign:'center',marginTop:'40px'}}>
                                 Increase privacy in your home, help brand your business shop front or improve your office space.
                                                    </Text>
                        </BackSide>
                        </Flippy>


                        </div>
                 



                        <div className="col-xl-2" >
                                        </div>
                                    <div className="col-xl-4" style={{marginTop:'25px'}}>

                                    <Flippy
                                    flipOnHover={true} // default false
                                    flipOnClick={true} // default false
                                    flipDirection="horizontal" // horizontal or vertical
                                    // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                                    // if you pass isFlipped prop component will be controlled component.
                                    // and other props, which will go to div
                                    // style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
                                    >
                                    <FrontSide
                                    style={{
                                    backgroundColor: '#04a617',borderRadius:'25px'
                                    }}
                                    >
                                    <Card css={{ $$cardColor: '$colors$#04a617' }}>
                                    <Card.Body style={{textAlign:"center"}}>
                                    <Text h6 size={30} color="white" css={{ m: 0 }}>
                                    Vinyl
                                    </Text>
                                    <Image src="/images/subservices/largeformat/vinyl.png" alt="blog image"  width={300}
                                    height={400} />
                                    </Card.Body>
                                    </Card>


                                    </FrontSide>
                                    <BackSide
                                    style={{  backgroundColor: '#04a617',borderRadius:'25px'}}>
                                 <Text h6 size={32} color="white" css={{ m: 0 }} style={{margin:'auto', width:'80%',textAlign:'center',marginTop:'40px'}}>
                                 Flexible, durable and affordable, vinyl stickers open the door to limitless creativity.
                                                    </Text>
                                    </BackSide>
                                    </Flippy>


                                    </div>
                                    <div className="col-xl-4" style={{marginTop:'25px'}}>

                                    <Flippy
                                    flipOnHover={true} // default false
                                    flipOnClick={true} // default false
                                    flipDirection="horizontal" // horizontal or vertical
                                    // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                                    // if you pass isFlipped prop component will be controlled component.
                                    // and other props, which will go to div
                                    // style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
                                    >
                                    <FrontSide
                                    style={{
                                    backgroundColor: '#6b727e',borderRadius:'25px'
                                    }}
                                    >
                                    <Card css={{ $$cardColor: '$colors$#6b727e' }}>
                                    <Card.Body style={{textAlign:"center"}}>
                                    <Text h6 size={30} color="white" css={{ m: 0 }}>
                                    Reflectorized
                                    </Text>
                                    <Image src="/images/subservices/largeformat/reflectorize.jpg" alt="blog image"  width={300}
                                    height={400} />
                                    </Card.Body>
                                    </Card>


                                    </FrontSide>
                                    <BackSide
                                    style={{  backgroundColor: '#6b727e',borderRadius:'25px'}}>
                                     <Text h6 size={30} color="white" css={{ m: 0 }} style={{margin:'auto', width:'80%',textAlign:'center',marginTop:'40px'}}>
                                     Serve as stunning product packaging labels that will absolutely increase the appeal of a product and enhance the brand’s image and personal safety. 
                                                    </Text>
                                    </BackSide>
                                    </Flippy>


                                    </div>
                                    <div className="col-xl-2">
                                        </div>

                                        <div className="cat" style={{  textAlign: 'center', marginTop:'50px',marginBottom:'50px'}}>
                                        <h1 >Posters</h1>
                                    </div>


                                                               
                        <div className="col-xl-4">
                        <Flippy
                        flipOnHover={true} // default false
                        flipOnClick={true} // default false
                        flipDirection="horizontal" // horizontal or vertical
                        // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                        // if you pass isFlipped prop component will be controlled component.
                        // and other props, which will go to div
                        // style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
                        >
                        <FrontSide
                          style={{
                            backgroundColor: '#b2b5ba',borderRadius:'25px'
                          }}
                        >
                          <Card css={{ $$cardColor: '$colors$#b2b5ba' }}>
                            <Card.Body style={{textAlign:"center"}}>
                            <Text h6 size={30} color="white" css={{ m: 0 }}>
                         Sintra Board
                            </Text>
                            <Image src="/images/subservices/largeformat/sintra.jpg" alt="blog image"  width={300}
                        height={400} />
                            </Card.Body>
                        </Card>
                     
                        </FrontSide>
                        <BackSide
                        style={{
                            backgroundColor: '#b2b5ba',borderRadius:'25px'
                          }}>      <Text h6 size={30} color="white" css={{ m: 0 }} style={{margin:'auto', width:'80%',textAlign:'center',marginTop:'40px'}}>
                        Great options for window shows and for hanging from rooftiles too.
                                         </Text>
                        </BackSide>
                    </Flippy>
                     
                    
                        </div>
                        <div className="col-xl-4">

                                <Flippy
                        flipOnHover={true} // default false
                        flipOnClick={true} // default false
                        flipDirection="horizontal" // horizontal or vertical
                        // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                        // if you pass isFlipped prop component will be controlled component.
                        // and other props, which will go to div
                        // style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
                        >
                        <FrontSide
                          style={{
                            backgroundColor: '#edc179',borderRadius:'25px'
                          }}
                        >
                           <Card css={{ $$cardColor: '$colors$#edc179' }}>
                            <Card.Body style={{textAlign:"center"}}>
                            <Text h6 size={30} color="white" css={{ m: 0 }}>
                           Menu
                            </Text>
                            <Image src="/images/subservices/largeformat/postermenu.png" alt="blog image"  width={300}
                        height={400} />
                            </Card.Body>
                        </Card>
                     
                     
                        </FrontSide>
                        <BackSide
                        style={{  backgroundColor: '#edc179',borderRadius:'25px'}}>
                   <Text h6 size={30} color="white" css={{ m: 0 }} style={{margin:'auto', width:'80%',textAlign:'center',marginTop:'40px'}}>
                   Clearer than a chalk board and easier to read, display your menu in a variety of locations.
                                         </Text>
                        </BackSide>
                    </Flippy>
                   
                    
                        </div>

                        <div className="col-xl-4">

                        <Flippy
                        flipOnHover={true} // default false
                        flipOnClick={true} // default false
                        flipDirection="horizontal" // horizontal or vertical
                        // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                        // if you pass isFlipped prop component will be controlled component.
                        // and other props, which will go to div
                        // style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
                        >
                        <FrontSide
                        style={{
                        backgroundColor: '#ed4858',borderRadius:'25px'
                        }}
                        >
                        <Card css={{ $$cardColor: '$colors$#ed4858' }}>
                        <Card.Body style={{textAlign:"center"}}>
                        <Text h6 size={30} color="white" css={{ m: 0 }}>
                        Stickers on Sintra Board
                        </Text>
                        <Image src="/images/subservices/largeformat/stickersintra.png" alt="blog image"  width={300}
                        height={360} />
                        </Card.Body>
                        </Card>


                        </FrontSide>
                        <BackSide
                        style={{  backgroundColor: '#ed4858',borderRadius:'25px'}}>
                   <Text h6 size={30} color="white" css={{ m: 0 }} style={{margin:'auto', width:'80%',textAlign:'center',marginTop:'40px'}}>
                        Strategy for printing on Sticker on Sintra board holds quality PVC Board.
                                         </Text>
                        </BackSide>
                        </Flippy>


                        </div>
                 
                    </div>
                    {/* <div className="row mt-40">
                        <div className="col-xl-12">
                            <div className="details-content details-content__project">
                                <h2 className="details-content__title mb-20">Project Description</h2>
                                <p>Maecenas nise vestibulum parturient habitasse. Aliquam pellentesque fermentum. Sodales luctus
                                    venenatis dis curae
                                    senectus montes tortor morbi cubilia congue. Mus imperdiet turpis in augue placerat maecenas
                                    natoque sollicitudin at
                                    quam adipiscing integer dis ads se purus sollicitudin dapibus et vivamus pharetra sit
                                    integer dictum in dise natoque a
                                    mus quis in. Facilisis inceptos nec, potenti nostra aenean lacinia varius semper ant nullam
                                    nulla primis placerat
                                    facilisis. Netus lorem rutrum arcu dignissim at sit morbi phasellus nascetur eget urna
                                    potenti cum vestibulum cras.
                                    Tempor nonummy metus lobortis. Sociis velit etiam, dapibus. Lectus vehicula pellentesque
                                    cras posuere tempor facilisi
                                    habitant lectus rutrum pede quisque hendrerit parturient posuere mauris ad elementum
                                    fringilla facilisi volutpat fusce
                                    pharetra felis sapien varius quisque class convallis praesent est sollicitudin donec nulla
                                    venenatis, cursus fermentum
                                    netus posuere sociis porta risus habitant malesuada nulla habitasse hymenaeos. Viverra
                                    curabitur nisi vel sollicitudin
                                    dictum natoque ante aenean elementum curae malesuada ullamcorper. vivamus nonummy nisl
                                    posuere rutrum</p>
                                <div className="content mt-20">
                                    <p>Duis porttitor sem sit ullamcorper massa lorem platea ultricies sollicitudin. Habitant
                                        cubilia varius platea nam lorem
                                        cum aenean sociosqu and per bibendum Arcu accumsan eleifend. Ipsum nam condimentum
                                        lobortis eu morbi a quis ipsum est
                                        bibendum mine vulputate hymenaeos taciti odio nullam ligula ultrices tristique viverra
                                        laoreet sapien curae;.
                                        Sollicitudin etiam elit torquent. Purus nascetur dis augue non iaculis ullamcorper lacus
                                        met quam commodo hendrerit
                                        lobortis vel. Sagittis felis iaculis mauris luctus</p>
                                    <h2 className="details-content__title mt-30 mb-35">Working Process</h2>
                                </div>
                                <div className="row mt-none-30">
                                    <div className="col-xl-3 col-lg-6 col-md-6 mt-30">
                                        <div className="wp-box">
                                            <div className="wp-box__icon wp-box__icon--1 mb-25">
                                                <img src="/images/icons/w-p-1.png" alt=""/>
                                            </div>
                                            <div className="wp-box__content">
                                                <h4 className="wp-box__title wp-box__title--2">Booking Online</h4>
                                                <p>God They moving an firmament seed over herb gathering multis ply morning
                                                    fruitful</p>
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
                                                <p>God They moving an firmament seed over herb gathering multis ply morning
                                                    fruitful</p>
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
                                                <p>God They moving an firmament seed over herb gathering multis ply morning
                                                    fruitful</p>
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
                                                <p>God They moving an firmament seed over herb gathering multis ply morning
                                                    fruitful</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-10">
                                    <div className="col-xl-6 col-lg-6 col-md-6 d-flex mt-30">
                                        <div className="project-item">
                                            <div className="project-item__thumb project-item__thumb--big">
                                                <img src="/images/project/p-13.jpeg" alt=""/>
                                            </div>
                                            <div className="project-item__hover" data-overlay="dark" data-opacity="9">
                                                <a href="project-details.html" className="project-item__link">
                                                    <i className="far fa-arrow-right"></i>
                                                </a>
                                                <div className="project-item__content">
                                                    <h5 className="project-item__subtitle"><span></span> Book Print</h5>
                                                    <h4 className="project-item__title">Megazine Cover</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 d-flex mt-30">
                                        <div className="project-item">
                                            <div className="project-item__thumb project-item__thumb--big">
                                                <img src="/images/project/p-14.jpeg" alt=""/>
                                            </div>
                                            <div className="project-item__hover" data-overlay="dark" data-opacity="9">
                                                <a href="project-details.html" className="project-item__link">
                                                    <i className="far fa-arrow-right"></i>
                                                </a>
                                                <div className="project-item__content">
                                                    <h5 className="project-item__subtitle"><span></span> Book Print</h5>
                                                    <h4 className="project-item__title">Megazine Cover</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 d-flex mt-30">
                                        <div className="project-item">
                                            <div className="project-item__thumb project-item__thumb--big">
                                                <img src="/images/project/p-15.jpeg" alt=""/>
                                            </div>
                                            <div className="project-item__hover" data-overlay="dark" data-opacity="9">
                                                <a href="project-details.html" className="project-item__link">
                                                    <i className="far fa-arrow-right"></i>
                                                </a>
                                                <div className="project-item__content">
                                                    <h5 className="project-item__subtitle"><span></span> Book Print</h5>
                                                    <h4 className="project-item__title">Megazine Cover</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 d-flex mt-30">
                                        <div className="project-item">
                                            <div className="project-item__thumb project-item__thumb--big">
                                                <img src="/images/project/p-16.jpeg" alt=""/>
                                            </div>
                                            <div className="project-item__hover" data-overlay="dark" data-opacity="9">
                                                <a href="project-details.html" className="project-item__link">
                                                    <i className="far fa-arrow-right"></i>
                                                </a>
                                                <div className="project-item__content">
                                                    <h5 className="project-item__subtitle"><span></span> Book Print</h5>
                                                    <h4 className="project-item__title">Megazine Cover</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            {/* <!-- details content end -->    */}
        </>
    )
}
