import React, { Component } from 'react'
import API from "../utils/API"

class Forum extends Component {
    state = {
        title: "",
        text: "",
        category: "",
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
        API.createPost(newPost);

        this.setState(
            {
                title: "", text: "", category: ""
            }
        )
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
                </form>
            </div>
        );
    }
}



export default Forum