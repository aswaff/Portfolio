import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { render } from 'react-dom';

import './navbarcomponent.styles.css';


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
            {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
            <img src="..\..\static\GitHub-Mark.png" alt="github" />
            <Button variant="outline-primary">Search</Button>
            </Form>
        </Navbar>
    </div>
    )};

