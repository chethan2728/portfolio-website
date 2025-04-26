import React from 'react'
import './About.css'
import profile_img from "../../assets/profile-img.jpg";


const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Aspiring Web Developer skilled in HTML, CSS, JavaScript, React, and Spring Boot. Seeking an opportunity to contribute to impactful projects, grow in a professional environment, and advance both front-end and back-end development skills.</p>
                    <p>I am deeply passionate about building innovative and user-friendly web applications. I love turning ideas into interactive digital experiences through coding and design. Exploring new technologies, solving real-world problems, and continuously learning to improve my skills drive me every day in my journey as a developer.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML&CSS</p><hr style={{width:"50%"}} />
                    </div>
                    <div className="about-skill">
                        <p>React JS</p><hr style={{width:"70%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Java Script</p><hr style={{width:"60%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Next JS</p><hr style={{width:"50%"}} />
                    </div>
                </div>
            </div>
            <div className="about-achivements">
                <div className="about-achivement">
                    <h1>FRESHER</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achivement">
                    <h1>10+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
            </div>
        </div>
    </div>
  )
}

export default About