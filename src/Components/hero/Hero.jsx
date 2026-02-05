import React from 'react';
import './Hero.css';
import profile_img from "../../assets/profile_img.png";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resume from '../../assets/resume.pdf';

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <div className="hero-visual">
            <div className="hero-orbit"></div>
            <div className="hero-orbit hero-orbit-secondary"></div>
            <img src={profile_img} alt="Chethan Kumar" />
        </div>
        <h1><span>I'm Chethan Kumar,</span> frontend developer based in Bengaluru, India.</h1>
        <p>I'm Chethan Kumar and I love frontend development. I'm currently pursuing my bachelor's degree in Computer Science and Engineering at CMR University.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">
            <a href={resume} target="_blank" rel="noopener noreferrer">My resume</a>
            </div>
        </div>
    </div>
  )
}

export default Hero
