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
        Category: {props.category}
        <br></br>
        Author: {props.author}
        <br></br>
        Product Image: <ProductImage title={props.title} image={props.image}/>
        {/* Comment:{this.props.comments} */}
        {/* </ul> */}
        <br></br>
        Comments: {props.comments}
    </div>
    )
}

export default ProductPost;

