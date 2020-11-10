import React from "react"
import { Card, Col, Container } from "react-bootstrap";
import './About.css';
import self from "./images/self.jpeg"
import js from "./images/js.jpeg"
import react from "./images/react.png"
import node from "./images/node.png"
import mongo from "./images/mongo.jpeg"

const About = () => {
    return (
        <div className="about" id="about">
            <Card style={{ width: '18rem' }} className="m-4">
                <Card.Body className="card-items">

                    <Card.Img variant="top" src={self} />
                    <Card.Title>Roxana Cocias</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Full-Stack Developer</Card.Subtitle>
                    <Card.Link target="_blank" href="https://www.linkedin.com/in/roxana-cocias-9837a5188/">linkedin</Card.Link>
                    <Card.Link target="_blank" href="https://github.com/279roxana">Github Link</Card.Link>


                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="m-4">
                <Card.Body className="card-items mt-3">
                    <Card.Title>About me</Card.Title>
                    <Card.Text className="mt-3">
                        Tech enthusiast, graduated from CodeYourFuture Full-Stack Web Development course in October 2020.
                        I am eager to consolidate my knowledge through continuous learning and problem solving skills.
          </Card.Text>
                    <Card.Text className="mt-3">Proficient in:
        
                    <Container className="skills-icons mt-3 mb-3">
                    <Card.Img style={{ width: '25%' }} className="ml-3" src={js} />
                    <Card.Img style={{ width: '55%' }} className="ml-3" src={react} />
                    <Card.Img style={{ width: '60%' }}  className="ml-3" src={mongo} />
                    <Card.Img style={{ width: '25%' }} className="ml-3" src={node} />
                   
                    </Container>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
export default About