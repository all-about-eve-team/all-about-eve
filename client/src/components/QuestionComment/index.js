import React from "react";
import "./style.css";

function QuestionComment (props) {
    return (
        <div>
        <li>Comment from {props.author}: {props.text}</li>
        </div>
    )
}

export default QuestionComment;

