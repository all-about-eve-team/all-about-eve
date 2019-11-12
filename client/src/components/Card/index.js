import React from "react";
import "../Card/style.css"
export function Card(props) {

    return (
        <div className="card" >
            <br></br>
            <p> Comment: {props.post}</p>
        </div>

   
    )
}