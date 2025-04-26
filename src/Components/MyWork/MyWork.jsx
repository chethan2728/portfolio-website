import React from 'react'
import './MyWork.css'
import animation_img from "../../assets/animaton.png";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow-theme.png";


const MyWork = () => {
  return (
    <div id='work' className='mywork'>
       <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={animation_img} alt="" style={{ width: '100px', height: '100px' }} />
        </div> 
        <div className="mywork-container">
            {mywork_data.map((work,index)=>{
                return <img key={index} src={work.w_img} alt="" />
            })}
        </div>
        <div className="mywork-showmore">
            <p>ShowMore</p>
            <img src={arrow_icon} alt="" style={{ width: '110px', height: '50px' }} />
        </div>
    </div>
  )
}

export default MyWork