import React from 'react'
import './Services.css'
import theme_pattern from "../../assets/theme-pattern.svg";
import Services_Data from "../../assets/services_data.js";
import arrow_icon from "../../assets/arrow-theme.png";


const Services = () => {
  return (
    <div id='services' className='services'>
        <div className='services-title'>
            <h1>My services</h1>
            <img src={theme_pattern} alt="" style={{ width: '200px', height: '200px' }} />
        </div>
        <div className="services-container">
            {Services_Data.map((service,index)=>{
                return <div key={index} className="services-format">
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className="services-readmore">
                        <p>Read More</p>
                        <img src={arrow_icon} alt="" style={{ width: '110px', height: '50px' }} />
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Services