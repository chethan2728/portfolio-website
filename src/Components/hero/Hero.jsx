import React from 'react';
import './Hero.css';
import profile_img from "../../assets/profile-img.jpg";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Chethan Kumar,</span> frontend developer based in Bengaluru,India.</h1>
        <p>i'm Chethan Kumar and i like frontend development.I am still pursuing my bachelors degree in computer science and engineering from CMR University</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero