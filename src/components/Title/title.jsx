import React from 'react'
import './title.css'
import Button from 'react-bootstrap/Button';
import profilepic from '../../images/Profile pic.jpg'

export default function Title() {
    return (
        <div className="title-wrapper">
            <div className="title">
                <span>Hi, my name is Avery Swafford <br /> I'm a fullstack web developer.</span>
                <div className="title-button">
                    <Button variant="light" size="lg">Contact Me</Button>
                </div>
            </div>
            <div className="picofme">
                <img src={profilepic} alt="profilepic" />
            </div>

        </div>

    )

}