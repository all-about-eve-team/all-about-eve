import React from "react";
import "./style.css";
import ProductImage from "../ProductImage"
<<<<<<< HEAD
import Container from 'react-bootstrap/Container';
=======
import Container from "react-bootstrap/Container";
>>>>>>> master
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ProductPost (props) {
    return (
        <div>
<<<<<<< HEAD
            <br></br>
        <h3>Product: <a href={props.productLink} target="_blank">{props.title}</a></h3>
        <hr></hr>
        <Container>
            <Row>
                <div className="review">
        Product Review: {props.post}
        <br></br>
        </div>
        <br></br>
        <br></br>
        </Row>
        <Row>
            <Col>
=======
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
>>>>>>> master
        Category: {props.productCategory}
        <br></br>
        </Col>
        <Col>
        Author: {props.author}
        <br></br>
<<<<<<< HEAD
        </Col>
        </Row>
        <Row>
        <div className="review"><ProductImage title={props.title} image={props.image}/></div>
        </Row>
        </Container>
        <br></br>
        
        {props.productComments.length ? (
                <div class="huh">
                    {props.productComments}
                </div>
            ) : (
                    null
                )}
=======
        Product Image: <div><ProductImage title={props.title} image={props.image}/></div>
        {/* Comment:{this.props.comments} */}
        {/* </ul> */}
       </Col> 
       </Row>
        </Container>
        <br></br>
        <div className="commentsBox">
        Comments: {props.productComments}
>>>>>>> master
        </div>
    )
}

export default ProductPost;

