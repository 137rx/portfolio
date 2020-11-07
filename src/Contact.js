import React, { useCallback } from "react"
import { useState } from "react"
import './Contact.css';
import { Container, Col, Form, Button, Row } from "react-bootstrap";
import { db } from "./firebase";


const Contact = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const [nameError, setNameError] = useState("")
  const [emailError, setEmailError] = useState("")
  const [subjectError, setSubjectError] = useState("")
  const [messageError, setMessageError] = useState("")

  const [submitted, setSubmitted] = useState("")


  const handleSubmit = (e) => {
    setSubmitted("")
    e.preventDefault();

    if (name.length < 2) {
      return setNameError("Please enter valid name") 
    }

    if (!email.includes("@")) {
      return setEmailError("Please enter valid email") 
    }
    if (subject.length < 2) {
      return setSubjectError("Please enter valid subject") 
    }
    if (message.length < 2) {
      return setMessageError("Please enter valid message") 
    }

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        subject: subject,
        message: message
      })
      .then(() => {

        setSubmitted("Message submitted succesfully!!!")
      })
      .catch((error) => {
        alert(error.message);

      });

    setName("")
    setEmail("")
    setSubject("")
    setMessage("")

    setNameError("")
    setEmailError("")
    setSubjectError("")
    setMessageError("")
  }

  return (
    <div className="contact-section  d-flex justify-content-centre" id="contact" >
      <h1 className="contact-title mt-5">Contact me</h1>
      <p className="contact-info mb-5">Please feel free to use this form </p>
     {submitted ?  <p className="success-message  mt-1">{submitted} </p>: ""}
      <Container className="form-container" ><Col>
        <Form style={{ width: '70%' }} onSubmit={handleSubmit} className="contact-form" >
          <Form.Group as={Col}>
            <Form.Label> Name</Form.Label>
            <Form.Control type="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
          </Form.Group>
          {nameError ?  <p className="form-message text-white bg-danger mt-1">{nameError} </p>: ""}

          <Form.Group as={Col} >
            <Form.Label> Email</Form.Label>
            <Form.Control type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />

          </Form.Group>
          {emailError ?  <p className="form-message text-white bg-danger mt-1">{emailError} </p>: ""}

          <Form.Group as={Col}>
            <Form.Label> Subject</Form.Label>
            <Form.Control type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" />

          </Form.Group>
          {subjectError ?  <p className="form-message text-white bg-danger mt-1">{subjectError} </p>: ""}

          <Form.Group as={Col} >
            <Form.Label> Message</Form.Label>
            <Form.Control as="textarea" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your message here" />

          </Form.Group>
          {messageError ?  <p className="form-message text-white bg-danger mt-1">{messageError} </p>: ""}

          <Button className="form-button float-right mb-5" variant="primary" type="submit">
            Submit
  </Button>
        </Form>
      </Col>
      </Container>
    </div>
  )
}
export default Contact