
import GoogleMap from '../Plugins/GoogleMap/GoogleMap'
import React, {useState}  from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
export default function HomeOneGTA() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

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
      message
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
    };

    return (
        <>
            {/* <!-- gta section start --> */}
            <section className="gta-area pt-125 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div>
                                <GoogleMap/>
                            </div>
                        </div>
                        <div className="col-xl-6 pl-70">
                            <div className="section-header mb-50">
                                <h4 className="sub-heading mb-15">Send Message</h4>
                                <h2 className="section-title">Happy to Help</h2>
                            </div>
                            <div className="contact-form">
                            <form action="#" method="POST" id="contact-form" onSubmit={submitEmail}>
                                    <div className="form-group mt-25">
                                        <input type="text" name="name" id="name" value={name}  placeholder="Your Name" onChange={handleClick}/>
                                    </div>
                                    <div className="form-group mt-25">
                                        <input type="email" name="email" id="mail" value={email} placeholder="Email Address" onChange={handleClick}/>
                                    </div>
                                    <div className="form-group mt-25">
                                        <textarea name="message" id="message"  value={message}  onChange={handleClick} placeholder="Your Message"></textarea>
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
