import React from "react";
import "./style.css";
import { FormControl, InputGroup, Dropdown, DropdownButton, Card } from 'react-bootstrap';


function QuestionComment(props) {
    return (
        <div>
        <hr></hr>
                <ul>
                Comment from {props.author}: 
               
                <li>{props.text}</li>
                
                
                </ul></div>
            
    )
}

export default QuestionComment;

