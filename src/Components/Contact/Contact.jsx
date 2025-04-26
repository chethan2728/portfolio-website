import React from 'react'
import './Contact.css'
import theme from "../../assets/theme_2.png";
import call from "../../assets/call_icon.png";
import location from "../../assets/loc_icon.png";
import mail from "../../assets/mail_icon.png";

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "f04278b9-35f6-4143-975f-f42f790d2965");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
    };



  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme} alt="" style={{width: '100px', height: '100px'}}/>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Lets talk</h1>
                <p> I'm a passionate and dedicated fresher currently pursuing my education in B.Tech in Computer Science.</p> 
                <p> I’m actively seeking opportunities to learn, grow, and contribute as a developer. Open to internships, part-time, and full-time roles.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={call} alt="" style={{ width: '100px', height: '100px' }} /> <p>+91 9980550913</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location} alt="" style={{ width: '100px', height: '100px' }} /> <p>Bengaluru</p>
                    </div>
                    <div className="contact-detail">
                        <img src={mail} alt="" style={{ width: '100px', height: '100px' }}/> <p>chethankumarps24@gmail.com</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="text" placeholder='Enter your email' name='email' />
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                <button type='submit' className="contact-submit">Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact