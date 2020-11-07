import React from "react"
import './Footer.css';
import { Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


const Footer = () =>{
    return (
        <div className="footer-section">
            <Container>
                <Col>
                    <Row className="icons">
                        <a href="https://github.com/279roxana" target="_blank">
                        <FontAwesomeIcon icon={faGithub}  />
                        </a>
                        <a href="https://www.linkedin.com/in/roxana-cocias-9837a5188/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin}  />
                        </a>
                     </Row>
                </Col>
            </Container>
            
        </div>
    )
}
export default Footer