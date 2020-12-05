import React from 'react'
import './projectCard.component.styles.css'
import ProjectData from "./projectData"



export default function ProjectCard() {
    return (
        ProjectData.map(project => 
        <div className="project-wrapper">
            <div className="title">
                <span>{project.title} <br /> A fullstack web developer.</span>
                <div className="subtitle">
                    <span>I am a self taught full-stack Web Developer.  I have experience in Node.js, React, Gatsby, JavaScript, and CSS/HTML.  
                       I love to continually learn and I blog about what I learn and share my experiences in development.</span>
                </div>
            </div>
            {console.log(ProjectData.map(a => a.title))}
        </div>
       

) 
)

}
