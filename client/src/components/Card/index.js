import React, { Component } from "react";
import API from "../../utils/API"
import "./style.css";
import "../Comment";
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button';
import { InputGroup, FormControl } from 'react-bootstrap';

class Card extends Component {
    state = {
        comment: "",
        // userID: 
        // // author: this.author

    }
    componentDidMount() {
        API.getComment()
            .then(res => {
                console.log(res)
                this.setState({
                    comment: res.data
                })
            })
            .catch(err => console.log(err));
    };

    handleFormSubmit = e => {
        e.preventDefault();
        const newComment = {
            text: this.state.comment,
        }
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
                <Accordion>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Click me to see comments!
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        {/* <body style="overflow:hidden;"> */}
                        <div className="wrapper">

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        {/* </body> */}
                    </Accordion.Collapse>
                    <form>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Click me to add a comment!
      </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <div>
                                <InputGroup className="mb-3">
                                    <FormControl aria-describedby="basic-addon1" name="comment"
                                        type="text"
                                        placeholder="Comment here!" />
                                    <button onClick={this.handleFormSubmit}>Submit!</button>
                                </InputGroup>
                            </div>
                        </Accordion.Collapse>
                    </form>
                </Accordion>
            </div>
        )
    }
}
export default Card