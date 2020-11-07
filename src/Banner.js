import React from "react"
import { Col, Container, Row } from "react-bootstrap";
import './Banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'

const Banner = () => {
    return (
        <div className="banner" id="home">
            <Container className="intro">
                <Col>
                <h1>Hello, I'm Roxana </h1>
                <h2>Sofware Developer</h2>
                <FontAwesomeIcon icon={faLaptop} style={{ width: '8%' }} />
                </Col>
            </Container>
        </div>
    )
}
export default Banner