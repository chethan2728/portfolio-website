import React from 'react'
import './MyWork.css'
import animation_img from "../../assets/animaton.png";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow-theme.png";


const MyWork = () => {
  return (
    <div id="mywork" className="mywork">
      <h1>My Projects</h1>
      <div className="projects">
        {mywork_data.map((project) => (
          <div 
            key={project.w_no} 
            className="project-card" 
            onClick={() => window.open(project.w_link, "_blank")}
          >
            <img src={project.w_img} alt={project.w_name} />
            <h2>{project.w_name}</h2>
            <p>{project.w_desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork