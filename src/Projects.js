import React from "react"
import { Card, Container, Row } from "react-bootstrap";
import './Projects.css';
import chatbox from "./images/chatbox.png"
import seethefuture from "./images/seethefuture.png"
import tvdom from "./images/tvdom.png"
import wellminded from "./images/well-minded.png"

const Projects = () => {
    return (
        <div className="projects" id="projects">
            <Container className="projects-container">
                <Row className="projects1">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className="project-image" variant="top" src={chatbox} />
                        <Card.Body>
                            <Card.Title>React chatbox</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Individual project</Card.Subtitle>
                            <Card.Link target="_blank" href="https://roxana279-chat-frontend.netlify.app">Address</Card.Link>
                            <Card.Link target="_blank" href="https://github.com/279Roxana/node-challenge-chat-server">Github Link</Card.Link>

                            <Card.Text>
                                <span className="details">Description:</span> <p className="details-text">Full-Stack chatbox application</p>

                                <span className="details">Technology used:</span> <p className="details-text">React Hooks, CSS, Node js, Express, Mongoose, Mongodb</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className="project-image" variant="top" src={tvdom} />
                        <Card.Body>
                            <Card.Title>TV DOM project</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Individual project</Card.Subtitle>
                            <Card.Link target="_blank" href="https://cyf-279roxana-tv.netlify.app">Address</Card.Link>
                            <Card.Link target="_blank" href="https://github.com/279Roxana/tv-show-dom-project">Github Link</Card.Link>

                            <Card.Text>
                                <span className="details">Description:</span> <p className="details-text">TV shows display</p>

                                <span className="details">Technology used:</span> <p className="details-text">Html, CSS, Vanilla JavaSCript</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </Row>
                <Row className="projects2">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className="project-image" variant="top" src={wellminded} />
                        <Card.Body>
                            <Card.Title>Well-minded </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Group project</Card.Subtitle>
                            <Card.Link target="_blank" href="https://staging-well-minded.herokuapp.com">Address</Card.Link>
                            <Card.Link target="_blank" href="https://github.com/CodeYourFuture/well-minded">Github Link</Card.Link>

                            <Card.Text>
                                <span className="details">Description:</span> <p className="details-text">Web app connecting people who experience mental health issues, with organisations offering free support.
                            Contributed to tasks in both front-end and back-end. </p>

                                <span className="details">Technology used:</span> <p className="details-text">React Bootstrap, React Router, CSS, Node js, Express, Mongoose, Mongodb, Figma, Trello </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className="project-image" variant="top" src={seethefuture} />
                        <Card.Body>
                            <Card.Title>See the Future</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Group project</Card.Subtitle>
                            <Card.Link target="_blank" href="https://seethefuture-hackaton20.netlify.app/">Address</Card.Link>
                            <Card.Link target="_blank" href="https://github.com/279Roxana/Hackaton-sf-ldn-2020">Github Link</Card.Link>

                            <Card.Text>
                                <span className="details">Description:</span> <p className="details-text">Web app built during the Code for Good 2020 Hackathon, sponsored by Capgemini in collaboration with Code Your Future.
                            Responsible for back-end tasks.</p>

                                <span className="details">Technology used:</span> <p className="details-text">React, MongoDB, Node js, Validator, Mongoose, Trello</p>
                            </Card.Text>
                        </Card.Body>
                    </Card></Row></Container>
        </div>
    )
}
export default Projects