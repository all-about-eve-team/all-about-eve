import React from "react";
import "./style.css";
import { FormControl, InputGroup, Dropdown, DropdownButton, Card } from 'react-bootstrap';


function QuestionComment(props) {
    return (
        <div>
        
                <ul>
                Comment from {props.author}: 
               
                <li>{props.text}</li>
                
                
                </ul><hr></hr></div>
            
    )
}

export default QuestionComment;

