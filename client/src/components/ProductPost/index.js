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
        <h3>Product: <a href={props.productLink} target="_blank" rel="noopener noreferrer">{props.title}</a></h3>
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
        Category: {props.productCategory}
        <br></br>
        </Col>
        <Col>
        Author: {props.author}
        <br></br>
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
        </div>
    )
}

export default ProductPost;

