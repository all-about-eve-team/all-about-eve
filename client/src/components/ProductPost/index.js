import React from "react";
import "./style.css";
import ProductImage from "../ProductImage"

function ProductPost (props) {
    return (
        <div>
        <h4>Product Name: {props.title}</h4>
        {/* <ul> */}
        Product Review: {props.post}
        <br></br>
        {/* <li>{this.props.author}</li> */}
        Category: {props.productCategory}
        <br></br>
        Author: {props.author}
        <br></br>
        Product Image: <div><ProductImage title={props.title} image={props.image}/></div>
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

