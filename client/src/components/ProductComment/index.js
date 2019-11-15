import React from "react";
import "./style.css";

function ProductComment (props) {
    return (
        <li>Comment from {props.author}: {props.text}</li>
    )
}

export default ProductComment;

