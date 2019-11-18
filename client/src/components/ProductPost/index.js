import React from "react";
import "./style.css";
import ProductImage from "../ProductImage"
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ProductPost (props) {
    return (
        <div>
        <br></br>
        <h3>Product Name: {props.title}</h3>
        {/* <ul> */}
        <hr></hr>
        <Container>
            <Row>
                <Col>
                
            
        
        Product Review: {props.post}
        <br></br>
        {/* <li>{this.props.author}</li> */}
        </Col>
        <Col>
        Category: {props.productCategory}
        <br></br>
        Author: {props.author}
        <br></br>
        Product Image: <div><ProductImage title={props.title} image={props.image}/></div>
        {/* Comment:{this.props.comments} */}
        {/* </ul> */}
       </Col> 
       </Row>
        </Container>
        <br></br>
        <div className="commentsBox">
        Comments: {props.productComments}
        </div>
    </div>
    )
}

export default ProductPost;

