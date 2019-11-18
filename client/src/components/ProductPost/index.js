import React from "react";
import "./style.css";
import ProductImage from "../ProductImage"

function ProductPost (props) {
    return (
        <div>
        <h4>Product Name: <a href={props.productLink} target="_blank">{props.title}</a></h4>
        {/* <ul> */}
        Product Review: {props.post}
        <br></br>
        {/* <li>{this.props.author}</li> */}
        Category: {props.productCategory}
        <br></br>
        Product Link: <a href={props.productLink} target="_blank"></a>
        Author: {props.author}
        <br></br>
        {/* Comment:{this.props.comments} */}
        {/* </ul> */}
        <br></br>
        <div>
        Comments: {props.productComments}
        </div>
    </div>
    )
}

export default ProductPost;

