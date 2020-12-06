import React from "react";
import NavBar from "../components/navbar/navbar.component";
import './projects.styles.css'
import Footer from '../components/footer/footer.component';
import ProjectCard from '../components/projects/projectCard.component'

export default function Projects() {
  return (
  <div>
    <NavBar />
    <ProjectCard />
    <Footer />
  </div>
  )
}