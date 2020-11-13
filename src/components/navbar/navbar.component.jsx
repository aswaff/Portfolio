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


export default function NavBar() {
    return (
    <div className="main-navbar">
        <Navbar bg="light" variant="light" className="insidenavbar">
            <Navbar.Brand href="#home">Aswaff</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form inline>
            <Link to="https://github.com/aswaff"><Github className="githubicon"/></Link>
            </Form>
        </Navbar>
    </div>
    )};

