import React, { Component } from 'react'
import API from "../utils/API"
import Question from "../components/Question"
import QuestionComment from "../components/QuestionComment"
import { makeStyles } from '@material-ui/core/styles'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import { Container, FormControl, InputGroup, Alert, Dropdown, DropdownButton, Card } from 'react-bootstrap';
import '../forum_style.css';
import TagSelection from '../components/Tags'
import { shape } from 'prop-types';
import AOS from 'aos'



class Forum extends Component {
    state = {
        title: "",
        text: "",
        category: "",
        author: this.props.username,
        authorid: this.props._id,
        // the submittedQuestion state is what allows us to display all the posts:
        submittedQuestion: [],
        questionid: "",
        commenttext: "",
        // the commentsender states allows us to send data from a new comment to update an individual post:
        commentsender: "",
        submittedTags: []
    };

    componentDidMount() {
        API.getPost()
            .then(res => {
                this.setState({
                    submittedQuestion: res.data
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
        const newPost = {
            author: this.state.author,
            authorid: this.state.authorid,
            title: this.state.title,
            text: this.state.text,
            category: this.state.category,
            tags: this.state.submittedTags
        }
        API.createPost(newPost)
        this.setState(
            {
                title: "",
                text: "",
                category: "",

            }
        )
        // reload the components so the new post displays
        this.componentDidMount()
    }
    pushonArray = value => {
        let tagsVariable = this.state.submittedTags;
        tagsVariable.push(value);
        this.setState({
            submittedTags : tagsVariable
        })
        console.log(this.state.submittedTags);
        
    }
  

    // this function handles the creation of a new comment
    handleCommentSubmit = e => {
        e.preventDefault();
        // this variable allows us to grab the text of the comment, the author of the comment, and the associated post id
        let newComment = {
            text: this.state.commenttext,
            author: this.state.author,
            post: e.target.className
        }
        // API call to create the actual comment
        API.createComment(newComment)
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
                API.updatePost(this.state.commentsender)
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

                            <div className="question-input">
                                <form className="question-post">
                                    <InputGroup className="mb-3">
                                        <FormControl
                                            className="formcontrol"
                                            name="title"
                                            type="text"
                                            value={this.state.title}
                                            onChange={this.handleInputChange}
                                            placeholder="Question" />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <FormControl
                                            className="formcontrol"
                                            name="text"
                                            type="text"
                                            value={this.state.text}
                                            onChange={this.handleInputChange}
                                            placeholder="text" />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <FormControl
                                            className="formcontrol"
                                            name="category"
                                            type="text"
                                            value={this.state.category}
                                            onChange={this.handleInputChange}
                                            placeholder="category" />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <button className="shape shape3" onClick={this.handleFormSubmit}
                                        // style={'center'}
                                        >Submit</button>
                                    </InputGroup>
                                    
                                    {/* <TagSelection
                                    pushonArray = {this.pushonArray}
                                    value={this.value}
                                    submittedTags={this.submittedTags}>

                                    </TagSelection> */}
                                    
                                   




                                </form>
                            </div>
                            <div>
                                {/* here we loop through every submitted question and display the posts along with their related comments */}

                                {this.state.submittedQuestion.map(post => (

                                    <div className="questionwrapper" data-aos="flip-up" data-aos-duration = "1300" 
                                    data-aos-easing = "linear"
                                    >
                                        <div >
                                            <Question
                                                post={post.text}
                                                title={post.title}
                                                author={post.author}
                                                category={post.category}
                                                // here we loop through & display each post's comments:
                                                //create an if else statement to be like "be the first to post a comment", student react router Book pages/Books
                                                comments={post.comments.length ? (post.comments.map(comment => (
                                                    <Container>
                                                    <QuestionComment text={comment.text} author={comment.author} data-aos="flip-up">
                                                        {this.props.children}
                                                    </QuestionComment>
                                                    </Container>
                                                    // {if (this.props.comments > 0) ? 
                                                    //     (this.props.comments): (<div>Be the first to post!</div>) }
                                                )
                                                )
                                                ) : (
                                                        <div>
                                                            "Be the first to post!"
                                                            
                                                            </div>
                                                    )}
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
                                                            <button className="shape shape3" className={post._id} data-value={post._id} onClick={this.handleCommentSubmit}>Submit!</button>

                                                        </InputGroup>
                                                    </Accordion.Collapse>


                                                    {/* currently when you type in the question box it displays in all boxes, ha! it's a bug */}

                                                    {/* in the button below we grab the post id so that when you submit it passes along the id of that particular post */}

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
                                  <Alert.Heading>Oh snap! Log in to see content!</Alert.Heading>
                                  <p>
                                    
                                  </p>
                                </Alert>
                             
                          
                        //   render(<AlertDismissibleExample />)
                    )}
            </div>)

    }
}
export default Forum;


