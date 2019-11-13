import React, { Component } from 'react'
import API from "../utils/API"
import Card from '../components/Card';
// import { makeStyles } from '@material-ui/core/styles';
// import { FormControl } from 'react-bootstrap';
import { InputGroup, FormControl } from 'react-bootstrap';

class Forum extends Component {
    state = {
        title: "",
        text: "",
        category: "",
        // author: this.props.username,
        submittedQuestion: [],
        // categoryArray: []


    };

    // console.log("author: "+ author);


    componentDidMount() {
        API.getPost()
            .then(res => {
                console.log(res)
                this.setState({
                    submittedQuestion: res.data
                })
            })
            .catch(err => console.log(err));
    };

    handleInputChange = e => {
        // console.log("working");
        // console.log(e.target);
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    };

    handleFormSubmit = e => {
        e.preventDefault();
        const newPost = {
            // // author: this.state.author,
            title: this.state.title,
            text: this.state.text,
            category: this.state.category,
        }
        console.log(newPost);
        API.createPost(newPost);
        this.setState(
            {
                title: "",
                text: "",
                category: ""
            }
        )
    }



    render() {
        // const classes = useStyles();
        return (
            <div id="input-question">
                {this.props.username}
                <form>

                    <InputGroup className="mb-3">

                        <FormControl
                            name="title"
                            type="text"
                            value={this.state.title}
                            onChange={this.handleInputChange}
                            placeholder="Question" />


                        <FormControl
                            name="text"
                            type="text"
                            value={this.state.text}
                            onChange={this.handleInputChange}
                            placeholder="text" />

                        <FormControl
                            name="category"
                            type="text"
                            value={this.state.category}
                            onChange={this.handleInputChange}
                            placeholder="category" />
                        <button onClick={this.handleFormSubmit}>Submit</button>
                    </InputGroup>
                </form>
                <div>
                    {this.state.submittedQuestion.map(post => (
                        <Card post={post.text}
                            title={post.title}
                            // // author={post.author}
                            category={post.category}
                            card={Card} />
                    ))}
                </div>


            </div>
        );
    }
}



export default Forum