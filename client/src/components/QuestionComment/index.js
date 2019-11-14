import React from "react";
import "./style.css";

function QuestionComment (props) {
    return (
        <li>Comment from {props.author}: {props.text}</li>
    )
}

export default QuestionComment;

