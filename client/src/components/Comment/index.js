import React from "react";
import "./style.css";

// right now this is printing the same comments for everything so it's not quite there lolol
function Comment(props) {
    return(
            <p>
                {props.comment}
            </p>
    )
}

export default Comment;
