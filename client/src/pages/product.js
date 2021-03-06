import React, { Component } from 'react'
import API from "../utils/API"
import ProductComment from "../components/ProductComment"
import ProductPost from "../components/ProductPost"
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import { FormControl, InputGroup, Dropdown, Alert } from 'react-bootstrap';
import '../product_style.css';
import { Link } from 'react-router-dom'


class Product extends Component {
    state = {
        title: "",
        text: "",
        image: "",
        productCategory: "",
        author: this.props.username,
        authorid: this.props._id,
        productLink: "",
        // the submittedProductPost state is what allows us to display all the posts:
        submittedProductPost: [],
        post: "",
        commenttext: "",
        // the commentsender states allows us to send data from a new comment to update an individual post:
        commentsender: ""
    };

    componentDidMount() {

        // here we do an API call to display all the posts
        API.getProductPost()
            .then(res => {
                this.setState({
                    submittedProductPost: res.data
                })
            })
            .catch(err => console.log(err));
    };

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    };

    // this function handles new post creation
    handleFormSubmit = e => {
        e.preventDefault();
        const newProductPost = {
            author: this.state.author,
            authorid: this.state.authorid,
            title: this.state.title,
            text: this.state.text,
            productCategory: this.state.productCategory,
            image: this.state.image,
            productLink: this.state.productLink
        }
        API.createProductPost(newProductPost)
        this.setState(
            {
                title: "",
                text: "",
                productCategory: "",
                image: "",
                productLink: ""
            }
        )
        // reload the components so the new post displays
        this.componentDidMount()
    }

    // this function handles the creation of a new comment
    handleCommentSubmit = e => {
        e.preventDefault();
        // this variable allows us to grab the text of the comment, the author of the comment, and the associated post id
        let newProductComment = {
            text: this.state.commenttext,
            author: this.state.author,
            post: e.target.className
        }
        // API call to create the actual comment
        API.createProductComment(newProductComment)
            .then(res => {
                // the senderComment variable lets us grab data within the API calls
                let senderComment = {}
                // now we update senderComment with data from teh response of the comment API call:
                senderComment.commentid = res.data._id
                senderComment.text = res.data.text
                senderComment.post = res.data.post
                // and lastly we set the commentsender state with our senderComment variable
                this.setState({ commentsender: senderComment })
                // and lastly we update the post the comment is tied to with all the new comment info so it will display when we populate the post with its comments
                API.updateProductPost(this.state.commentsender)
                // roload the components so the new comment displays
                this.componentDidMount()
            })
            .catch(err => console.log(err));
        //and lastly clearing everything out to make way for a new comment  
        this.setState(
            {
                commenttext: "",
                commentsender: ""
            }
        )
    }

    render() {
        // making sure that the forum page only displayes if the user is logged in
        const loggedIn = this.props.loggedIn;
        return (
            <div>
                {loggedIn ? (
                    <div>

                        <div className="comment-page">

                            <div className="product-input">
                                <form className="product-post">
                                    <InputGroup className="mb-3">
                                        <FormControl
                                            className="formcontrol"
                                            name="title"
                                            type="text"
                                            value={this.state.title}
                                            onChange={this.handleInputChange}
                                            placeholder="Product Name" />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <FormControl
                                            className="formcontrol"
                                            name="productLink"
                                            type="text"
                                            value={this.state.productLink}
                                            onChange={this.handleInputChange}
                                            placeholder="Product Link" />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <FormControl
                                            className="formcontrol"
                                            name="text"
                                            type="text"
                                            value={this.state.text}
                                            onChange={this.handleInputChange}
                                            placeholder="Product Review" />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <FormControl
                                            className="formcontrol"
                                            name="productCategory"
                                            type="text"
                                            value={this.state.productCategory}
                                            onChange={this.handleInputChange}
                                            placeholder="Product Category" />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <FormControl
                                            className="formcontrol"
                                            name="image"
                                            type="text"
                                            value={this.state.image}
                                            onChange={this.handleInputChange}
                                            placeholder="Product Image Link" />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <button className="shape shape3" onClick={this.handleFormSubmit}
                                        >Submit</button>
                                    </InputGroup>

                                </form>
                            </div>
                            <div>
                                {/* here we loop through every submitted post and display the posts along with their related comments */}
                                {this.state.submittedProductPost.map(post => (
                                    <div className="productwrapper" data-aos="flip-up" data-aos-duration = "1300" 
                                    data-aos-easing = "linear">
                                        <div>
                                            <ProductPost post={post.text}
                                                title={post.title}
                                                author={post.author}
                                                productCategory={post.productCategory}
                                                productLink={post.productLink}
                                                image={post.image}
                                                // here we loop through & display each post's comments:
                                                productComments={post.productComments.length ? (post.productComments.map(comment => (
                                                    <ProductComment text={comment.text} author={comment.author} data-aos="flip-up"/>
                                                ))
                                                ):(<div>
                                                    "Be the first to post!"
                                                    
                                                    </div>)}
                                            />

                                        </div>


                                        <div className="accordian">
                                            <Accordion>
                                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                                    Click here to add a comment!
                            </Accordion.Toggle>
                                                <div className="accordiancollapse">
                                                    <Accordion.Collapse eventKey="0">
                                                        <InputGroup className="mb-3">

                                                            <FormControl
                                                                name="commenttext"
                                                                type="text"
                                                                value={this.state.commenttext}
                                                                onChange={this.handleInputChange}
                                                                placeholder="Comment here!"
                                                            />
                                                            {/* in the button below we grab the post id so that when you submit it passes along the id of that particular post */}
                                                            <button className={post._id} data-value={post._id} onClick={this.handleCommentSubmit}>Submit!</button>

                                                        </InputGroup>
                                                    </Accordion.Collapse>


                                                    {/* currently when you type in the question box it displays in all boxes, ha! it's a bug */}

                                                </div>
                                            </Accordion>
                                        </div>
                                    </div>
                                ))}

                            </div>

                        </div>
                    </div>
                )
                    :
                    (
                        // <h1>You must be logged in to view this content.</h1>
<Alert variant="danger" dismissible>
                                  <Alert.Heading>Oh snap! You're not logged in!</Alert.Heading>
                                  <p>
                                  <Link to="/" className="btn btn-link text-secondary">
                                        <span className="text-secondary">See what we're about</span>
                                    </Link>
                                    <Link to="/login" className="btn btn-link text-secondary">
                                        <span className="text-secondary">Login!</span>
                                    </Link>
                                    <Link to="/signup" className="btn btn-link">
                                        <span className="text-secondary">Sign-up!</span>
                                    </Link>
                                    
                                  </p>
                                </Alert>                    )}
            </div>)

    }
}

export default Product;