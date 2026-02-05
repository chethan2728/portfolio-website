import React from 'react'
import './MyWork.css'
import animation_img from "../../assets/animaton.png";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow-theme.png";


const MyWork = () => {
  return (
    <div id="mywork" className="mywork">
      <div className="mywork-title">
        <p className="section-title">Portfolio</p>
        <h1>Latest work and experiments</h1>
      </div>
      <div className="projects">
        {mywork_data.map((project) => (
          <div
            key={project.w_no}
            className={`project-card ${project.w_featured ? "project-featured" : ""}`}
            onClick={() => window.open(project.w_link, "_blank")}
          >
            {project.w_featured && <span className="project-tag">Latest</span>}
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
