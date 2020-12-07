import React from 'react'
import './title.css'
import Img from "gatsby-image"



export default function Title(props) {
    return (
        <div className="title-wrapper">
            <div className="title">
                <span>Avery Swafford <br />Fullstack Development</span>
                <div className="subtitle">
                    <span>I am a self taught full-stack Web Developer.  I have experience in Node.js, React, Gatsby, JavaScript, and CSS/HTML.  
                       I love to continually learn and I blog about what I learn and share my experiences in development.</span>
                </div>
            </div>
            <div className="picofme">
            
            <Img fixed={props.mePic.file.childImageSharp.fixed} alt="mepic" />
            </div>
            {console.log(props)}
        </div>

    )

}
