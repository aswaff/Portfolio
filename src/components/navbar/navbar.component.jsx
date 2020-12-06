import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { render } from 'react-dom';
import { Link } from "gatsby"

import './navbarcomponent.styles.css';

import Github from "../../../assets/github.svg"
import Email from '../../../assets/email.svg'
import Linkedin from '../../../assets/linkedin.svg'


export default function NavBar() {
    return (
    <div className="main-navbar">
        <Navbar collapseOnSelect expand="lg" variant="light" className="insidenavbar">
            <div className="logo">
                <Navbar.Brand href="/"><span className="dot-slash">./</span><span className="aswaff">ASWAFF</span></Navbar.Brand>
            </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/blog">Blog</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/projects">Projects</Nav.Link>
                </Nav>
                <Form inline>
                <a href="https://github.com/aswaff"><Github className="githubicon"/></a>
                <a href="mailto:aswaffdev@gmail.com?subject=Mail from aswaff.dev"><Email className="emailicon"/></a>
                <a href="https://www.linkedin.com/in/avery-swafford-999a2370/"><Linkedin className="linkedinicon"/></a>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    </div>
    )};