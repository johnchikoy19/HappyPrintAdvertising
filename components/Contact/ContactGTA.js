/* eslint-disable */
import React, {useState}  from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
export default function ContactGTA() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');


 const   submitEmail = (e) => {
        e.preventDefault();

        const data = {
            name,
            email,
            message
        }
    
        // axios.post(
        //     'api/contact',
        //   dataTosubmit
        // )
        // .then((res) =>
        
        // console.log('Response received')
        // if(res.status===200){
        //     console.log("OK")
        // }
        // )
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: {
        //       'Accept': 'application/json, text/plain, */*',
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        //   }).then((res) => {
        //     console.log('Response received')
        //     if (res.status === 200) {
        //       console.log('Response succeeded!')
        //     //   setSubmitted(true)
        //     //   setName('')
        //     //   setEmail('')
        //     //   setBody('')
        //     }
        //   })



 

try {
  const res =  axios.post(
    "https://v3-api.hips-md.com/api/happyprint/email",
    {
      name,
      email,
      message,
      phone
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  console.log(res) //check now
  Swal.fire('', 'Email Successfully Sent','success');
  
     setName('')
      setEmail('')
      setMessage('')
} catch (e) {}
       
};


// const submitEmail = async () => {
//     e.preventDefault();
//     const response = await fetch('/api/contact', {
//       method: 'POST',
//       body: JSON.stringify({
//         name,
//         email,

//       }),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//     const data = await response.json()
//     console.log(data)
//   }
    const handleClick = (e) => {
        e.preventDefault();
        
        if(e.target.id == "name"){
            setName(e.target.value)
        }

        if(e.target.id == "mail"){
            setEmail(e.target.value)
        }
        if(e.target.id == "message"){
            setMessage(e.target.value)
        }
        if(e.target.id == "phone"){
            setPhone(e.target.value)
        }
    };

 
    return (
        <>
            {/* <!-- gta section start --> */}
            <section className="gta-area gta-area__2 pt-125 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="gta-bg__2">
                                <img src="/images/contact/contactus6.jpg" style={{"backgroundRepeat":"no-repeat", "backgroundSize":"100%",borderRadius:'20px'}} alt=""/>
                            </div>
                        </div>
                        <div className="col-xl-6 pl-50">
                            <div className="section-header mb-50">
                                <h4 className="sub-heading sub-heading__2 mb-15">Send Message
                                    <span><img src="/images/shape/heading-shape-4.png" className="mr-10" alt=""/></span>
                                </h4>
                                <h2 className="section-title section-title__2">Happy to Help</h2>
                            </div>
                            <div className="contact-form">
                                <form action="#" method="POST" id="contact-form" onSubmit={submitEmail}>
                                    <div className="form-group mt-25">
                                        <input type="text" name="name" id="name" value={name}  required placeholder="Your Name" onChange={handleClick}/>
                                    </div>
                                    <div className="form-group mt-25">
                                        <input type="text" name="phone" id="phone" value={phone} onChange={handleClick}   placeholder="Mobile Number" required />
                                    </div>
                                    <div className="form-group mt-25">
                                        <input type="email" name="email" id="mail" value={email} required  placeholder="Email Address" onChange={handleClick}/>
                                    </div>
                                    <div className="form-group mt-25">
                                        <textarea name="message" id="message"  value={message} required  onChange={handleClick} placeholder="Your Message"></textarea>
                                    </div>
                                    <button type="submit" className="site-btn site-btn__2 mt-15"><span className="icon icon__black"><i
                                        className="far fa-arrow-right"></i></span> Contact us</button>
                                    <p className="ajax-response"></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- gta section end -->    */}
        </>
    )
}
