import React from "react";
import NavBar from "../components/navbar/navbar.component";
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.styles.css'
import Footer from '../components/footer/footer.component';

export default function Home() {
  return (
  <div>
    <NavBar />
    <div className="about-wrapper">
        <div className="head-title">
            <h1>Technology, and development</h1>
        </div>
        <div className="paragraph-wrapper">
            <span>  I've been in some sort of professional technology role for over 7 years.  From working at a help desk with computer repair and custom builds, 
                    all the way to consulting businesses with their networks and IT deployment, tech has always been a part of my life.  
                    I've more recently found a love for development, specifically web development.  I am enjoying building things on 
                    my own and learning something new everyday. </span>
        </div>
    </div>
    <Footer />
  </div>
  )
}
