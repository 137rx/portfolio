import React from "react";
import { Container, Row, Col, Navbar, Nav, Image, NavDropdown } from "react-bootstrap";
import './Nav.css';
const Navigation = () => {
    return (
        <div className="nav">
                    <Navbar expand="lg" className="nav-area" >
                       
                        <Col>
        
                        <Navbar.Brand href="#home">Home</Navbar.Brand>
                        </Col>
                        <Col />
                        <Col />
                       
                        <Col>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-5" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav>

                                <Nav.Link href="#about" className="link-nav pl-5">About</Nav.Link>
                                <Nav.Link href="#projects" className="link-nav pl-5">Projects</Nav.Link>
                                <Nav.Link href="#contact" className="link-nav pl-5">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        </Col>
                    </Navbar>
        </div>
    )
}
export default Navigation