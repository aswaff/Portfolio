import React from 'react'
import './projectCard.component.styles.css'
import ProjectData from "./projectData"
import Github from "../../../assets/github.svg"
import Link from "../../../assets/link.svg"


export default function ProjectCard() {
    return (<div className="project-page-wrapper">
            {ProjectData.map(project => 
            
                <div className="project-wrapper">
                    <div className="project-pic">
                        <img src={project.image} alt="project img" /> 
                    </div>
                        <div className="project-title">
                            <h3>{project.title}</h3>
                            <span className="project-framework">{project.tech_used.library}</span>
                            <span className="project-tech">{project.tech_used.tech}</span>
                        </div>
                        <div className="project-description">
                            <span>{project.description}</span>
                        </div>
                        <div className="project-links">
                            <a href={project.github_link}><Github /></a>
                            <a href={project.live_link}><Link /></a>
                        </div>
                </div>
        )} </div>
        )
    }