import React, { Component } from "react";
import API from "../../utils/API"
import "./style.css";
import "../Comment";
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'

//have to figure out how to pass the specific post id

class Card extends Component {
    state = {
        comment: "",
        author: this.props.author,
        // hardcoding with a post id to check functionality
        post: "5dcb5cdc5fff754f7c8cc27f",
        // pull in associated comments
        allComments: [],
        authorid: ""
    }
    componentDidMount() {
        console.log(this.state.author)
        API.getPost()
            .then(res => {
                console.log(res)
                this.setState({
                    allComments: res.data.comments
                })
            })
            .catch(err => console.log(err));
        
    };

    handleFormSubmit = e => {
        e.preventDefault();
        const newComment = {
            text: this.state.comment,
            author: this.state.author,
            post: this.state.post
        }
        console.log("comment: ")
        console.log(newComment)
        API.createComment(newComment);
        this.setState(
            {
                comment: "",
            }
        )
    }

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    };

    render() {
        return (
            <div className="card" >
                <h4>Question: {this.props.title}</h4>
                {/* <ul> */}
                Comment: {this.props.post}
                <br></br>
                {/* <li>{this.props.author}</li> */}
                Category: {this.props.category}
                <br></br>
                {/* Comment:{this.props.comments} */}
                {/* </ul> */}
                <br></br>
                <div>Comments will populate here:
                    {this.state.allComments}
                </div>
                <Accordion defaultActiveKey="0">
                <form>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Click me to add a comment!
      </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <div>
                            <input
                                name="comment"
                                type="text"
                                value={this.state.comment}
                                onChange={this.handleInputChange}
                                placeholder="Comment here!">
                            </input>
                            <button onClick={this.handleFormSubmit}>Submit!</button>
                        </div>
                    </Accordion.Collapse>

                </form>
                </Accordion>
            </div>


        )
    }
}
export default Card