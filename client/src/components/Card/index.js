import React from "react";
import "../Card/style.css"
export function Card(props) {

    return (
        <div className="card" >
            <br></br>
            <p> {props.post}</p>
            <p> {props.title}</p>
            <p> {props.author}</p>
            <p> {props.category}</p>
           
        </div>

   
    )
}