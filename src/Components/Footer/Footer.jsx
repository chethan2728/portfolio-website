import React from 'react'
import'./Footer.css'
import footer_logo from "../../assets/footer_logo.png"


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="Chethan Kumar logo" style={{ width: '72px', height: '72px' }}/>
                <p> I'm a passionate and dedicated fresher currently pursuing my education in B.Tech in Computer Science.</p> 
                <p> I’m actively seeking opportunities to learn, grow, and contribute as a developer. Open to internships, part-time, and full-time roles.</p>
            </div>
            <div className="footer-top-right">
                <p className="footer-label">Contact</p>
                <a href="mailto:chethankumarps24@gmail.com">chethankumarps24@gmail.com</a>
                <a href="tel:+919980550913">+91 9980550913</a>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2026 Chethan Kumar P S. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Futuristic Web Experiences</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
