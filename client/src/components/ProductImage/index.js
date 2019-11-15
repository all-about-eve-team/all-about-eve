import React from "react";
import "./style.css"

const ProductImage = props => {
    return(
        <img src={props.image} alt={props.title}></img>
    )
}

export default ProductImage;