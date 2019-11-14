import React, { Component } from 'react'
import API from "../utils/API"
import Card from '../components/Card';
import Question from "../components/Question"
import QuestionComment from "../components/QuestionComment"
import axios from "axios"
import { makeStyles } from '@material-ui/core/styles';
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'

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
        console.log(e.target.postid)
        console.log(e.target.className)
    
        console.log(this.state.postid)
        const newComment = {
            text: this.state.commenttext,
            author: this.state.author,
            post: e.target.className
        }
        console.log("comment: ")
        console.log(newComment)
        API.createComment(newComment)
            .then(API.updatePost(newComment))
            //hardcoding the comment id until i figure out how to dynamically grab it
            // .then(API.updateUserComment(this.state.author, this.state.post))
        this.setState(
            {
                commenttext: "",
            }
        )
    }

    render() {
        // const classes = useStyles();

        return (
            <div>
                <form>
                    {/* // className={classes.container}
                > */}
                    {/* <div>
                        <TextField
                            id="standard-basic"
                            className={classes.textField}
                            label="Standard"
                            margin="normal"
                        />
                    </div> */}
                    <input
                        name="title"
                        type="text"
                        value={this.state.title}
                        onChange={this.handleInputChange}
                        placeholder="Question" />

                    <input
                        name="text"
                        type="text"
                        value={this.state.text}
                        onChange={this.handleInputChange}
                        placeholder="text" />

                    <input
                        name="category"
                        type="text"
                        value={this.state.category}
                        onChange={this.handleInputChange}
                        placeholder="category" />
                    <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
                <div>
                    {this.state.submittedQuestion.map(post => (
                        <div>
                        <Question post={post.text}
                            title={post.title}
                            author={this.state.author}
                            category={post.category}
                            comments={post.comments.map(comment => (
                                <QuestionComment text={comment.text} author={comment.author} />
                            ))}
                        />
                        <form>
                        <input
                            name="commenttext"
                            type="text"
                            className={post._id}
                            value={this.state.commenttext}
                            onChange={this.handleInputChange}
                            placeholder="Comment here!">
                        </input>
                        <button className={post._id} data-value={post._id} onClick={this.handleCommentSubmit}>Submit!</button>
                    </form>
                    </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Forum


