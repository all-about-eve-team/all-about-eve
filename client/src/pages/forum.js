import React, { Component } from 'react'
import API from "../utils/API"
import Question from "../components/Question"
import QuestionComment from "../components/QuestionComment"
import axios from "axios"
import { makeStyles } from '@material-ui/core/styles'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'

class Forum extends Component {
    state = {
        title: "",
        text: "",
        category: "",
        author: this.props.username,
        authorid: "",
        // the submittedQuestion state is what allows us to display all the posts:
        submittedQuestion: [],
        questionid: "",
        commenttext: "",
        // the commentsender states allows us to send data from a new comment to update an individual post:
        commentsender: ""
    };

    componentDidMount() {

        axios.get('/user/' + this.state.author).then(res => {
            // the below allows us to grab the user id reference in new posts and comments. we set this state at the beginning so that we can send it when new posts/comments are created
            this.setState({ authorid: res.data._id })
        }).catch(err => console.log(err))
        // here we do an API call to display all the posts
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
            author: this.state.authorid,
            title: this.state.title,
            text: this.state.text,
            category: this.state.category,
        }
        API.createPost(newPost)
        this.setState(
            {
                title: "",
                text: "",
                category: "",
            }
        )
        // need a way to reload the page with the new post without logging the user out!
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
                        <form>
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
                            {/* here we loop through every submitted question and display the posts along with their related comments */}
                            {this.state.submittedQuestion.map(post => (
                                <div>
                                    <Question post={post.text}
                                        title={post.title}
                                        author={this.state.author}
                                        category={post.category}
                                        // here we loop through & display each post's comments:
                                        comments={post.comments.map(comment => (
                                            <QuestionComment text={comment.text} author={comment.author} />
                                        ))}
                                    />
                                    <form>
                                        {/* currently when you type in the question box it displays in all boxes, ha! it's a bug */}
                                        <input
                                            type="text"
                                            name="commenttext"
                                            value={this.state.commenttext}
                                            onChange={this.handleInputChange}
                                            placeholder="Comment here!">
                                        </input>
                                        {/* in the button below we grab the post id so that when you submit it passes along the id of that particular post */}
                                        <button className={post._id} data-value={post._id} onClick={this.handleCommentSubmit}>Submit!</button>
                                    </form>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                        <h1>You must be logged in to view this content.</h1>
                    )}
            </div>
        )
    }
}

export default Forum


