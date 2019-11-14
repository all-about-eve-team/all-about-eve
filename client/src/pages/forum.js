import React, { Component } from 'react'
import API from "../utils/API"
// import Card from '../components/Card';
import Question from "../components/Question"
import QuestionComment from "../components/QuestionComment"
import axios from "axios"
// import { makeStyles } from '@material-ui/core/styles';
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import { FormControl, InputGroup } from 'react-bootstrap';
import '../forum_style.css'
import { shape } from 'prop-types';

class Forum extends Component {
    state = {
        title: "",
        text: "",
        category: "",
        //need this to be user ID > this.props.username.getuser? or something like that?
        author: this.props.username,
        authorid: "",
        submittedQuestion: [],
        questionid: "",
        commenttext: ""
    };

    componentDidMount() {
        console.log(this.state.author)
        // this.props.getUser()
        axios.get('/user/' + this.state.author).then(res => {
            // .then(res=>{
            console.log(res.data._id)
            this.setState({ authorid: res.data._id })
        }).catch(err => console.log(err))
        // console.log(this.state.authorid)

        API.getPost()
            .then(res => {
                console.log(res)
                console.log(res.data[0].comments)
                this.setState({
                    submittedQuestion: res.data
                })
                console.log(this.state)
            })
            .catch(err => console.log(err));
    };

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    };

    handleFormSubmit = e => {
        e.preventDefault();

        const newPost = {
            author: this.state.authorid,
            title: this.state.title,
            text: this.state.text,
            category: this.state.category,
        }
        console.log(newPost);
        API.createPost(newPost)
        // below I've got to hardcode this in order for it to work -- need to find a way to immediately have the post _id grabbable when i run the below call
        // .then(API.updateUserPost(newPost.author, "5dcbc3e13ecd8339805eb78d"))
        this.setState(
            {
                title: "",
                text: "",
                category: "",
            }
        )
        // need a way to reload the page with the new post without logging the user out
    }

    handleCommentSubmit = e => {
        e.preventDefault();
        const newComment = {
            text: this.state.commenttext,
            author: this.state.author,
            post: this.state.post_id
        }
        console.log("comment: ")
        console.log(newComment.post)
        API.createComment(newComment)
            .then(API.updatePost(newComment))
            //hardcoding the comment id until i figure out how to dynamically grab it
            .then(API.updateUserComment(this.state.author, this.state.post))
        this.setState(
            {
                commenttext: "",
            }
        )
    }

    render() {
        // const classes = useStyles();
        return (
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

                            <button class="shape shape3" onClick={this.handleFormSubmit}
                            // style={'center'}
                            >Submit</button>
                        </InputGroup>


                    </form>
                </div>
                {this.state.submittedQuestion.map(post => (
                    <div className="isthiscard" data-aos="flip-up">
                        <Question post={post.text}
                            title={post.title}
                            author={this.state.author}
                            category={post.category}
                            comments={post.comments.map(comment => (
                                <QuestionComment text={comment.text} author={comment.author} />
                            ))}
                        />
                        <div className="accordian">
                        <Accordion>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Click here to add a comment!
                            </Accordion.Toggle>
                            <div className="accordiancollapse">
                            <Accordion.Collapse eventKey="0">
                                <InputGroup className="mb-3">

                                    <form>

                                        <FormControl
                                            name="commenttext"
                                            type="text"
                                            value={this.state.commenttext}
                                            onChange={this.handleInputChange}
                                            placeholder="Comment here!"
                                        />


                                        <button class="shape shape2" onClick={this.handleCommentSubmit}>GO</button>

                                    </form>
                                </InputGroup>
                            </Accordion.Collapse>
                        </div>
                        </Accordion>
                   </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Forum


