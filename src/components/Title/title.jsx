import React from 'react'
import './title.css'
import profilepic from '../../images/Profile pic.jpg'

export default function Title() {
    return (
        <div className="title-wrapper">
            <div className="title">
                <span>I'm Avery Swafford <br /> A fullstack web developer.</span>
                <div className="subtitle">
                    <span>I am a self taught full-stack Web Developer.  I have experience in Node.js, React, JavaScript, and CSS/HTML.  
                        You can see some of my projects below, and I blog about what I learn and my experiences in development.</span>
                </div>
            </div>
            <div className="picofme">
                <img src={profilepic} alt="profilepic" />
            </div>

        </div>

    )

}