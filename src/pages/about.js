import React from "react";
import { Link } from "gatsby"
import NavBar from "../components/navbar/navbar.component";
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.styles.css'
import Footer from '../components/footer/footer.component';

export default function Home() {
  return (
  <div>
    <NavBar />
    <div className="tech-and-dev">
        <div className="head-title">
            <h2>My Dev Journey</h2>
        </div><hr className="about-line"></hr>
        <div className="paragraph-wrapper">
            <span>  Learning how to program has been one of the most difficult things I have done.  Its been a long journey, 
                and the learning never stops. However, it has become one of my favorite things to do. I've found that  
                <Link to="/blog/do-something-wrong-4f9c"> building things</Link> help me learn the most. 
                <a href="mailto:aswaffdev@gmail.com?subject=Mail from aswaff.dev"> Connect with me</a> if you have any
                projects that you would like to have help with!</span>
        </div>
    </div>

    <span className="dot-slash-about">./</span>

    <div className="tech-passion">
        <div className="head-title">
                <h2>My Background</h2>
        </div><hr className="about-line"></hr>
        <div className="paragraph-wrapper">
            <span>  I've been in a professional tech role for over 7 years.  From working at a help desk with computer repair and custom builds, 
                    all the way to consulting businesses with their networks and IT deployment, tech has always been a part of my life.  
                    I've more recently found a love for development, specifically web development.  I am enjoying building things on 
                    my own and learning something new everyday. </span>
        </div>
    </div>




    
    <Footer />
  </div>
  )
}
