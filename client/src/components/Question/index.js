import React from "react";
import "./style.css";
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Question(props) {
    console.log(props.comments)
    return (
        <div>
            <br></br>
            <h3>{props.title}</h3>
            {/* <ul> */}
            <hr></hr>
            {/* Author: {props.author} */}
            <Container>
            <Row>
           <Col>
             {props.post}
            <br></br>
            </Col>
            {/* <li>{this.props.author}</li> */}
            <Col>
            Category: {props.category}
            <br></br>
            </Col>
            </Row>
            </Container>
            {/* Comment:{this.props.comments} */}
            {/* </ul> */}
            <br></br>

            {props.comments.length ? (
                <div class="huh">
                    {props.comments}
                </div>
            ) : (
                    null
                )}



        </div>

    )
}

export default Question;

