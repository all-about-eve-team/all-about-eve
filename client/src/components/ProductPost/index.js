import React from "react";
import "./style.css";
import ProductImage from "../ProductImage"

function ProductPost (props) {
    return (
        <div>
        <h4>Product: <a href={props.productLink} target="_blank">{props.title}</a></h4>
        Product Review: {props.post}
        <br></br>
        Category: {props.productCategory}
        <br></br>
        <br></br>
        Author: {props.author}
        <br></br>
        <div><ProductImage title={props.title} image={props.image}/></div>
        <br></br>
        <div>
        Comments: {props.productComments}
        </div>
    </div>
    )
}

export default ProductPost;

