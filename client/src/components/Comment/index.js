import React from "react";
import "./style.css";


function Comment(props) {
    return(
            <p>
                {props.comment}
            </p>
    )
}

export default Comment;