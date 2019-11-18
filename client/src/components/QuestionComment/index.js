import React from "react";
import "./style.css";
import { Container } from 'react-bootstrap';


function QuestionComment(props) {
    const spanStyle = {
        fontWeight: "bold"
    }
    return (
        <div>
            <Container>
                <span style={spanStyle}>{props.author}</span>:      {props.text}
                <hr></hr>
            </Container>
        </div>
    )
}

export default QuestionComment;

