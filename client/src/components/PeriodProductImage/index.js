import React from "react";
import "./style.css"

const PeriodProductImage = props => {
    return(
        <img src={props.image} alt={props.title}></img>
    )
}

export default PeriodProductImage;