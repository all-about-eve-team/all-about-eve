import React from "react";
import "./style.css";
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
// import { Row , Col, AccordionCollapse, AccordionToggle} from "react-bootstrap";

function Question(props) {
            console.log(props.comments)
return (
        <div>
            <h4>Question: {props.title}</h4>
            {/* <ul> */}
<hr></hr>
Author: {props.author}
<br></br>
            Text: {props.post}
            <br></br>
            {/* <li>{this.props.author}</li> */}
            Category: {props.category}
            <br></br>
            
            {/* Comment:{this.props.comments} */}
            {/* </ul> */}
            <br></br>
            
            {props.comments.length ? (
            <div class="huh">     
                    {props.comments}    
            </div>
            ): (
null
            )}


         
        </div>

    )
}

export default Question;

