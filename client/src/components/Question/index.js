import React from "react";
import "./style.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Question(props) {
    return (
        <div>
            <br></br>
            <h3>{props.title}</h3>
            <hr></hr>
            Author: {props.author}
            <Container>
            <Row>
           <Col>
             {props.post}
            <br></br>
            </Col>
            <Col>
            Category: {props.category}
            <br></br>
            </Col>
            </Row>
            </Container>
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

