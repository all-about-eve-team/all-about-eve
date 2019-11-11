import React, { Component } from 'react'
import API from "../utils/API"
import { Card } from '../components/Card/index';


class Forum extends Component {
    state = {
        title: "",
        text: "",
        category: "",
        submittedComment: []
    };

    handleInputChange = e => {
        // console.log("working");
        // console.log(e.target);
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })


    }

    handleFormSubmit = e => {
        e.preventDefault();

        const newPost = {
            title: this.state.title,
            text: this.state.text,
            category: this.state.category
        }
        console.log(newPost);
        // axios

        // connecting to utils to create a post.
        let newComments = this.state.submittedComment;
        newComments.unshift(this.state.text);
        this.setState({
            submittedComment: newComments,
            title: "",
            text: "",
            category: "",

        });

        // API.createPost(newPost);


        // this.setState(
        //     {
        //         title: "", text: "", category: ""
        //     }
        // )


    }



    render() {
        return (
            <div>
                <form>
                    <input
                        name="title"
                        type="text"
                        value={this.state.title}
                        onChange={this.handleInputChange}
                        placeholder="title" />
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

                    {this.state.submittedComment.length ? (
                        <div data-aos="flip-up">{this.state.submittedComment.map(singleComment => (
                            <Card post={singleComment} />
                        ))}</div>
                    ) : null}
                </form>
            </div>
        );
    }
}



export default Forum