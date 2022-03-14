import React from 'react'
import './contact.css'
import { InputGroup, Text, FormControl, Button, Container, Row, Col, ListGroup, Form } from "react-bootstrap";

const Contact = () => {
    return (
        <div className='contact'>
            <Container>
                <Row>
                    <Col className=''>
                        <h2>Any Suggestions??</h2>
                        <h4>Feel free to reach us..</h4>
                    </Col>

                    <Col className=''>
                        <div>
                        <div class="mb-3">
                                <label class="form-label cform">Name :</label>
                                <input type="Name" class="form-control" id="exampleFormControlInput1" placeholder=""/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label cform">Email : </label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label cform">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div class="mb-3">
                            <input class="btn btn-primary" type="submit" value="Submit"/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>



        </div>

    )


}

export default Contact;