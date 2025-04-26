import React from 'react'
import'./Footer.css'
import footer_logo from "../../assets/footer_logo.png"
import user_icon from "../../assets/user_icon.png"


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" style={{ width: '100px', height: '100px' }}/>
                <p> I'm a passionate and dedicated fresher currently pursuing my education in B.Tech in Computer Science.</p> 
                <p> I’m actively seeking opportunities to learn, grow, and contribute as a developer. Open to internships, part-time, and full-time roles.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" style={{ width: '50px', height: '50px' }}/>
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">
                    subscribe
                </div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2025 Chethan Kumar P S. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Terms of Service</p>
                <p>Peivacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer