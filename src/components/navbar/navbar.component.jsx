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
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="insidenavbar">
            <div className="logo">
                <Navbar.Brand href="#home">ASWAFF</Navbar.Brand>
            </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Blog</Nav.Link>
                <Nav.Link href="#pricing">About</Nav.Link>
                </Nav>
                <Form inline>
                <Link to="https://github.com/aswaff"><Github className="githubicon"/></Link>
                <Link to="http://mailto:someone@yoursite.com?subject=Mail from Our Site"><Email className="emailicon"/></Link>
                <Link to="https://github.com/aswaff"><Linkedin className="linkedinicon"/></Link>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    </div>
    )};