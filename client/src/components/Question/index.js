import React from "react";
import "./style.css";
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'

function Question (props) {
    return (
        <div 
        // className="card"
         >
        <h4>Question: {props.title}</h4>
        {/* <ul> */}
        Text: {props.post}
        <br></br>
        {/* <li>{this.props.author}</li> */}
        Category: {props.category}
        <br></br>
        Author: {props.author}
        {/* Comment:{this.props.comments} */}
        {/* </ul> */}
        <br></br>
        Comments: {props.comments}
       
    </div>
    )
}

export default Question;

