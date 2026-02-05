import React from 'react'
import './About.css'
import profile_img from "../../assets/profile_img.png";


const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <p className="section-title">About</p>
            <h1>Building immersive web experiences</h1>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <div className="about-image-frame">
                    <img src={profile_img} alt="Chethan Kumar" />
                </div>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Aspiring Web Developer skilled in HTML, CSS, JavaScript, React, and Spring Boot. Seeking an opportunity to contribute to impactful projects, grow in a professional environment, and advance both front-end and back-end development skills.</p>
                    <p>I am deeply passionate about building innovative and user-friendly web applications. I love turning ideas into interactive digital experiences through coding and design. Exploring new technologies, solving real-world problems, and continuously learning to improve my skills drive me every day in my journey as a developer.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p><hr style={{width:"55%"}} />
                    </div>
                    <div className="about-skill">
                        <p>React JS</p><hr style={{width:"75%"}} />
                    </div>
                    <div className="about-skill">
                        <p>JavaScript</p><hr style={{width:"70%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Next JS</p><hr style={{width:"55%"}} />
                    </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>Fresher</h1>
                <p>Years of experience</p>
            </div>
            <div className="about-divider"></div>
            <div className="about-achievement">
                <h1>10+</h1>
                <p>Projects completed</p>
            </div>
            <div className="about-divider"></div>
            <div className="about-achievement">
                <h1>4+</h1>
                <p>Core skill stacks</p>
            </div>
        </div>
    </div>
  )
}

export default About
